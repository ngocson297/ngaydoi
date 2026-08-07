var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, ForbiddenException, Injectable, HttpException, HttpStatus, UnauthorizedException, } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { hashPassword, verifyPassword } from "../common/security/password.js";
import { createOpaqueToken, hashToken } from "../common/security/token.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailService } from "../operations/mail.service.js";
import { AccessTokenService } from "./access-token.service.js";
import { RateLimitService } from "./rate-limit.service.js";
let AuthService = class AuthService {
    prisma;
    accessTokens;
    rateLimit;
    mail;
    dummyHashPromise = hashPassword("DummyPassword123");
    constructor(prisma, accessTokens, rateLimit, mail) {
        this.prisma = prisma;
        this.accessTokens = accessTokens;
        this.rateLimit = rateLimit;
        this.mail = mail;
    }
    async register(dto, metadata) {
        this.rateLimit.consume(`register:${metadata.ipAddress ?? "unknown"}`, 5, 60 * 60 * 1000);
        const email = dto.email.trim().toLowerCase();
        const existing = await this.prisma.user.findUnique({ where: { email } });
        if (existing)
            throw new ConflictException("An account already exists for this email");
        const requireVerification = process.env.REQUIRE_EMAIL_VERIFICATION !== "false";
        const passwordHash = await hashPassword(dto.password);
        const user = await this.prisma.user.create({
            data: {
                email,
                displayName: dto.displayName.trim(),
                passwordHash,
                status: requireVerification ? "PENDING_VERIFICATION" : "ACTIVE",
                emailVerifiedAt: requireVerification ? null : new Date(),
            },
        });
        let verificationUrl;
        if (requireVerification)
            verificationUrl = await this.createEmailVerification(user, dto.returnPath);
        await this.audit("AUTH_REGISTER", true, metadata, user.id);
        return {
            message: requireVerification ? "Account created. Verify your email before signing in." : "Account created.",
            ...(this.isDevelopment() && verificationUrl ? { developmentVerificationUrl: verificationUrl } : {}),
        };
    }
    async verifyEmail(token, metadata) {
        const record = await this.prisma.emailVerificationToken.findUnique({
            where: { tokenHash: hashToken(token) },
            include: { user: true },
        });
        if (!record || record.usedAt || record.expiresAt <= new Date()) {
            throw new UnauthorizedException("Verification link is invalid or expired");
        }
        await this.prisma.$transaction([
            this.prisma.emailVerificationToken.update({ where: { id: record.id }, data: { usedAt: new Date() } }),
            this.prisma.user.update({
                where: { id: record.userId },
                data: { emailVerifiedAt: new Date(), status: "ACTIVE", failedLoginAttempts: 0, lockedUntil: null },
            }),
        ]);
        await this.audit("AUTH_EMAIL_VERIFIED", true, metadata, record.userId);
        return { message: "Email verified. You can now sign in." };
    }
    async resendVerification(dto, metadata) {
        const email = dto.email.trim().toLowerCase();
        this.rateLimit.consume(`verify:${metadata.ipAddress ?? "unknown"}:${email}`, 5, 15 * 60 * 1000);
        const user = await this.prisma.user.findUnique({ where: { email } });
        let verificationUrl;
        if (user && !user.emailVerifiedAt && user.status === "PENDING_VERIFICATION") {
            verificationUrl = await this.createEmailVerification(user);
            await this.audit("AUTH_VERIFICATION_RESENT", true, metadata, user.id);
        }
        return {
            message: "If the account requires verification, a new link has been created.",
            ...(this.isDevelopment() && verificationUrl ? { developmentVerificationUrl: verificationUrl } : {}),
        };
    }
    async login(dto, metadata) {
        const email = dto.email.trim().toLowerCase();
        this.rateLimit.consume(`login:${metadata.ipAddress ?? "unknown"}:${email}`, 10, 15 * 60 * 1000);
        const user = await this.prisma.user.findUnique({ where: { email } });
        const validPassword = await verifyPassword(dto.password, user?.passwordHash ?? (await this.dummyHashPromise));
        if (!user || !validPassword) {
            if (user)
                await this.recordFailedLogin(user.id, user.failedLoginAttempts);
            await this.audit("AUTH_LOGIN", false, metadata, user?.id, { reason: "INVALID_CREDENTIALS" });
            throw new UnauthorizedException("Email or password is incorrect");
        }
        if (user.lockedUntil && user.lockedUntil > new Date()) {
            await this.audit("AUTH_LOGIN", false, metadata, user.id, { reason: "LOCKED" });
            throw new HttpException("Account is temporarily locked. Please try again later.", HttpStatus.TOO_MANY_REQUESTS);
        }
        if (user.status === "PENDING_VERIFICATION" || !user.emailVerifiedAt) {
            throw new ForbiddenException("Verify your email before signing in");
        }
        if (user.status !== "ACTIVE" || user.deletedAt)
            throw new ForbiddenException("Account is not active");
        await this.prisma.user.update({ where: { id: user.id }, data: { failedLoginAttempts: 0, lockedUntil: null } });
        const result = await this.createSession(user, metadata);
        await this.audit("AUTH_LOGIN", true, metadata, user.id, { sessionId: result.sessionId });
        return result;
    }
    async refresh(refreshToken, metadata) {
        const current = await this.prisma.refreshSession.findUnique({
            where: { tokenHash: hashToken(refreshToken) },
            include: { user: true },
        });
        if (!current)
            throw new UnauthorizedException("Refresh session not found");
        if (current.revokedAt) {
            const recentRotation = current.revokeReason === "ROTATED" && Date.now() - current.revokedAt.getTime() < 30_000;
            if (!recentRotation) {
                await this.revokeAllSessions(current.userId, "REFRESH_TOKEN_REUSE");
                await this.prisma.user.update({ where: { id: current.userId }, data: { authVersion: { increment: 1 } } });
                await this.audit("AUTH_REFRESH_REUSE", false, metadata, current.userId, { sessionId: current.id });
            }
            throw new UnauthorizedException(recentRotation ? "Refresh session was already rotated" : "Refresh token reuse detected. All sessions were revoked.");
        }
        if (current.expiresAt <= new Date()) {
            await this.prisma.refreshSession.update({ where: { id: current.id }, data: { revokedAt: new Date(), revokeReason: "EXPIRED" } });
            throw new UnauthorizedException("Refresh session expired");
        }
        if (current.user.status !== "ACTIVE" || current.user.deletedAt)
            throw new UnauthorizedException("Account is not active");
        const nextToken = createOpaqueToken();
        const csrfToken = createOpaqueToken(24);
        const expiresAt = this.refreshExpiry();
        const next = await this.prisma.$transaction(async (tx) => {
            const created = await tx.refreshSession.create({
                data: {
                    userId: current.userId,
                    tokenHash: hashToken(nextToken),
                    familyId: current.familyId,
                    expiresAt,
                    ipAddress: metadata.ipAddress,
                    userAgent: metadata.userAgent,
                },
            });
            await tx.refreshSession.update({
                where: { id: current.id },
                data: { revokedAt: new Date(), revokeReason: "ROTATED", replacedBySessionId: created.id, lastUsedAt: new Date() },
            });
            return created;
        });
        const accessToken = this.accessTokens.sign(current.user, next.id);
        await this.audit("AUTH_REFRESH", true, metadata, current.userId, { previousSessionId: current.id, sessionId: next.id });
        return {
            accessToken,
            refreshToken: nextToken,
            csrfToken,
            refreshMaxAgeMs: expiresAt.getTime() - Date.now(),
            sessionId: next.id,
            user: this.publicUser(current.user),
        };
    }
    async logout(refreshToken, metadata) {
        if (!refreshToken)
            return;
        const session = await this.prisma.refreshSession.findUnique({ where: { tokenHash: hashToken(refreshToken) } });
        if (!session || session.revokedAt)
            return;
        await this.prisma.refreshSession.update({ where: { id: session.id }, data: { revokedAt: new Date(), revokeReason: "LOGOUT" } });
        await this.audit("AUTH_LOGOUT", true, metadata, session.userId, { sessionId: session.id });
    }
    async logoutAll(userId, metadata) {
        await this.prisma.$transaction([
            this.prisma.refreshSession.updateMany({ where: { userId, revokedAt: null }, data: { revokedAt: new Date(), revokeReason: "LOGOUT_ALL" } }),
            this.prisma.user.update({ where: { id: userId }, data: { authVersion: { increment: 1 } } }),
        ]);
        await this.audit("AUTH_LOGOUT_ALL", true, metadata, userId);
    }
    async forgotPassword(dto, metadata) {
        const email = dto.email.trim().toLowerCase();
        this.rateLimit.consume(`forgot:${metadata.ipAddress ?? "unknown"}:${email}`, 5, 15 * 60 * 1000);
        const user = await this.prisma.user.findUnique({ where: { email } });
        let resetUrl;
        if (user && !user.deletedAt && user.status !== "DISABLED") {
            const raw = createOpaqueToken();
            const minutes = Number(process.env.PASSWORD_RESET_TTL_MINUTES ?? 30);
            const expiresAt = new Date(Date.now() + minutes * 60 * 1000);
            await this.prisma.$transaction([
                this.prisma.passwordResetToken.updateMany({ where: { userId: user.id, usedAt: null }, data: { usedAt: new Date() } }),
                this.prisma.passwordResetToken.create({ data: { userId: user.id, tokenHash: hashToken(raw), expiresAt } }),
            ]);
            resetUrl = `${this.frontendUrl()}/reset-password?token=${encodeURIComponent(raw)}`;
            await this.mail.queue({
                recipient: user.email,
                subject: "Đặt lại mật khẩu Ngày Đôi",
                templateKey: "password-reset",
                textBody: `Xin chào ${user.displayName}, mở liên kết sau để đặt lại mật khẩu: ${resetUrl}. Liên kết hết hạn sau ${minutes} phút.`,
                htmlBody: this.emailLayout("Đặt lại mật khẩu", `Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. Liên kết này hết hạn sau ${minutes} phút.`, resetUrl, "Đặt lại mật khẩu"),
                metadata: { userId: user.id, expiresAt: expiresAt.toISOString() },
            });
            await this.audit("AUTH_PASSWORD_RESET_REQUESTED", true, metadata, user.id);
        }
        return {
            message: "If the email exists, password reset instructions have been created.",
            ...(this.isDevelopment() && resetUrl ? { developmentResetUrl: resetUrl } : {}),
        };
    }
    async resetPassword(dto, metadata) {
        const record = await this.prisma.passwordResetToken.findUnique({
            where: { tokenHash: hashToken(dto.token) },
            include: { user: true },
        });
        if (!record || record.usedAt || record.expiresAt <= new Date()) {
            throw new UnauthorizedException("Reset link is invalid or expired");
        }
        const passwordHash = await hashPassword(dto.password);
        await this.prisma.$transaction([
            this.prisma.passwordResetToken.update({ where: { id: record.id }, data: { usedAt: new Date() } }),
            this.prisma.passwordResetToken.updateMany({ where: { userId: record.userId, usedAt: null }, data: { usedAt: new Date() } }),
            this.prisma.refreshSession.updateMany({ where: { userId: record.userId, revokedAt: null }, data: { revokedAt: new Date(), revokeReason: "PASSWORD_RESET" } }),
            this.prisma.user.update({
                where: { id: record.userId },
                data: {
                    passwordHash,
                    passwordChangedAt: new Date(),
                    authVersion: { increment: 1 },
                    failedLoginAttempts: 0,
                    lockedUntil: null,
                    status: record.user.emailVerifiedAt ? "ACTIVE" : record.user.status,
                },
            }),
        ]);
        await this.audit("AUTH_PASSWORD_RESET", true, metadata, record.userId);
        return { message: "Password changed. Sign in again on your devices." };
    }
    async createEmailVerification(user, returnPath) {
        const raw = createOpaqueToken();
        const minutes = Number(process.env.EMAIL_TOKEN_TTL_MINUTES ?? 30);
        const expiresAt = new Date(Date.now() + minutes * 60 * 1000);
        await this.prisma.$transaction([
            this.prisma.emailVerificationToken.updateMany({ where: { userId: user.id, usedAt: null }, data: { usedAt: new Date() } }),
            this.prisma.emailVerificationToken.create({
                data: { userId: user.id, tokenHash: hashToken(raw), expiresAt },
            }),
        ]);
        const verificationUrl = `${this.frontendUrl()}/verify-email?token=${encodeURIComponent(raw)}${returnPath?.startsWith("/") ? `&next=${encodeURIComponent(returnPath)}` : ""}`;
        await this.mail.queue({
            recipient: user.email,
            subject: "Xác minh tài khoản Ngày Đôi",
            templateKey: "email-verification",
            textBody: `Xin chào ${user.displayName}, xác minh email tại ${verificationUrl}. Liên kết hết hạn sau ${minutes} phút.`,
            htmlBody: this.emailLayout("Xác minh email", `Chào ${this.escapeHtml(user.displayName)}, hãy xác minh email để bắt đầu tạo thiệp cưới. Liên kết hết hạn sau ${minutes} phút.`, verificationUrl, "Xác minh email"),
            metadata: { userId: user.id, expiresAt: expiresAt.toISOString() },
        });
        return verificationUrl;
    }
    async createSession(user, metadata) {
        const refreshToken = createOpaqueToken();
        const csrfToken = createOpaqueToken(24);
        const expiresAt = this.refreshExpiry();
        const session = await this.prisma.refreshSession.create({
            data: {
                userId: user.id,
                tokenHash: hashToken(refreshToken),
                familyId: randomUUID(),
                expiresAt,
                ipAddress: metadata.ipAddress,
                userAgent: metadata.userAgent,
            },
        });
        return {
            accessToken: this.accessTokens.sign(user, session.id),
            refreshToken,
            csrfToken,
            refreshMaxAgeMs: expiresAt.getTime() - Date.now(),
            sessionId: session.id,
            user: this.publicUser(user),
        };
    }
    refreshExpiry() {
        const days = Number(process.env.REFRESH_TOKEN_TTL_DAYS ?? 7);
        return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    }
    async recordFailedLogin(userId, previousAttempts) {
        const attempts = previousAttempts + 1;
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                failedLoginAttempts: attempts,
                lockedUntil: attempts >= 5 ? new Date(Date.now() + 15 * 60 * 1000) : null,
            },
        });
    }
    async revokeAllSessions(userId, reason) {
        await this.prisma.refreshSession.updateMany({
            where: { userId, revokedAt: null },
            data: { revokedAt: new Date(), revokeReason: reason },
        });
    }
    async audit(action, success, metadata, userId, details) {
        await this.prisma.auditLog.create({
            data: {
                action,
                success,
                userId,
                ipAddress: metadata.ipAddress,
                userAgent: metadata.userAgent,
                metadata: details,
            },
        });
    }
    publicUser(user) {
        return { id: user.id, email: user.email, displayName: user.displayName, role: user.role };
    }
    emailLayout(title, message, url, action) {
        return `<!doctype html><html><body style="margin:0;background:#f7f3ee;font-family:Arial,sans-serif;color:#29231f"><div style="max-width:600px;margin:0 auto;padding:32px 20px"><div style="background:#fff;border-radius:20px;padding:32px;border:1px solid #eadfd4"><div style="font-size:22px;font-weight:700;color:#7c2d3b;margin-bottom:24px">Ngày Đôi</div><h1 style="font-size:26px;margin:0 0 12px">${this.escapeHtml(title)}</h1><p style="line-height:1.7;color:#5c514a">${message}</p><a href="${this.escapeHtml(url)}" style="display:inline-block;margin:16px 0;padding:13px 20px;background:#7c2d3b;color:#fff;text-decoration:none;border-radius:10px;font-weight:700">${this.escapeHtml(action)}</a><p style="font-size:12px;line-height:1.6;color:#81756d;word-break:break-all">Nếu nút không hoạt động, sao chép liên kết: ${this.escapeHtml(url)}</p></div></div></body></html>`;
    }
    escapeHtml(value) {
        const replacements = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
        return value.replace(/[&<>"']/g, (char) => replacements[char] ?? char);
    }
    frontendUrl() {
        return (process.env.FRONTEND_URL ?? "http://localhost:3000").split(",")[0]?.trim() || "http://localhost:3000";
    }
    isDevelopment() {
        return process.env.NODE_ENV !== "production";
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AccessTokenService,
        RateLimitService,
        MailService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map