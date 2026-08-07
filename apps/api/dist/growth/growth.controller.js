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
import { GrowthService } from "./growth.service.js";
let GrowthController = class GrowthController {
    growth;
    constructor(growth) {
        this.growth = growth;
    }
    track(body) { return this.growth.track(body); }
    onboarding(user) { return this.growth.onboarding(user); }
    onboardingUpdate(user, body) { return this.growth.updateOnboarding(user, body); }
    support(user, body) { return this.growth.createSupport(user, body); }
    mySupport(user) { return this.growth.mySupport(user); }
    domain(user, body) { return this.growth.requestDomain(user, body); }
    domains(user) { return this.growth.myDomains(user); }
    referral(user, body) { return this.growth.createReferral(user, body); }
    referrals(user) { return this.growth.myReferrals(user); }
    admin() { return this.growth.adminOverview(); }
    ticket(id, body) { return this.growth.updateTicket(id, body); }
    domainUpdate(id, body) { return this.growth.updateDomain(id, body); }
};
__decorate([
    Post("public/growth/events"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "track", null);
__decorate([
    Get("growth/onboarding"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "onboarding", null);
__decorate([
    Patch("growth/onboarding"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "onboardingUpdate", null);
__decorate([
    Post("support/tickets"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "support", null);
__decorate([
    Get("support/tickets"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "mySupport", null);
__decorate([
    Post("growth/domains"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "domain", null);
__decorate([
    Get("growth/domains"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "domains", null);
__decorate([
    Post("growth/referrals"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "referral", null);
__decorate([
    Get("growth/referrals"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "referrals", null);
__decorate([
    Get("admin/growth"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "admin", null);
__decorate([
    Patch("admin/growth/tickets/:id"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "ticket", null);
__decorate([
    Patch("admin/growth/domains/:id"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GrowthController.prototype, "domainUpdate", null);
GrowthController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [GrowthService])
], GrowthController);
export { GrowthController };
//# sourceMappingURL=growth.controller.js.map