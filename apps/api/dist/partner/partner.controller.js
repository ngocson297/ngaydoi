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
import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import { PartnerService } from "./partner.service.js";
let PartnerController = class PartnerController {
    partner;
    constructor(partner) {
        this.partner = partner;
    }
    overview(user) { return this.partner.overview(user); }
    apply(user, body) { return this.partner.apply(user, body); }
    profile(user, body) { return this.partner.updateProfile(user, body); }
    client(user, body) { return this.partner.addClient(user, body); }
    payout(user, body) { return this.partner.requestPayout(user, body); }
    admin() { return this.partner.adminOverview(); }
    review(user, id, body) { return this.partner.reviewPartner(user, id, body); }
    reviewPayout(user, id, body) { return this.partner.reviewPayout(user, id, body); }
};
__decorate([
    Get("partner/overview"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "overview", null);
__decorate([
    Post("partner/apply"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "apply", null);
__decorate([
    Patch("partner/profile"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "profile", null);
__decorate([
    Post("partner/clients"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "client", null);
__decorate([
    Post("partner/payouts"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "payout", null);
__decorate([
    Get("admin/partners"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "admin", null);
__decorate([
    Patch("admin/partners/:id"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __param(0, CurrentUser()),
    __param(1, Param("id")),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "review", null);
__decorate([
    Patch("admin/partner-payouts/:id"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __param(0, CurrentUser()),
    __param(1, Param("id")),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "reviewPayout", null);
PartnerController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [PartnerService])
], PartnerController);
export { PartnerController };
//# sourceMappingURL=partner.controller.js.map