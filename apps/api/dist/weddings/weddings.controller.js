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
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { CreateCollaboratorDto } from "./dto/create-collaborator.dto.js";
import { CreateEventDto } from "./dto/create-event.dto.js";
import { CreateWeddingDto } from "./dto/create-wedding.dto.js";
import { DuplicateWeddingDto } from "./dto/duplicate-wedding.dto.js";
import { UpdateEventDto } from "./dto/update-event.dto.js";
import { UpdateLifecycleDto } from "./dto/update-lifecycle.dto.js";
import { UpdateWeddingDto } from "./dto/update-wedding.dto.js";
import { WeddingsService } from "./weddings.service.js";
let WeddingsController = class WeddingsController {
    weddingsService;
    constructor(weddingsService) {
        this.weddingsService = weddingsService;
    }
    getPublic(slug) {
        return this.weddingsService.getPublicBySlug(slug);
    }
    getSlugAvailability(slug, excludeWeddingId) {
        return this.weddingsService.getSlugAvailability(slug ?? "", excludeWeddingId);
    }
    acceptCollaboration(token, user) {
        return this.weddingsService.acceptCollaboration(token, user);
    }
    list(user) {
        return this.weddingsService.list(user);
    }
    create(dto, user) {
        return this.weddingsService.create(dto, user);
    }
    getOne(id, user) {
        return this.weddingsService.getOne(id, user);
    }
    update(id, dto, user) {
        return this.weddingsService.update(id, dto, user);
    }
    archive(id, user) {
        return this.weddingsService.archive(id, user);
    }
    getDashboard(id, user) {
        return this.weddingsService.getDashboard(id, user);
    }
    requestPublish(id, user) {
        return this.weddingsService.requestPublish(id, user);
    }
    updateLifecycle(id, dto, user) {
        return this.weddingsService.updateLifecycle(id, dto, user);
    }
    duplicate(id, dto, user) {
        return this.weddingsService.duplicate(id, dto, user);
    }
    createEvent(id, dto, user) {
        return this.weddingsService.createEvent(id, dto, user);
    }
    updateEvent(id, eventId, dto, user) {
        return this.weddingsService.updateEvent(id, eventId, dto, user);
    }
    deleteEvent(id, eventId, user) {
        return this.weddingsService.deleteEvent(id, eventId, user);
    }
    inviteCollaborator(id, dto, user) {
        return this.weddingsService.inviteCollaborator(id, dto, user);
    }
    revokeCollaborator(id, collaboratorId, user) {
        return this.weddingsService.revokeCollaborator(id, collaboratorId, user);
    }
};
__decorate([
    Get("public/:slug"),
    __param(0, Param("slug")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "getPublic", null);
__decorate([
    Get("slug-availability"),
    UseGuards(JwtAuthGuard),
    __param(0, Query("slug")),
    __param(1, Query("excludeWeddingId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "getSlugAvailability", null);
__decorate([
    Post("collaborations/:token/accept"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("token")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "acceptCollaboration", null);
__decorate([
    Get(),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "list", null);
__decorate([
    Post(),
    UseGuards(JwtAuthGuard),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateWeddingDto, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "create", null);
__decorate([
    Get(":id"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "getOne", null);
__decorate([
    Patch(":id"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateWeddingDto, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "update", null);
__decorate([
    Delete(":id"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "archive", null);
__decorate([
    Get(":id/dashboard"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "getDashboard", null);
__decorate([
    Post(":id/publish-request"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "requestPublish", null);
__decorate([
    Post(":id/lifecycle"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateLifecycleDto, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "updateLifecycle", null);
__decorate([
    Post(":id/duplicate"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, DuplicateWeddingDto, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "duplicate", null);
__decorate([
    Post(":id/events"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateEventDto, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "createEvent", null);
__decorate([
    Patch(":id/events/:eventId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Param("eventId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpdateEventDto, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "updateEvent", null);
__decorate([
    Delete(":id/events/:eventId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Param("eventId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "deleteEvent", null);
__decorate([
    Post(":id/collaborators"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateCollaboratorDto, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "inviteCollaborator", null);
__decorate([
    Delete(":id/collaborators/:collaboratorId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Param("collaboratorId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WeddingsController.prototype, "revokeCollaborator", null);
WeddingsController = __decorate([
    Controller("weddings"),
    __metadata("design:paramtypes", [WeddingsService])
], WeddingsController);
export { WeddingsController };
//# sourceMappingURL=weddings.controller.js.map