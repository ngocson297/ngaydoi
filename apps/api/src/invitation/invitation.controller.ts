import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CurrentUser } from "../auth/current-user.decorator.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { CreateVersionDto } from "./dto/create-version.dto.js";
import { ReorderMediaDto } from "./dto/reorder-media.dto.js";
import { UpdateInvitationDesignDto } from "./dto/update-invitation-design.dto.js";
import { UpdateMediaDto } from "./dto/update-media.dto.js";
import { UploadMediaDto } from "./dto/upload-media.dto.js";
import { InvitationService } from "./invitation.service.js";

@Controller()
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  @Get("templates")
  getTemplates() {
    return this.invitationService.getTemplates();
  }

  @Get("gift-transfer/banks")
  getGiftTransferBanks() {
    return this.invitationService.getGiftTransferBanks();
  }

  @Get("invitations/preview/:token")
  getPreview(@Param("token") token: string) {
    return this.invitationService.getPreview(token);
  }

  @Get("media/public/:mediaId")
  getMedia(@Param("mediaId") mediaId: string) {
    return this.invitationService.getMediaFile(mediaId);
  }

  @Get("gift-transfer/media/:assetId")
  getGiftQr(@Param("assetId") assetId: string) {
    return this.invitationService.getGiftQrFile(assetId);
  }


  @Get("weddings/:id/invitation")
  @UseGuards(JwtAuthGuard)
  getEditor(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.invitationService.getEditor(id, user);
  }

  @Patch("weddings/:id/invitation")
  @UseGuards(JwtAuthGuard)
  updateDesign(
    @Param("id") id: string,
    @Body() dto: UpdateInvitationDesignDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.invitationService.updateDesign(id, dto, user);
  }

  @Post("weddings/:id/invitation/preview-token")
  @UseGuards(JwtAuthGuard)
  createPreviewToken(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.invitationService.createPreviewToken(id, user);
  }

  @Delete("weddings/:id/invitation/preview-token")
  @UseGuards(JwtAuthGuard)
  revokePreviewTokens(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.invitationService.revokePreviewTokens(id, user);
  }

  @Post("weddings/:id/invitation/versions")
  @UseGuards(JwtAuthGuard)
  createVersion(
    @Param("id") id: string,
    @Body() dto: CreateVersionDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.invitationService.createVersion(id, dto, user);
  }

  @Post("weddings/:id/invitation/versions/:versionId/restore")
  @UseGuards(JwtAuthGuard)
  restoreVersion(
    @Param("id") id: string,
    @Param("versionId") versionId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.invitationService.restoreVersion(id, versionId, user);
  }

  @Post("weddings/:id/gift-qr")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("file", {
    limits: { fileSize: 4 * 1024 * 1024, files: 1 },
    fileFilter: (_request, file, callback) => {
      const allowed = ["image/jpeg", "image/png", "image/webp"].includes(file.mimetype);
      callback(allowed ? null : new BadRequestException("Only JPEG, PNG and WebP QR images are supported"), allowed);
    },
  }))
  uploadGiftQr(
    @Param("id") id: string,
    @UploadedFile() file: Express.Multer.File | undefined,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.invitationService.uploadGiftQr(id, file, user);
  }

  @Delete("weddings/:id/gift-qr/:assetId")
  @UseGuards(JwtAuthGuard)
  deleteGiftQr(
    @Param("id") id: string,
    @Param("assetId") assetId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.invitationService.deleteGiftQr(id, assetId, user);
  }

  @Post("weddings/:id/media")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("file", {
    limits: { fileSize: 6 * 1024 * 1024, files: 1 },
    fileFilter: (_request, file, callback) => {
      const allowed = ["image/jpeg", "image/png", "image/webp"].includes(file.mimetype);
      callback(allowed ? null : new BadRequestException("Only JPEG, PNG and WebP images are supported"), allowed);
    },
  }))
  uploadMedia(
    @Param("id") id: string,
    @UploadedFile() file: Express.Multer.File | undefined,
    @Body() dto: UploadMediaDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.invitationService.uploadMedia(id, file, dto, user);
  }

  @Patch("weddings/:id/media/:mediaId")
  @UseGuards(JwtAuthGuard)
  updateMedia(
    @Param("id") id: string,
    @Param("mediaId") mediaId: string,
    @Body() dto: UpdateMediaDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.invitationService.updateMedia(id, mediaId, dto, user);
  }

  @Post("weddings/:id/media/reorder")
  @UseGuards(JwtAuthGuard)
  reorderMedia(
    @Param("id") id: string,
    @Body() dto: ReorderMediaDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.invitationService.reorderMedia(id, dto, user);
  }

  @Delete("weddings/:id/media/:mediaId")
  @UseGuards(JwtAuthGuard)
  deleteMedia(
    @Param("id") id: string,
    @Param("mediaId") mediaId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.invitationService.deleteMedia(id, mediaId, user);
  }
}
