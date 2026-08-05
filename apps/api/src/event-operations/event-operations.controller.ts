import { Body, Controller, Delete, Get, Header, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { EventOperationsService } from "./event-operations.service.js";

@Controller()
export class EventOperationsController {
  constructor(private readonly service: EventOperationsService) {}

  @Get("weddings/:weddingId/event-operations")
  @UseGuards(JwtAuthGuard)
  overview(@Param("weddingId") weddingId: string, @Query("eventId") eventId: string | undefined, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.service.overview(weddingId, eventId, user);
  }

  @Post("weddings/:weddingId/event-operations/tables")
  @UseGuards(JwtAuthGuard)
  createTable(@Param("weddingId") weddingId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.service.createTable(weddingId, body, user);
  }

  @Patch("weddings/:weddingId/event-operations/tables/:tableId")
  @UseGuards(JwtAuthGuard)
  updateTable(@Param("weddingId") weddingId: string, @Param("tableId") tableId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.service.updateTable(weddingId, tableId, body, user);
  }

  @Delete("weddings/:weddingId/event-operations/tables/:tableId")
  @UseGuards(JwtAuthGuard)
  deleteTable(@Param("weddingId") weddingId: string, @Param("tableId") tableId: string, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.service.deleteTable(weddingId, tableId, user);
  }

  @Post("weddings/:weddingId/event-operations/assignments")
  @UseGuards(JwtAuthGuard)
  assign(@Param("weddingId") weddingId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.service.assignGuest(weddingId, body, user);
  }

  @Delete("weddings/:weddingId/event-operations/assignments/:assignmentId")
  @UseGuards(JwtAuthGuard)
  unassign(@Param("weddingId") weddingId: string, @Param("assignmentId") assignmentId: string, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.service.unassignGuest(weddingId, assignmentId, user);
  }

  @Post("weddings/:weddingId/event-operations/auto-assign")
  @UseGuards(JwtAuthGuard)
  autoAssign(@Param("weddingId") weddingId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.service.autoAssign(weddingId, body, user);
  }

  @Post("weddings/:weddingId/event-operations/stations")
  @UseGuards(JwtAuthGuard)
  createStation(@Param("weddingId") weddingId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.service.createStation(weddingId, body, user);
  }

  @Patch("weddings/:weddingId/event-operations/stations/:stationId")
  @UseGuards(JwtAuthGuard)
  updateStation(@Param("weddingId") weddingId: string, @Param("stationId") stationId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.service.updateStation(weddingId, stationId, body, user);
  }

  @Get("weddings/:weddingId/event-operations/export")
  @UseGuards(JwtAuthGuard)
  @Header("Content-Type", "text/csv; charset=utf-8")
  exportCsv(@Param("weddingId") weddingId: string, @Query("eventId") eventId: string | undefined, @CurrentUser() user: AuthenticatedUser): Promise<string> {
    return this.service.exportCsv(weddingId, eventId, user);
  }

  @Get("checkin/guest-qr/:invitationToken.svg")
  @Header("Content-Type", "image/svg+xml")
  guestQr(@Param("invitationToken") invitationToken: string): Promise<string> {
    return this.service.guestQr(invitationToken);
  }

  @Get("checkin/stations/:token")
  station(@Param("token") token: string): Promise<unknown> { return this.service.stationOverview(token); }

  @Get("checkin/stations/:token/search")
  search(@Param("token") token: string, @Query("q") query: string | undefined): Promise<unknown> { return this.service.searchStationGuests(token, query ?? ""); }

  @Post("checkin/stations/:token/check-in")
  checkIn(@Param("token") token: string, @Body() body: Record<string, unknown>): Promise<unknown> { return this.service.checkIn(token, body); }

  @Post("checkin/stations/:token/check-out")
  checkOut(@Param("token") token: string, @Body() body: Record<string, unknown>): Promise<unknown> { return this.service.checkOut(token, body); }
}
