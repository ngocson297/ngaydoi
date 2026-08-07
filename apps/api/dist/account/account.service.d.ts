import { PrismaService } from "../prisma/prisma.service.js";
import type { AuthenticatedUser, RequestMetadata } from "../auth/auth.types.js";
import type { ChangePasswordDto } from "./dto/change-password.dto.js";
import type { DeleteAccountDto } from "./dto/delete-account.dto.js";
import type { UpdateProfileDto } from "./dto/update-profile.dto.js";
export declare class AccountService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    me(userId: string): Promise<{
        id: string;
        email: string;
        displayName: string;
        phone: string | null;
        avatarUrl: string | null;
        role: import("../generated/prisma/enums.js").UserRole;
        status: import("../generated/prisma/enums.js").UserStatus;
        emailVerifiedAt: Date | null;
        accountDeletionRequestedAt: Date | null;
        createdAt: Date;
    }>;
    updateProfile(userId: string, dto: UpdateProfileDto): Promise<{
        id: string;
        email: string;
        displayName: string;
        phone: string | null;
        avatarUrl: string | null;
        role: import("../generated/prisma/enums.js").UserRole;
    }>;
    changePassword(user: AuthenticatedUser, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    sessions(user: AuthenticatedUser): Promise<{
        current: boolean;
        id: string;
        createdAt: Date;
        expiresAt: Date;
        lastUsedAt: Date | null;
        ipAddress: string | null;
        userAgent: string | null;
    }[]>;
    revokeSession(user: AuthenticatedUser, sessionId: string): Promise<{
        message: string;
        currentSession: boolean;
    }>;
    requestDeletion(user: AuthenticatedUser, dto: DeleteAccountDto, metadata: RequestMetadata): Promise<{
        message: string;
    }>;
}
