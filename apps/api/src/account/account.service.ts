import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { hashPassword, verifyPassword } from "../common/security/password.js";
import { PrismaService } from "../prisma/prisma.service.js";
import type { AuthenticatedUser, RequestMetadata } from "../auth/auth.types.js";
import type { ChangePasswordDto } from "./dto/change-password.dto.js";
import type { DeleteAccountDto } from "./dto/delete-account.dto.js";
import type { UpdateProfileDto } from "./dto/update-profile.dto.js";

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async me(userId: string) {
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
    if (!user) throw new NotFoundException("Account not found");
    return user;
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
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

  async changePassword(user: AuthenticatedUser, dto: ChangePasswordDto) {
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

  async sessions(user: AuthenticatedUser) {
    const sessions = await this.prisma.refreshSession.findMany({
      where: { userId: user.id, revokedAt: null, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: "desc" },
      select: { id: true, userAgent: true, ipAddress: true, createdAt: true, lastUsedAt: true, expiresAt: true },
    });
    return sessions.map((session) => ({ ...session, current: session.id === user.sessionId }));
  }

  async revokeSession(user: AuthenticatedUser, sessionId: string) {
    const session = await this.prisma.refreshSession.findFirst({ where: { id: sessionId, userId: user.id } });
    if (!session) throw new NotFoundException("Session not found");
    if (!session.revokedAt) {
      await this.prisma.refreshSession.update({
        where: { id: session.id },
        data: { revokedAt: new Date(), revokeReason: "USER_REVOKED" },
      });
    }
    return { message: "Session revoked", currentSession: session.id === user.sessionId };
  }

  async requestDeletion(user: AuthenticatedUser, dto: DeleteAccountDto, metadata: RequestMetadata) {
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
}
