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
import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors, } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { CreateVersionDto } from "./dto/create-version.dto.js";
import { ReorderMediaDto } from "./dto/reorder-media.dto.js";
import { UpdateInvitationDesignDto } from "./dto/update-invitation-design.dto.js";
import { UpdateMediaDto } from "./dto/update-media.dto.js";
import { UploadMediaDto } from "./dto/upload-media.dto.js";
import { InvitationService } from "./invitation.service.js";
let InvitationController = class InvitationController {
    invitationService;
    constructor(invitationService) {
        this.invitationService = invitationService;
    }
    getTemplates() {
        return this.invitationService.getTemplates();
    }
    getGiftTransferBanks() {
        return this.invitationService.getGiftTransferBanks();
    }
    getPreview(token) {
        return this.invitationService.getPreview(token);
    }
    getMedia(mediaId) {
        return this.invitationService.getMediaFile(mediaId);
    }
    getGiftQr(assetId) {
        return this.invitationService.getGiftQrFile(assetId);
    }
    getEditor(id, user) {
        return this.invitationService.getEditor(id, user);
    }
    updateDesign(id, dto, user) {
        return this.invitationService.updateDesign(id, dto, user);
    }
    createPreviewToken(id, user) {
        return this.invitationService.createPreviewToken(id, user);
    }
    revokePreviewTokens(id, user) {
        return this.invitationService.revokePreviewTokens(id, user);
    }
    createVersion(id, dto, user) {
        return this.invitationService.createVersion(id, dto, user);
    }
    restoreVersion(id, versionId, user) {
        return this.invitationService.restoreVersion(id, versionId, user);
    }
    uploadGiftQr(id, file, user) {
        return this.invitationService.uploadGiftQr(id, file, user);
    }
    deleteGiftQr(id, assetId, user) {
        return this.invitationService.deleteGiftQr(id, assetId, user);
    }
    uploadMedia(id, file, dto, user) {
        return this.invitationService.uploadMedia(id, file, dto, user);
    }
    updateMedia(id, mediaId, dto, user) {
        return this.invitationService.updateMedia(id, mediaId, dto, user);
    }
    reorderMedia(id, dto, user) {
        return this.invitationService.reorderMedia(id, dto, user);
    }
    deleteMedia(id, mediaId, user) {
        return this.invitationService.deleteMedia(id, mediaId, user);
    }
};
__decorate([
    Get("templates"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "getTemplates", null);
__decorate([
    Get("gift-transfer/banks"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "getGiftTransferBanks", null);
__decorate([
    Get("invitations/preview/:token"),
    __param(0, Param("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "getPreview", null);
__decorate([
    Get("media/public/:mediaId"),
    __param(0, Param("mediaId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "getMedia", null);
__decorate([
    Get("gift-transfer/media/:assetId"),
    __param(0, Param("assetId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "getGiftQr", null);
__decorate([
    Get("weddings/:id/invitation"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "getEditor", null);
__decorate([
    Patch("weddings/:id/invitation"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateInvitationDesignDto, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "updateDesign", null);
__decorate([
    Post("weddings/:id/invitation/preview-token"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "createPreviewToken", null);
__decorate([
    Delete("weddings/:id/invitation/preview-token"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "revokePreviewTokens", null);
__decorate([
    Post("weddings/:id/invitation/versions"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateVersionDto, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "createVersion", null);
__decorate([
    Post("weddings/:id/invitation/versions/:versionId/restore"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Param("versionId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "restoreVersion", null);
__decorate([
    Post("weddings/:id/gift-qr"),
    UseGuards(JwtAuthGuard),
    UseInterceptors(FileInterceptor("file", {
        limits: { fileSize: 4 * 1024 * 1024, files: 1 },
        fileFilter: (_request, file, callback) => {
            const allowed = ["image/jpeg", "image/png", "image/webp"].includes(file.mimetype);
            callback(allowed ? null : new BadRequestException("Only JPEG, PNG and WebP QR images are supported"), allowed);
        },
    })),
    __param(0, Param("id")),
    __param(1, UploadedFile()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "uploadGiftQr", null);
__decorate([
    Delete("weddings/:id/gift-qr/:assetId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Param("assetId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "deleteGiftQr", null);
__decorate([
    Post("weddings/:id/media"),
    UseGuards(JwtAuthGuard),
    UseInterceptors(FileInterceptor("file", {
        limits: { fileSize: 6 * 1024 * 1024, files: 1 },
        fileFilter: (_request, file, callback) => {
            const allowed = ["image/jpeg", "image/png", "image/webp"].includes(file.mimetype);
            callback(allowed ? null : new BadRequestException("Only JPEG, PNG and WebP images are supported"), allowed);
        },
    })),
    __param(0, Param("id")),
    __param(1, UploadedFile()),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, UploadMediaDto, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "uploadMedia", null);
__decorate([
    Patch("weddings/:id/media/:mediaId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Param("mediaId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpdateMediaDto, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "updateMedia", null);
__decorate([
    Post("weddings/:id/media/reorder"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReorderMediaDto, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "reorderMedia", null);
__decorate([
    Delete("weddings/:id/media/:mediaId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Param("mediaId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], InvitationController.prototype, "deleteMedia", null);
InvitationController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [InvitationService])
], InvitationController);
export { InvitationController };
//# sourceMappingURL=invitation.controller.js.map