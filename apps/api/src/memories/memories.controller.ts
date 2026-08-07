import { BadRequestException, Body, Controller, Delete, Get, Header, Param, Patch, Post, Query, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { MemoriesService } from "./memories.service.js";

@Controller()
export class MemoriesController {
  constructor(private readonly memories: MemoriesService) {}

  @Get("weddings/:weddingId/memories")
  @UseGuards(JwtAuthGuard)
  ownerOverview(@Param("weddingId") weddingId: string, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.memories.ownerOverview(weddingId, user);
  }

  @Get("weddings/:weddingId/memories/assets")
  @UseGuards(JwtAuthGuard)
  ownerAssets(
    @Param("weddingId") weddingId: string,
    @Query("cursor") cursor: string | undefined,
    @Query("limit") limit: string | undefined,
    @Query("status") status: string | undefined,
    @CurrentUser() user: AuthenticatedUser,
  ): Promise<unknown> {
    return this.memories.ownerAssets(weddingId, user, cursor, limit, status);
  }

  @Get("weddings/:weddingId/memories/assets/:assetId/media")
  @UseGuards(JwtAuthGuard)
  ownerMedia(@Param("weddingId") weddingId: string, @Param("assetId") assetId: string, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.memories.ownerMedia(weddingId, assetId, user);
  }

  @Get("weddings/:weddingId/memories/social")
  @UseGuards(JwtAuthGuard)
  ownerSocial(@Param("weddingId") weddingId: string, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.memories.ownerSocial(weddingId, user);
  }

  @Patch("weddings/:weddingId/memories/social/:kind/:id")
  @UseGuards(JwtAuthGuard)
  moderateSocial(
    @Param("weddingId") weddingId: string,
    @Param("kind") kind: string,
    @Param("id") id: string,
    @Body() body: Record<string, unknown>,
    @CurrentUser() user: AuthenticatedUser,
  ): Promise<unknown> {
    return this.memories.moderateSocial(weddingId, kind, id, body, user);
  }

  @Patch("weddings/:weddingId/memories")
  @UseGuards(JwtAuthGuard)
  updateSettings(@Param("weddingId") weddingId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.memories.updateSettings(weddingId, body, user);
  }

  @Post("weddings/:weddingId/memories/regenerate-token")
  @UseGuards(JwtAuthGuard)
  regenerateToken(@Param("weddingId") weddingId: string, @CurrentUser() user: AuthenticatedUser): Promise<{ token: string }> {
    return this.memories.regenerateToken(weddingId, user);
  }

  @Patch("weddings/:weddingId/memories/assets/:assetId")
  @UseGuards(JwtAuthGuard)
  moderate(@Param("weddingId") weddingId: string, @Param("assetId") assetId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.memories.moderate(weddingId, assetId, body, user);
  }

  @Post("weddings/:weddingId/memories/assets/bulk")
  @UseGuards(JwtAuthGuard)
  bulkModerate(@Param("weddingId") weddingId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<{ updated: number }> {
    return this.memories.bulkModerate(weddingId, body, user);
  }

  @Delete("weddings/:weddingId/memories/assets/:assetId")
  @UseGuards(JwtAuthGuard)
  remove(@Param("weddingId") weddingId: string, @Param("assetId") assetId: string, @CurrentUser() user: AuthenticatedUser): Promise<{ deleted: true }> {
    return this.memories.remove(weddingId, assetId, user);
  }

  @Get("public/memories/:token")
  publicOverview(@Param("token") token: string, @Query("viewer") viewer: string | undefined): Promise<unknown> {
    return this.memories.publicOverview(token, viewer);
  }

  @Get("public/memories/:token/assets")
  publicAssets(
    @Param("token") token: string,
    @Query("cursor") cursor: string | undefined,
    @Query("limit") limit: string | undefined,
    @Query("viewer") viewer: string | undefined,
  ): Promise<unknown> {
    return this.memories.publicAssets(token, cursor, limit, viewer);
  }

  @Post("public/memories/:token/upload/prepare")
  prepareUpload(@Param("token") token: string, @Body() body: Record<string, unknown>): Promise<unknown> {
    return this.memories.prepareUpload(token, body);
  }

  @Post("public/memories/:token/upload/complete")
  completeUpload(@Param("token") token: string, @Body() body: Record<string, unknown>): Promise<unknown> {
    return this.memories.completeUpload(token, body);
  }

  @Post("public/memories/:token/upload")
  @UseInterceptors(FileInterceptor("file", {
    limits: { fileSize: 30 * 1024 * 1024, files: 1 },
    fileFilter: (_request, file, callback) => {
      const allowed = ["image/jpeg", "image/png", "image/webp", "video/mp4", "video/webm", "video/quicktime"].includes(file.mimetype);
      callback(allowed ? null : new BadRequestException("Chỉ hỗ trợ JPEG, PNG, WebP, MP4, WebM và MOV"), allowed);
    },
  }))
  upload(@Param("token") token: string, @UploadedFile() file: Express.Multer.File | undefined, @Body() body: Record<string, unknown>): Promise<unknown> {
    return this.memories.upload(token, file, body);
  }

  @Post("public/memories/:token/assets/:assetId/reactions/toggle")
  toggleReaction(@Param("token") token: string, @Param("assetId") assetId: string, @Body() body: Record<string, unknown>): Promise<unknown> {
    return this.memories.toggleReaction(token, assetId, body);
  }

  @Get("public/memories/:token/assets/:assetId/comments")
  comments(
    @Param("token") token: string,
    @Param("assetId") assetId: string,
    @Query("cursor") cursor: string | undefined,
    @Query("limit") limit: string | undefined,
  ): Promise<unknown> {
    return this.memories.comments(token, assetId, cursor, limit);
  }

  @Post("public/memories/:token/assets/:assetId/comments")
  addComment(@Param("token") token: string, @Param("assetId") assetId: string, @Body() body: Record<string, unknown>): Promise<unknown> {
    return this.memories.addComment(token, assetId, body);
  }

  @Get("public/memories/:token/guestbook")
  guestbook(@Param("token") token: string, @Query("cursor") cursor: string | undefined, @Query("limit") limit: string | undefined): Promise<unknown> {
    return this.memories.guestbook(token, cursor, limit);
  }

  @Get("memories/assets/:assetId")
  media(@Param("assetId") assetId: string, @Query("token") token: string, @Query("download") download: string | undefined): Promise<unknown> {
    return this.memories.media(assetId, token, download === "1");
  }

  @Get("public/memories/:token/qr.svg")
  @Header("Content-Type", "image/svg+xml")
  qr(@Param("token") token: string): Promise<string> {
    return this.memories.qr(token);
  }
}
