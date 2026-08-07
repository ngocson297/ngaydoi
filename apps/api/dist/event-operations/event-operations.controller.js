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
import { Body, Controller, Delete, Get, Header, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { EventOperationsService } from "./event-operations.service.js";
let EventOperationsController = class EventOperationsController {
    service;
    constructor(service) {
        this.service = service;
    }
    overview(weddingId, eventId, user) {
        return this.service.overview(weddingId, eventId, user);
    }
    createTable(weddingId, body, user) {
        return this.service.createTable(weddingId, body, user);
    }
    updateTable(weddingId, tableId, body, user) {
        return this.service.updateTable(weddingId, tableId, body, user);
    }
    deleteTable(weddingId, tableId, user) {
        return this.service.deleteTable(weddingId, tableId, user);
    }
    assign(weddingId, body, user) {
        return this.service.assignGuest(weddingId, body, user);
    }
    unassign(weddingId, assignmentId, user) {
        return this.service.unassignGuest(weddingId, assignmentId, user);
    }
    autoAssign(weddingId, body, user) {
        return this.service.autoAssign(weddingId, body, user);
    }
    createStation(weddingId, body, user) {
        return this.service.createStation(weddingId, body, user);
    }
    updateStation(weddingId, stationId, body, user) {
        return this.service.updateStation(weddingId, stationId, body, user);
    }
    exportCsv(weddingId, eventId, user) {
        return this.service.exportCsv(weddingId, eventId, user);
    }
    guestQr(invitationToken) {
        return this.service.guestQr(invitationToken);
    }
    guestIdQr(guestId) {
        return this.service.guestIdQr(guestId);
    }
    station(token) { return this.service.stationOverview(token); }
    search(token, query) { return this.service.searchStationGuests(token, query ?? ""); }
    checkIn(token, body) { return this.service.checkIn(token, body); }
    checkOut(token, body) { return this.service.checkOut(token, body); }
};
__decorate([
    Get("weddings/:weddingId/event-operations"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Query("eventId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "overview", null);
__decorate([
    Post("weddings/:weddingId/event-operations/tables"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "createTable", null);
__decorate([
    Patch("weddings/:weddingId/event-operations/tables/:tableId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("tableId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "updateTable", null);
__decorate([
    Delete("weddings/:weddingId/event-operations/tables/:tableId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("tableId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "deleteTable", null);
__decorate([
    Post("weddings/:weddingId/event-operations/assignments"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "assign", null);
__decorate([
    Delete("weddings/:weddingId/event-operations/assignments/:assignmentId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("assignmentId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "unassign", null);
__decorate([
    Post("weddings/:weddingId/event-operations/auto-assign"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "autoAssign", null);
__decorate([
    Post("weddings/:weddingId/event-operations/stations"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "createStation", null);
__decorate([
    Patch("weddings/:weddingId/event-operations/stations/:stationId"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("weddingId")),
    __param(1, Param("stationId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "updateStation", null);
__decorate([
    Get("weddings/:weddingId/event-operations/export"),
    UseGuards(JwtAuthGuard),
    Header("Content-Type", "text/csv; charset=utf-8"),
    __param(0, Param("weddingId")),
    __param(1, Query("eventId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "exportCsv", null);
__decorate([
    Get("checkin/guest-qr/:invitationToken.svg"),
    Header("Content-Type", "image/svg+xml"),
    __param(0, Param("invitationToken")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "guestQr", null);
__decorate([
    Get("checkin/guest-id-qr/:guestId.svg"),
    Header("Content-Type", "image/svg+xml"),
    __param(0, Param("guestId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "guestIdQr", null);
__decorate([
    Get("checkin/stations/:token"),
    __param(0, Param("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "station", null);
__decorate([
    Get("checkin/stations/:token/search"),
    __param(0, Param("token")),
    __param(1, Query("q")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "search", null);
__decorate([
    Post("checkin/stations/:token/check-in"),
    __param(0, Param("token")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "checkIn", null);
__decorate([
    Post("checkin/stations/:token/check-out"),
    __param(0, Param("token")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EventOperationsController.prototype, "checkOut", null);
EventOperationsController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [EventOperationsService])
], EventOperationsController);
export { EventOperationsController };
//# sourceMappingURL=event-operations.controller.js.map