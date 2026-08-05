import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { PartnerService } from "./partner.service.js";

@Controller()
export class PartnerController {
  constructor(private readonly partner: PartnerService) {}
  @Get("partner/overview") @UseGuards(JwtAuthGuard) overview(@CurrentUser() user: AuthenticatedUser): Promise<unknown> { return this.partner.overview(user); }
  @Post("partner/apply") @UseGuards(JwtAuthGuard) apply(@CurrentUser() user: AuthenticatedUser, @Body() body: Record<string, unknown>): Promise<unknown> { return this.partner.apply(user, body); }
  @Patch("partner/profile") @UseGuards(JwtAuthGuard) profile(@CurrentUser() user: AuthenticatedUser, @Body() body: Record<string, unknown>): Promise<unknown> { return this.partner.updateProfile(user, body); }
  @Post("partner/clients") @UseGuards(JwtAuthGuard) client(@CurrentUser() user: AuthenticatedUser, @Body() body: Record<string, unknown>): Promise<unknown> { return this.partner.addClient(user, body); }
  @Post("partner/payouts") @UseGuards(JwtAuthGuard) payout(@CurrentUser() user: AuthenticatedUser, @Body() body: Record<string, unknown>): Promise<unknown> { return this.partner.requestPayout(user, body); }
  @Get("admin/partners") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") admin(): Promise<unknown> { return this.partner.adminOverview(); }
  @Patch("admin/partners/:id") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") review(@CurrentUser() user: AuthenticatedUser, @Param("id") id: string, @Body() body: Record<string, unknown>): Promise<unknown> { return this.partner.reviewPartner(user, id, body); }
  @Patch("admin/partner-payouts/:id") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") reviewPayout(@CurrentUser() user: AuthenticatedUser, @Param("id") id: string, @Body() body: Record<string, unknown>): Promise<unknown> { return this.partner.reviewPayout(user, id, body); }
}
