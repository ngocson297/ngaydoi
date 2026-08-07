var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { CurrentUser } from "./current-user.decorator.js";
import { JwtAuthGuard } from "./jwt-auth.guard.js";
import { EmailDto } from "./dto/email.dto.js";
import { LoginDto } from "./dto/login.dto.js";
import { RegisterDto } from "./dto/register.dto.js";
import { ResetPasswordDto } from "./dto/reset-password.dto.js";
import { TokenDto } from "./dto/token.dto.js";
import { assertCsrf, clearSessionCookies, readCookie, REFRESH_COOKIE, requestMetadata, setSessionCookies, } from "./auth.utils.js";
let AuthController = class AuthController {
    auth;
    constructor(auth) {
        this.auth = auth;
    }
    register(dto, request) {
        return this.auth.register(dto, requestMetadata(request));
    }
    verifyEmail(dto, request) {
        return this.auth.verifyEmail(dto.token, requestMetadata(request));
    }
    resendVerification(dto, request) {
        return this.auth.resendVerification(dto, requestMetadata(request));
    }
    async login(dto, request, response) {
        const result = await this.auth.login(dto, requestMetadata(request));
        setSessionCookies(response, result.refreshToken, result.csrfToken, result.refreshMaxAgeMs);
        return { accessToken: result.accessToken, user: result.user };
    }
    async refresh(request, response) {
        assertCsrf(request);
        const refreshToken = readCookie(request, REFRESH_COOKIE);
        if (!refreshToken)
            return { accessToken: null, user: null };
        const result = await this.auth.refresh(refreshToken, requestMetadata(request));
        setSessionCookies(response, result.refreshToken, result.csrfToken, result.refreshMaxAgeMs);
        return { accessToken: result.accessToken, user: result.user };
    }
    async logout(request, response) {
        assertCsrf(request);
        await this.auth.logout(readCookie(request, REFRESH_COOKIE), requestMetadata(request));
        clearSessionCookies(response);
        return { message: "Signed out" };
    }
    async logoutAll(user, request, response) {
        await this.auth.logoutAll(user.id, requestMetadata(request));
        clearSessionCookies(response);
        return { message: "Signed out from all devices" };
    }
    forgotPassword(dto, request) {
        return this.auth.forgotPassword(dto, requestMetadata(request));
    }
    resetPassword(dto, request) {
        return this.auth.resetPassword(dto, requestMetadata(request));
    }
};
__decorate([
    Post("register"),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    Post("verify-email"),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TokenDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    Post("resend-verification"),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmailDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resendVerification", null);
__decorate([
    Post("login"),
    __param(0, Body()),
    __param(1, Req()),
    __param(2, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    Post("refresh"),
    __param(0, Req()),
    __param(1, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    Post("logout"),
    __param(0, Req()),
    __param(1, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    Post("logout-all"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __param(1, Req()),
    __param(2, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logoutAll", null);
__decorate([
    Post("forgot-password"),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmailDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    Post("reset-password"),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResetPasswordDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
AuthController = __decorate([
    Controller("auth"),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map