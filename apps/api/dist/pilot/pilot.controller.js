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
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import { CreateAnnouncementDto } from "./dto/create-announcement.dto.js";
import { CreateIssueDto } from "./dto/create-issue.dto.js";
import { UpdateChecklistDto } from "./dto/update-checklist.dto.js";
import { UpdateIssueDto } from "./dto/update-issue.dto.js";
import { PilotService } from "./pilot.service.js";
let PilotController = class PilotController {
    pilot;
    constructor(pilot) {
        this.pilot = pilot;
    }
    announcements() { return this.pilot.publicAnnouncements(); }
    overview() { return this.pilot.overview(); }
    checklist(id, dto) { return this.pilot.updateChecklist(id, dto); }
    issue(dto) { return this.pilot.createIssue(dto); }
    issueUpdate(id, dto) { return this.pilot.updateIssue(id, dto); }
    announcement(dto) { return this.pilot.createAnnouncement(dto); }
    toggle(id) { return this.pilot.toggleAnnouncement(id); }
};
__decorate([
    Get("public/announcements"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PilotController.prototype, "announcements", null);
__decorate([
    Get("admin/pilot"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PilotController.prototype, "overview", null);
__decorate([
    Patch("admin/pilot/checklist/:id"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateChecklistDto]),
    __metadata("design:returntype", void 0)
], PilotController.prototype, "checklist", null);
__decorate([
    Post("admin/pilot/issues"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateIssueDto]),
    __metadata("design:returntype", void 0)
], PilotController.prototype, "issue", null);
__decorate([
    Patch("admin/pilot/issues/:id"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateIssueDto]),
    __metadata("design:returntype", void 0)
], PilotController.prototype, "issueUpdate", null);
__decorate([
    Post("admin/pilot/announcements"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAnnouncementDto]),
    __metadata("design:returntype", void 0)
], PilotController.prototype, "announcement", null);
__decorate([
    Patch("admin/pilot/announcements/:id/toggle"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PilotController.prototype, "toggle", null);
PilotController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [PilotService])
], PilotController);
export { PilotController };
//# sourceMappingURL=pilot.controller.js.map