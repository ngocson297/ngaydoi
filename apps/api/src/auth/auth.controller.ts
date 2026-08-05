import { Body, Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { CurrentUser } from "./current-user.decorator.js";
import type { AuthenticatedUser, HttpRequest, HttpResponse } from "./auth.types.js";
import { JwtAuthGuard } from "./jwt-auth.guard.js";
import { EmailDto } from "./dto/email.dto.js";
import { LoginDto } from "./dto/login.dto.js";
import { RegisterDto } from "./dto/register.dto.js";
import { ResetPasswordDto } from "./dto/reset-password.dto.js";
import { TokenDto } from "./dto/token.dto.js";
import {
  assertCsrf,
  clearSessionCookies,
  readCookie,
  REFRESH_COOKIE,
  requestMetadata,
  setSessionCookies,
} from "./auth.utils.js";

@Controller("auth")
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post("register")
  register(@Body() dto: RegisterDto, @Req() request: HttpRequest) {
    return this.auth.register(dto, requestMetadata(request));
  }

  @Post("verify-email")
  verifyEmail(@Body() dto: TokenDto, @Req() request: HttpRequest) {
    return this.auth.verifyEmail(dto.token, requestMetadata(request));
  }

  @Post("resend-verification")
  resendVerification(@Body() dto: EmailDto, @Req() request: HttpRequest) {
    return this.auth.resendVerification(dto, requestMetadata(request));
  }

  @Post("login")
  async login(@Body() dto: LoginDto, @Req() request: HttpRequest, @Res({ passthrough: true }) response: HttpResponse) {
    const result = await this.auth.login(dto, requestMetadata(request));
    setSessionCookies(response, result.refreshToken, result.csrfToken, result.refreshMaxAgeMs);
    return { accessToken: result.accessToken, user: result.user };
  }

  @Post("refresh")
  async refresh(@Req() request: HttpRequest, @Res({ passthrough: true }) response: HttpResponse) {
    assertCsrf(request);
    const refreshToken = readCookie(request, REFRESH_COOKIE);
    if (!refreshToken) return { accessToken: null, user: null };
    const result = await this.auth.refresh(refreshToken, requestMetadata(request));
    setSessionCookies(response, result.refreshToken, result.csrfToken, result.refreshMaxAgeMs);
    return { accessToken: result.accessToken, user: result.user };
  }

  @Post("logout")
  async logout(@Req() request: HttpRequest, @Res({ passthrough: true }) response: HttpResponse) {
    assertCsrf(request);
    await this.auth.logout(readCookie(request, REFRESH_COOKIE), requestMetadata(request));
    clearSessionCookies(response);
    return { message: "Signed out" };
  }

  @Post("logout-all")
  @UseGuards(JwtAuthGuard)
  async logoutAll(
    @CurrentUser() user: AuthenticatedUser,
    @Req() request: HttpRequest,
    @Res({ passthrough: true }) response: HttpResponse,
  ) {
    await this.auth.logoutAll(user.id, requestMetadata(request));
    clearSessionCookies(response);
    return { message: "Signed out from all devices" };
  }

  @Post("forgot-password")
  forgotPassword(@Body() dto: EmailDto, @Req() request: HttpRequest) {
    return this.auth.forgotPassword(dto, requestMetadata(request));
  }

  @Post("reset-password")
  resetPassword(@Body() dto: ResetPasswordDto, @Req() request: HttpRequest) {
    return this.auth.resetPassword(dto, requestMetadata(request));
  }
}
