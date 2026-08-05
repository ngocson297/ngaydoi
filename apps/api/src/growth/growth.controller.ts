import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { GrowthService } from "./growth.service.js";

@Controller()
export class GrowthController {
  constructor(private readonly growth: GrowthService) {}
  @Post("public/growth/events") track(@Body() body: Record<string, unknown>): Promise<{ accepted: true }> { return this.growth.track(body); }
  @Get("growth/onboarding") @UseGuards(JwtAuthGuard) onboarding(@CurrentUser() user: AuthenticatedUser): Promise<unknown> { return this.growth.onboarding(user); }
  @Patch("growth/onboarding") @UseGuards(JwtAuthGuard) onboardingUpdate(@CurrentUser() user: AuthenticatedUser, @Body() body: Record<string, unknown>): Promise<unknown> { return this.growth.updateOnboarding(user, body); }
  @Post("support/tickets") @UseGuards(JwtAuthGuard) support(@CurrentUser() user: AuthenticatedUser, @Body() body: Record<string, unknown>): Promise<unknown> { return this.growth.createSupport(user, body); }
  @Get("support/tickets") @UseGuards(JwtAuthGuard) mySupport(@CurrentUser() user: AuthenticatedUser): Promise<unknown> { return this.growth.mySupport(user); }
  @Post("growth/domains") @UseGuards(JwtAuthGuard) domain(@CurrentUser() user: AuthenticatedUser, @Body() body: Record<string, unknown>): Promise<unknown> { return this.growth.requestDomain(user, body); }
  @Get("growth/domains") @UseGuards(JwtAuthGuard) domains(@CurrentUser() user: AuthenticatedUser): Promise<unknown> { return this.growth.myDomains(user); }
  @Post("growth/referrals") @UseGuards(JwtAuthGuard) referral(@CurrentUser() user: AuthenticatedUser, @Body() body: Record<string, unknown>): Promise<unknown> { return this.growth.createReferral(user, body); }
  @Get("growth/referrals") @UseGuards(JwtAuthGuard) referrals(@CurrentUser() user: AuthenticatedUser): Promise<unknown> { return this.growth.myReferrals(user); }
  @Get("admin/growth") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") admin(): Promise<unknown> { return this.growth.adminOverview(); }
  @Patch("admin/growth/tickets/:id") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") ticket(@Param("id") id: string, @Body() body: Record<string, unknown>): Promise<unknown> { return this.growth.updateTicket(id, body); }
  @Patch("admin/growth/domains/:id") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") domainUpdate(@Param("id") id: string, @Body() body: Record<string, unknown>): Promise<unknown> { return this.growth.updateDomain(id, body); }
}
