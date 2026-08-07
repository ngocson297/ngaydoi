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
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { BulkGuestsDto } from "./dto/bulk-guests.dto.js";
import { CreateGuestDto } from "./dto/create-guest.dto.js";
import { ImportGuestsDto } from "./dto/import-guests.dto.js";
import { UpdateGuestInvitationDto } from "./dto/update-invitation.dto.js";
import { UpdateGuestDto } from "./dto/update-guest.dto.js";
import { GuestsService } from "./guests.service.js";
let GuestsController = class GuestsController {
    guestsService;
    constructor(guestsService) {
        this.guestsService = guestsService;
    }
    getPersonalizedInvitation(token) {
        return this.guestsService.getPersonalizedInvitation(token);
    }
    list(weddingId, user, query) {
        return this.guestsService.list(weddingId, user, query);
    }
    analytics(weddingId, user) {
        return this.guestsService.analytics(weddingId, user);
    }
    exportGuests(weddingId, user) {
        return this.guestsService.exportGuests(weddingId, user);
    }
    previewImport(weddingId, dto, user) {
        return this.guestsService.importGuests(weddingId, dto, user, true);
    }
    importGuests(weddingId, dto, user) {
        return this.guestsService.importGuests(weddingId, dto, user, false);
    }
    bulk(weddingId, dto, user) {
        return this.guestsService.bulk(weddingId, dto, user);
    }
    create(weddingId, dto, user) {
        return this.guestsService.create(weddingId, dto, user);
    }
    update(weddingId, guestId, dto, user) {
        return this.guestsService.update(weddingId, guestId, dto, user);
    }
    remove(weddingId, guestId, user) {
        return this.guestsService.remove(weddingId, guestId, user);
    }
    updateInvitation(weddingId, guestId, dto, user) {
        return this.guestsService.updateInvitation(weddingId, guestId, dto, user);
    }
    markSent(weddingId, guestId, user) {
        return this.guestsService.markSent(weddingId, guestId, user);
    }
    notifications(weddingId, user) {
        return this.guestsService.notifications(weddingId, user);
    }
    markNotificationRead(weddingId, notificationId, user) {
        return this.guestsService.markNotificationRead(weddingId, notificationId, user);
    }
};
__decorate([
    Get("guest-invitations/:token"),
    __param(0, Param("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "getPersonalizedInvitation", null);
__decorate([
    Get("weddings/:weddingId/guests"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, CurrentUser()),
    __param(2, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "list", null);
__decorate([
    Get("weddings/:weddingId/guests/analytics"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "analytics", null);
__decorate([
    Get("weddings/:weddingId/guests/export"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "exportGuests", null);
__decorate([
    Post("weddings/:weddingId/guests/import-preview"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ImportGuestsDto, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "previewImport", null);
__decorate([
    Post("weddings/:weddingId/guests/import"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ImportGuestsDto, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "importGuests", null);
__decorate([
    Post("weddings/:weddingId/guests/bulk"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, BulkGuestsDto, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "bulk", null);
__decorate([
    Post("weddings/:weddingId/guests"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateGuestDto, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "create", null);
__decorate([
    Patch("weddings/:weddingId/guests/:guestId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("guestId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpdateGuestDto, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "update", null);
__decorate([
    Delete("weddings/:weddingId/guests/:guestId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("guestId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "remove", null);
__decorate([
    Patch("weddings/:weddingId/guests/:guestId/invitation"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("guestId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpdateGuestInvitationDto, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "updateInvitation", null);
__decorate([
    Post("weddings/:weddingId/guests/:guestId/mark-sent"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("guestId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "markSent", null);
__decorate([
    Get("weddings/:weddingId/notifications"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "notifications", null);
__decorate([
    Patch("weddings/:weddingId/notifications/:notificationId/read"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("notificationId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], GuestsController.prototype, "markNotificationRead", null);
GuestsController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [GuestsService])
], GuestsController);
export { GuestsController };
//# sourceMappingURL=guests.controller.js.map