import type { AuthenticatedUser, HttpRequest } from "../auth/auth.types.js";
import { AccountService } from "./account.service.js";
import { ChangePasswordDto } from "./dto/change-password.dto.js";
import { DeleteAccountDto } from "./dto/delete-account.dto.js";
import { UpdateProfileDto } from "./dto/update-profile.dto.js";
export declare class AccountController {
    private readonly account;
    constructor(account: AccountService);
    me(user: AuthenticatedUser): Promise<{
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
    updateProfile(user: AuthenticatedUser, dto: UpdateProfileDto): Promise<{
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
    revokeSession(user: AuthenticatedUser, id: string): Promise<{
        message: string;
        currentSession: boolean;
    }>;
    requestDeletion(user: AuthenticatedUser, dto: DeleteAccountDto, request: HttpRequest): Promise<{
        message: string;
    }>;
}
