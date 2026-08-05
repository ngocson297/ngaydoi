import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { CreateCollaboratorDto } from "./dto/create-collaborator.dto.js";
import { CreateEventDto } from "./dto/create-event.dto.js";
import { CreateWeddingDto } from "./dto/create-wedding.dto.js";
import { DuplicateWeddingDto } from "./dto/duplicate-wedding.dto.js";
import { UpdateEventDto } from "./dto/update-event.dto.js";
import { UpdateLifecycleDto } from "./dto/update-lifecycle.dto.js";
import { UpdateWeddingDto } from "./dto/update-wedding.dto.js";
import { WeddingsService } from "./weddings.service.js";

@Controller("weddings")
export class WeddingsController {
  constructor(private readonly weddingsService: WeddingsService) {}

  @Get("public/:slug")
  getPublic(@Param("slug") slug: string) {
    return this.weddingsService.getPublicBySlug(slug);
  }

  @Get("slug-availability")
  @UseGuards(JwtAuthGuard)
  getSlugAvailability(@Query("slug") slug: string, @Query("excludeWeddingId") excludeWeddingId?: string) {
    return this.weddingsService.getSlugAvailability(slug ?? "", excludeWeddingId);
  }

  @Post("collaborations/:token/accept")
  @UseGuards(JwtAuthGuard)
  acceptCollaboration(@Param("token") token: string, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.acceptCollaboration(token, user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  list(@CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.list(user);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateWeddingDto, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.create(dto, user);
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  getOne(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.getOne(id, user);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  update(@Param("id") id: string, @Body() dto: UpdateWeddingDto, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.update(id, dto, user);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  archive(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.archive(id, user);
  }

  @Get(":id/dashboard")
  @UseGuards(JwtAuthGuard)
  getDashboard(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.getDashboard(id, user);
  }

  @Post(":id/publish-request")
  @UseGuards(JwtAuthGuard)
  requestPublish(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.requestPublish(id, user);
  }

  @Post(":id/lifecycle")
  @UseGuards(JwtAuthGuard)
  updateLifecycle(
    @Param("id") id: string,
    @Body() dto: UpdateLifecycleDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.weddingsService.updateLifecycle(id, dto, user);
  }

  @Post(":id/duplicate")
  @UseGuards(JwtAuthGuard)
  duplicate(@Param("id") id: string, @Body() dto: DuplicateWeddingDto, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.duplicate(id, dto, user);
  }

  @Post(":id/events")
  @UseGuards(JwtAuthGuard)
  createEvent(@Param("id") id: string, @Body() dto: CreateEventDto, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.createEvent(id, dto, user);
  }

  @Patch(":id/events/:eventId")
  @UseGuards(JwtAuthGuard)
  updateEvent(
    @Param("id") id: string,
    @Param("eventId") eventId: string,
    @Body() dto: UpdateEventDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.weddingsService.updateEvent(id, eventId, dto, user);
  }

  @Delete(":id/events/:eventId")
  @UseGuards(JwtAuthGuard)
  deleteEvent(@Param("id") id: string, @Param("eventId") eventId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.weddingsService.deleteEvent(id, eventId, user);
  }

  @Post(":id/collaborators")
  @UseGuards(JwtAuthGuard)
  inviteCollaborator(
    @Param("id") id: string,
    @Body() dto: CreateCollaboratorDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.weddingsService.inviteCollaborator(id, dto, user);
  }

  @Delete(":id/collaborators/:collaboratorId")
  @UseGuards(JwtAuthGuard)
  revokeCollaborator(
    @Param("id") id: string,
    @Param("collaboratorId") collaboratorId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.weddingsService.revokeCollaborator(id, collaboratorId, user);
  }
}
