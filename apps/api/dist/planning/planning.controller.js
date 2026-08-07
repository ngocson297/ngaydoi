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
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import { PlanningService } from "./planning.service.js";
let PlanningController = class PlanningController {
    planning;
    constructor(planning) {
        this.planning = planning;
    }
    overview(weddingId, user) {
        return this.planning.overview(weddingId, user);
    }
    bootstrap(weddingId, user) {
        return this.planning.bootstrap(weddingId, user);
    }
    create(weddingId, body, user) {
        return this.planning.create(weddingId, body, user);
    }
    update(weddingId, taskId, body, user) {
        return this.planning.update(weddingId, taskId, body, user);
    }
    remove(weddingId, taskId, user) {
        return this.planning.remove(weddingId, taskId, user);
    }
};
__decorate([
    Get(),
    __param(0, Param("weddingId")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PlanningController.prototype, "overview", null);
__decorate([
    Post("bootstrap"),
    __param(0, Param("weddingId")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PlanningController.prototype, "bootstrap", null);
__decorate([
    Post("tasks"),
    __param(0, Param("weddingId")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PlanningController.prototype, "create", null);
__decorate([
    Patch("tasks/:taskId"),
    __param(0, Param("weddingId")),
    __param(1, Param("taskId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], PlanningController.prototype, "update", null);
__decorate([
    Delete("tasks/:taskId"),
    __param(0, Param("weddingId")),
    __param(1, Param("taskId")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], PlanningController.prototype, "remove", null);
PlanningController = __decorate([
    Controller("weddings/:weddingId/planning"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [PlanningService])
], PlanningController);
export { PlanningController };
let PlanningAdminController = class PlanningAdminController {
    planning;
    constructor(planning) {
        this.planning = planning;
    }
    processReminders() {
        return this.planning.processReminders();
    }
};
__decorate([
    Post("reminders/process"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlanningAdminController.prototype, "processReminders", null);
PlanningAdminController = __decorate([
    Controller("admin/planning"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __metadata("design:paramtypes", [PlanningService])
], PlanningAdminController);
export { PlanningAdminController };
//# sourceMappingURL=planning.controller.js.map