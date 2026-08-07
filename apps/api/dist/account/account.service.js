var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { hashPassword, verifyPassword } from "../common/security/password.js";
import { PrismaService } from "../prisma/prisma.service.js";
let AccountService = class AccountService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async me(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                displayName: true,
                phone: true,
                avatarUrl: true,
                role: true,
                status: true,
                emailVerifiedAt: true,
                accountDeletionRequestedAt: true,
                createdAt: true,
            },
        });
        if (!user)
            throw new NotFoundException("Account not found");
        return user;
    }
    async updateProfile(userId, dto) {
        return this.prisma.user.update({
            where: { id: userId },
            data: {
                ...(dto.displayName !== undefined ? { displayName: dto.displayName.trim() } : {}),
                ...(dto.phone !== undefined ? { phone: dto.phone.trim() || null } : {}),
                ...(dto.avatarUrl !== undefined ? { avatarUrl: dto.avatarUrl.trim() || null } : {}),
            },
            select: { id: true, email: true, displayName: true, phone: true, avatarUrl: true, role: true },
        });
    }
    async changePassword(user, dto) {
        const record = await this.prisma.user.findUnique({ where: { id: user.id } });
        if (!record || !(await verifyPassword(dto.currentPassword, record.passwordHash))) {
            throw new UnauthorizedException("Current password is incorrect");
        }
        if (await verifyPassword(dto.newPassword, record.passwordHash)) {
            throw new ForbiddenException("New password must be different from the current password");
        }
        const passwordHash = await hashPassword(dto.newPassword);
        await this.prisma.$transaction([
            this.prisma.user.update({
                where: { id: user.id },
                data: { passwordHash, passwordChangedAt: new Date(), authVersion: { increment: 1 } },
            }),
            this.prisma.refreshSession.updateMany({
                where: { userId: user.id, revokedAt: null },
                data: { revokedAt: new Date(), revokeReason: "PASSWORD_CHANGED" },
            }),
            this.prisma.auditLog.create({ data: { userId: user.id, action: "ACCOUNT_PASSWORD_CHANGED", success: true } }),
        ]);
        return { message: "Password changed. Sign in again." };
    }
    async sessions(user) {
        const sessions = await this.prisma.refreshSession.findMany({
            where: { userId: user.id, revokedAt: null, expiresAt: { gt: new Date() } },
            orderBy: { createdAt: "desc" },
            select: { id: true, userAgent: true, ipAddress: true, createdAt: true, lastUsedAt: true, expiresAt: true },
        });
        return sessions.map((session) => ({ ...session, current: session.id === user.sessionId }));
    }
    async revokeSession(user, sessionId) {
        const session = await this.prisma.refreshSession.findFirst({ where: { id: sessionId, userId: user.id } });
        if (!session)
            throw new NotFoundException("Session not found");
        if (!session.revokedAt) {
            await this.prisma.refreshSession.update({
                where: { id: session.id },
                data: { revokedAt: new Date(), revokeReason: "USER_REVOKED" },
            });
        }
        return { message: "Session revoked", currentSession: session.id === user.sessionId };
    }
    async requestDeletion(user, dto, metadata) {
        const record = await this.prisma.user.findUnique({ where: { id: user.id } });
        if (!record || !(await verifyPassword(dto.password, record.passwordHash))) {
            throw new UnauthorizedException("Password is incorrect");
        }
        await this.prisma.$transaction([
            this.prisma.user.update({
                where: { id: user.id },
                data: { status: "DELETION_REQUESTED", accountDeletionRequestedAt: new Date(), authVersion: { increment: 1 } },
            }),
            this.prisma.refreshSession.updateMany({
                where: { userId: user.id, revokedAt: null },
                data: { revokedAt: new Date(), revokeReason: "ACCOUNT_DELETION_REQUESTED" },
            }),
            this.prisma.auditLog.create({
                data: {
                    userId: user.id,
                    action: "ACCOUNT_DELETION_REQUESTED",
                    success: true,
                    ipAddress: metadata.ipAddress,
                    userAgent: metadata.userAgent,
                },
            }),
        ]);
        return { message: "Account deletion request recorded. The account has been signed out." };
    }
};
AccountService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AccountService);
export { AccountService };
//# sourceMappingURL=account.service.js.map