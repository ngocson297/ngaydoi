import { AuthService } from "./auth.service.js";
import type { AuthenticatedUser, HttpRequest, HttpResponse } from "./auth.types.js";
import { EmailDto } from "./dto/email.dto.js";
import { LoginDto } from "./dto/login.dto.js";
import { RegisterDto } from "./dto/register.dto.js";
import { ResetPasswordDto } from "./dto/reset-password.dto.js";
import { TokenDto } from "./dto/token.dto.js";
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    register(dto: RegisterDto, request: HttpRequest): Promise<{
        developmentVerificationUrl?: string | undefined;
        message: string;
    }>;
    verifyEmail(dto: TokenDto, request: HttpRequest): Promise<{
        message: string;
    }>;
    resendVerification(dto: EmailDto, request: HttpRequest): Promise<{
        developmentVerificationUrl?: string | undefined;
        message: string;
    }>;
    login(dto: LoginDto, request: HttpRequest, response: HttpResponse): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            displayName: string;
            role: string;
        };
    }>;
    refresh(request: HttpRequest, response: HttpResponse): Promise<{
        accessToken: null;
        user: null;
    } | {
        accessToken: string;
        user: {
            id: string;
            email: string;
            displayName: string;
            role: string;
        };
    }>;
    logout(request: HttpRequest, response: HttpResponse): Promise<{
        message: string;
    }>;
    logoutAll(user: AuthenticatedUser, request: HttpRequest, response: HttpResponse): Promise<{
        message: string;
    }>;
    forgotPassword(dto: EmailDto, request: HttpRequest): Promise<{
        developmentResetUrl?: string | undefined;
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto, request: HttpRequest): Promise<{
        message: string;
    }>;
}
