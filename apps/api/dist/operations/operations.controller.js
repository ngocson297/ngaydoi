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
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import { CreateWebhookDto } from "./dto/create-webhook.dto.js";
import { ToggleWebhookDto } from "./dto/toggle-webhook.dto.js";
import { MailService } from "./mail.service.js";
import { SystemHealthService } from "./system-health.service.js";
import { WebhookService } from "./webhook.service.js";
let OperationsController = class OperationsController {
    health;
    mail;
    webhooks;
    constructor(health, mail, webhooks) {
        this.health = health;
        this.mail = mail;
        this.webhooks = webhooks;
    }
    overview() { return this.health.adminOverview(); }
    emails() { return this.mail.summary(); }
    processEmails() { return this.mail.processPending(30); }
    async retryEmail(id) { await this.mail.retry(id); return { success: true }; }
    webhooksList() { return this.webhooks.list(); }
    createWebhook(dto) { return this.webhooks.create(dto); }
    deleteWebhook(id) { return this.webhooks.remove(id); }
    toggleWebhook(id, dto) { return this.webhooks.toggle(id, dto.active); }
    testWebhook(id) { return this.webhooks.test(id); }
    webhookDeliveries(endpointId) { return this.webhooks.deliveries(endpointId); }
    async retryWebhook(id) { await this.webhooks.retry(id); return { success: true }; }
    processWebhooks() { return this.webhooks.processPending(30); }
};
__decorate([
    Get("overview"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "overview", null);
__decorate([
    Get("emails"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "emails", null);
__decorate([
    Post("emails/process"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "processEmails", null);
__decorate([
    Post("emails/:id/retry"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperationsController.prototype, "retryEmail", null);
__decorate([
    Get("webhooks"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "webhooksList", null);
__decorate([
    Post("webhooks"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateWebhookDto]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "createWebhook", null);
__decorate([
    Delete("webhooks/:id"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "deleteWebhook", null);
__decorate([
    Patch("webhooks/:id"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ToggleWebhookDto]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "toggleWebhook", null);
__decorate([
    Post("webhooks/:id/test"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "testWebhook", null);
__decorate([
    Get("webhook-deliveries"),
    __param(0, Query("endpointId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "webhookDeliveries", null);
__decorate([
    Post("webhook-deliveries/:id/retry"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperationsController.prototype, "retryWebhook", null);
__decorate([
    Post("webhooks/process"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperationsController.prototype, "processWebhooks", null);
OperationsController = __decorate([
    Controller("admin/system"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __metadata("design:paramtypes", [SystemHealthService,
        MailService,
        WebhookService])
], OperationsController);
export { OperationsController };
//# sourceMappingURL=operations.controller.js.map