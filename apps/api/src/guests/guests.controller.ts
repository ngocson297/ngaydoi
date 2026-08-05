import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { BulkGuestsDto } from "./dto/bulk-guests.dto.js";
import { CreateGuestDto } from "./dto/create-guest.dto.js";
import { ImportGuestsDto } from "./dto/import-guests.dto.js";
import { UpdateGuestInvitationDto } from "./dto/update-invitation.dto.js";
import { UpdateGuestDto } from "./dto/update-guest.dto.js";
import { GuestsService } from "./guests.service.js";

@Controller()
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get("guest-invitations/:token")
  getPersonalizedInvitation(@Param("token") token: string) {
    return this.guestsService.getPersonalizedInvitation(token);
  }

  @Get("weddings/:weddingId/guests")
  @UseGuards(JwtAuthGuard)
  list(
    @Param("weddingId") weddingId: string,
    @CurrentUser() user: AuthenticatedUser,
    @Query() query: Record<string, string | undefined>,
  ) {
    return this.guestsService.list(weddingId, user, query);
  }

  @Get("weddings/:weddingId/guests/analytics")
  @UseGuards(JwtAuthGuard)
  analytics(@Param("weddingId") weddingId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.guestsService.analytics(weddingId, user);
  }

  @Get("weddings/:weddingId/guests/export")
  @UseGuards(JwtAuthGuard)
  exportGuests(@Param("weddingId") weddingId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.guestsService.exportGuests(weddingId, user);
  }

  @Post("weddings/:weddingId/guests/import-preview")
  @UseGuards(JwtAuthGuard)
  previewImport(
    @Param("weddingId") weddingId: string,
    @Body() dto: ImportGuestsDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.guestsService.importGuests(weddingId, dto, user, true);
  }

  @Post("weddings/:weddingId/guests/import")
  @UseGuards(JwtAuthGuard)
  importGuests(
    @Param("weddingId") weddingId: string,
    @Body() dto: ImportGuestsDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.guestsService.importGuests(weddingId, dto, user, false);
  }

  @Post("weddings/:weddingId/guests/bulk")
  @UseGuards(JwtAuthGuard)
  bulk(
    @Param("weddingId") weddingId: string,
    @Body() dto: BulkGuestsDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.guestsService.bulk(weddingId, dto, user);
  }

  @Post("weddings/:weddingId/guests")
  @UseGuards(JwtAuthGuard)
  create(
    @Param("weddingId") weddingId: string,
    @Body() dto: CreateGuestDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.guestsService.create(weddingId, dto, user);
  }

  @Patch("weddings/:weddingId/guests/:guestId")
  @UseGuards(JwtAuthGuard)
  update(
    @Param("weddingId") weddingId: string,
    @Param("guestId") guestId: string,
    @Body() dto: UpdateGuestDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.guestsService.update(weddingId, guestId, dto, user);
  }

  @Delete("weddings/:weddingId/guests/:guestId")
  @UseGuards(JwtAuthGuard)
  remove(
    @Param("weddingId") weddingId: string,
    @Param("guestId") guestId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.guestsService.remove(weddingId, guestId, user);
  }

  @Patch("weddings/:weddingId/guests/:guestId/invitation")
  @UseGuards(JwtAuthGuard)
  updateInvitation(
    @Param("weddingId") weddingId: string,
    @Param("guestId") guestId: string,
    @Body() dto: UpdateGuestInvitationDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.guestsService.updateInvitation(weddingId, guestId, dto, user);
  }

  @Post("weddings/:weddingId/guests/:guestId/mark-sent")
  @UseGuards(JwtAuthGuard)
  markSent(
    @Param("weddingId") weddingId: string,
    @Param("guestId") guestId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.guestsService.markSent(weddingId, guestId, user);
  }

  @Get("weddings/:weddingId/notifications")
  @UseGuards(JwtAuthGuard)
  notifications(@Param("weddingId") weddingId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.guestsService.notifications(weddingId, user);
  }

  @Patch("weddings/:weddingId/notifications/:notificationId/read")
  @UseGuards(JwtAuthGuard)
  markNotificationRead(
    @Param("weddingId") weddingId: string,
    @Param("notificationId") notificationId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.guestsService.markNotificationRead(weddingId, notificationId, user);
  }
}
