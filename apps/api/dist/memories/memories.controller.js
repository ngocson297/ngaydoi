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
import { BadRequestException, Body, Controller, Delete, Get, Header, Param, Patch, Post, Query, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { MemoriesService } from "./memories.service.js";
let MemoriesController = class MemoriesController {
    memories;
    constructor(memories) {
        this.memories = memories;
    }
    ownerOverview(weddingId, user) {
        return this.memories.ownerOverview(weddingId, user);
    }
    ownerAssets(weddingId, cursor, limit, status, user) {
        return this.memories.ownerAssets(weddingId, user, cursor, limit, status);
    }
    ownerMedia(weddingId, assetId, user) {
        return this.memories.ownerMedia(weddingId, assetId, user);
    }
    ownerArchive(weddingId, assetIds, user) {
        return this.memories.ownerArchive(weddingId, user, assetIds);
    }
    ownerSocial(weddingId, user) {
        return this.memories.ownerSocial(weddingId, user);
    }
    moderateSocial(weddingId, kind, id, body, user) {
        return this.memories.moderateSocial(weddingId, kind, id, body, user);
    }
    deleteOwnerComment(weddingId, commentId, user) {
        return this.memories.deleteOwnerComment(weddingId, commentId, user);
    }
    updateSettings(weddingId, body, user) {
        return this.memories.updateSettings(weddingId, body, user);
    }
    regenerateToken(weddingId, user) {
        return this.memories.regenerateToken(weddingId, user);
    }
    setFeatured(weddingId, assetId, body, user) {
        return this.memories.setFeatured(weddingId, assetId, body, user);
    }
    moderate(weddingId, assetId, body, user) {
        return this.memories.moderate(weddingId, assetId, body, user);
    }
    bulkModerate(weddingId, body, user) {
        return this.memories.bulkModerate(weddingId, body, user);
    }
    remove(weddingId, assetId, user) {
        return this.memories.remove(weddingId, assetId, user);
    }
    publicOverview(token, viewer) {
        return this.memories.publicOverview(token, viewer);
    }
    publicAssets(token, cursor, limit, viewer) {
        return this.memories.publicAssets(token, cursor, limit, viewer);
    }
    prepareUpload(token, body) {
        return this.memories.prepareUpload(token, body);
    }
    completeUpload(token, body) {
        return this.memories.completeUpload(token, body);
    }
    upload(token, file, body) {
        return this.memories.upload(token, file, body);
    }
    toggleReaction(token, assetId, body) {
        return this.memories.toggleReaction(token, assetId, body);
    }
    comments(token, assetId, cursor, limit, viewer) {
        return this.memories.comments(token, assetId, cursor, limit, viewer);
    }
    addComment(token, assetId, body) {
        return this.memories.addComment(token, assetId, body);
    }
    deleteOwnComment(token, assetId, commentId, body) {
        return this.memories.deleteOwnComment(token, assetId, commentId, body);
    }
    publicArchive(token, assetIds) {
        return this.memories.publicArchive(token, assetIds);
    }
    guestbook(token, cursor, limit) {
        return this.memories.guestbook(token, cursor, limit);
    }
    media(assetId, token, download) {
        return this.memories.media(assetId, token, download === "1");
    }
    qr(token) {
        return this.memories.qr(token);
    }
};
__decorate([
    Get("weddings/:weddingId/memories"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "ownerOverview", null);
__decorate([
    Get("weddings/:weddingId/memories/assets"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Query("cursor")),
    __param(2, Query("limit")),
    __param(3, Query("status")),
    __param(4, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "ownerAssets", null);
__decorate([
    Get("weddings/:weddingId/memories/assets/:assetId/media"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("assetId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "ownerMedia", null);
__decorate([
    Get("weddings/:weddingId/memories/archive"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Query("assetIds")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "ownerArchive", null);
__decorate([
    Get("weddings/:weddingId/memories/social"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "ownerSocial", null);
__decorate([
    Patch("weddings/:weddingId/memories/social/:kind/:id"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("kind")),
    __param(2, Param("id")),
    __param(3, Body()),
    __param(4, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "moderateSocial", null);
__decorate([
    Delete("weddings/:weddingId/memories/comments/:commentId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("commentId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "deleteOwnerComment", null);
__decorate([
    Patch("weddings/:weddingId/memories"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "updateSettings", null);
__decorate([
    Post("weddings/:weddingId/memories/regenerate-token"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "regenerateToken", null);
__decorate([
    Patch("weddings/:weddingId/memories/assets/:assetId/featured"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("assetId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "setFeatured", null);
__decorate([
    Patch("weddings/:weddingId/memories/assets/:assetId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("assetId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "moderate", null);
__decorate([
    Post("weddings/:weddingId/memories/assets/bulk"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "bulkModerate", null);
__decorate([
    Delete("weddings/:weddingId/memories/assets/:assetId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("assetId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "remove", null);
__decorate([
    Get("public/memories/:token"),
    __param(0, Param("token")),
    __param(1, Query("viewer")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "publicOverview", null);
__decorate([
    Get("public/memories/:token/assets"),
    __param(0, Param("token")),
    __param(1, Query("cursor")),
    __param(2, Query("limit")),
    __param(3, Query("viewer")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "publicAssets", null);
__decorate([
    Post("public/memories/:token/upload/prepare"),
    __param(0, Param("token")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "prepareUpload", null);
__decorate([
    Post("public/memories/:token/upload/complete"),
    __param(0, Param("token")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "completeUpload", null);
__decorate([
    Post("public/memories/:token/upload"),
    UseInterceptors(FileInterceptor("file", {
        limits: { fileSize: 30 * 1024 * 1024, files: 1 },
        fileFilter: (_request, file, callback) => {
            const allowed = ["image/jpeg", "image/png", "image/webp", "video/mp4", "video/webm", "video/quicktime"].includes(file.mimetype);
            callback(allowed ? null : new BadRequestException("Chỉ hỗ trợ JPEG, PNG, WebP, MP4, WebM và MOV"), allowed);
        },
    })),
    __param(0, Param("token")),
    __param(1, UploadedFile()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "upload", null);
__decorate([
    Post("public/memories/:token/assets/:assetId/reactions/toggle"),
    __param(0, Param("token")),
    __param(1, Param("assetId")),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "toggleReaction", null);
__decorate([
    Get("public/memories/:token/assets/:assetId/comments"),
    __param(0, Param("token")),
    __param(1, Param("assetId")),
    __param(2, Query("cursor")),
    __param(3, Query("limit")),
    __param(4, Query("viewer")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "comments", null);
__decorate([
    Post("public/memories/:token/assets/:assetId/comments"),
    __param(0, Param("token")),
    __param(1, Param("assetId")),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "addComment", null);
__decorate([
    Delete("public/memories/:token/assets/:assetId/comments/:commentId"),
    __param(0, Param("token")),
    __param(1, Param("assetId")),
    __param(2, Param("commentId")),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "deleteOwnComment", null);
__decorate([
    Get("public/memories/:token/archive"),
    __param(0, Param("token")),
    __param(1, Query("assetIds")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "publicArchive", null);
__decorate([
    Get("public/memories/:token/guestbook"),
    __param(0, Param("token")),
    __param(1, Query("cursor")),
    __param(2, Query("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "guestbook", null);
__decorate([
    Get("memories/assets/:assetId"),
    __param(0, Param("assetId")),
    __param(1, Query("token")),
    __param(2, Query("download")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "media", null);
__decorate([
    Get("public/memories/:token/qr.svg"),
    Header("Content-Type", "image/svg+xml"),
    __param(0, Param("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MemoriesController.prototype, "qr", null);
MemoriesController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [MemoriesService])
], MemoriesController);
export { MemoriesController };
//# sourceMappingURL=memories.controller.js.map