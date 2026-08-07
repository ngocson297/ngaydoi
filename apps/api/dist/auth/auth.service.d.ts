import { PrismaService } from "../prisma/prisma.service.js";
import { MailService } from "../operations/mail.service.js";
import { AccessTokenService } from "./access-token.service.js";
import type { RequestMetadata } from "./auth.types.js";
import { RateLimitService } from "./rate-limit.service.js";
import type { EmailDto } from "./dto/email.dto.js";
import type { LoginDto } from "./dto/login.dto.js";
import type { RegisterDto } from "./dto/register.dto.js";
import type { ResetPasswordDto } from "./dto/reset-password.dto.js";
interface SessionResult {
    accessToken: string;
    refreshToken: string;
    csrfToken: string;
    refreshMaxAgeMs: number;
    sessionId: string;
    user: {
        id: string;
        email: string;
        displayName: string;
        role: string;
    };
}
export declare class AuthService {
    private readonly prisma;
    private readonly accessTokens;
    private readonly rateLimit;
    private readonly mail;
    private readonly dummyHashPromise;
    constructor(prisma: PrismaService, accessTokens: AccessTokenService, rateLimit: RateLimitService, mail: MailService);
    register(dto: RegisterDto, metadata: RequestMetadata): Promise<{
        developmentVerificationUrl?: string | undefined;
        message: string;
    }>;
    verifyEmail(token: string, metadata: RequestMetadata): Promise<{
        message: string;
    }>;
    resendVerification(dto: EmailDto, metadata: RequestMetadata): Promise<{
        developmentVerificationUrl?: string | undefined;
        message: string;
    }>;
    login(dto: LoginDto, metadata: RequestMetadata): Promise<SessionResult>;
    refresh(refreshToken: string, metadata: RequestMetadata): Promise<SessionResult>;
    logout(refreshToken: string | undefined, metadata: RequestMetadata): Promise<void>;
    logoutAll(userId: string, metadata: RequestMetadata): Promise<void>;
    forgotPassword(dto: EmailDto, metadata: RequestMetadata): Promise<{
        developmentResetUrl?: string | undefined;
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto, metadata: RequestMetadata): Promise<{
        message: string;
    }>;
    private createEmailVerification;
    private createSession;
    private refreshExpiry;
    private recordFailedLogin;
    private revokeAllSessions;
    private audit;
    private publicUser;
    private emailLayout;
    private escapeHtml;
    private frontendUrl;
    private isDevelopment;
}
export {};
