import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import type { AuthenticatedUser, HttpRequest } from "../auth/auth.types.js";
import { requestMetadata } from "../auth/auth.utils.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { AccountService } from "./account.service.js";
import { ChangePasswordDto } from "./dto/change-password.dto.js";
import { DeleteAccountDto } from "./dto/delete-account.dto.js";
import { UpdateProfileDto } from "./dto/update-profile.dto.js";

@Controller("account")
@UseGuards(JwtAuthGuard)
export class AccountController {
  constructor(private readonly account: AccountService) {}

  @Get("me")
  me(@CurrentUser() user: AuthenticatedUser) {
    return this.account.me(user.id);
  }

  @Patch("profile")
  updateProfile(@CurrentUser() user: AuthenticatedUser, @Body() dto: UpdateProfileDto) {
    return this.account.updateProfile(user.id, dto);
  }

  @Post("change-password")
  changePassword(@CurrentUser() user: AuthenticatedUser, @Body() dto: ChangePasswordDto) {
    return this.account.changePassword(user, dto);
  }

  @Get("sessions")
  sessions(@CurrentUser() user: AuthenticatedUser) {
    return this.account.sessions(user);
  }

  @Delete("sessions/:id")
  revokeSession(@CurrentUser() user: AuthenticatedUser, @Param("id") id: string) {
    return this.account.revokeSession(user, id);
  }

  @Post("request-deletion")
  requestDeletion(
    @CurrentUser() user: AuthenticatedUser,
    @Body() dto: DeleteAccountDto,
    @Req() request: HttpRequest,
  ) {
    return this.account.requestDeletion(user, dto, requestMetadata(request));
  }
}
