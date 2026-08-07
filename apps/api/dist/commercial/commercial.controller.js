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
import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { CommercialService } from "./commercial.service.js";
import { CreateOrderDto } from "./dto/create-order.dto.js";
import { SubmitPaymentDto } from "./dto/submit-payment.dto.js";
let CommercialController = class CommercialController {
    commercial;
    constructor(commercial) {
        this.commercial = commercial;
    }
    getCatalog() {
        return this.commercial.getCatalog();
    }
    getEntitlements(id, user) {
        return this.commercial.getEntitlements(id, user);
    }
    quote(dto, user) {
        return this.commercial.quote(dto, user);
    }
    create(dto, user) {
        return this.commercial.createOrder(dto, user);
    }
    list(user) {
        return this.commercial.listOrders(user);
    }
    detail(id, user) {
        return this.commercial.getOrder(id, user);
    }
    submitPayment(id, dto, user) {
        return this.commercial.submitPayment(id, dto, user);
    }
    sandboxPay(id, user) {
        return this.commercial.sandboxPay(id, user);
    }
};
__decorate([
    Get("plans"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommercialController.prototype, "getCatalog", null);
__decorate([
    Get("weddings/:id/entitlements"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommercialController.prototype, "getEntitlements", null);
__decorate([
    Post("orders/quote"),
    UseGuards(JwtAuthGuard),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOrderDto, Object]),
    __metadata("design:returntype", void 0)
], CommercialController.prototype, "quote", null);
__decorate([
    Post("orders"),
    UseGuards(JwtAuthGuard),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOrderDto, Object]),
    __metadata("design:returntype", void 0)
], CommercialController.prototype, "create", null);
__decorate([
    Get("orders"),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommercialController.prototype, "list", null);
__decorate([
    Get("orders/:id"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommercialController.prototype, "detail", null);
__decorate([
    Post("orders/:id/payment-reference"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, SubmitPaymentDto, Object]),
    __metadata("design:returntype", void 0)
], CommercialController.prototype, "submitPayment", null);
__decorate([
    Post("orders/:id/sandbox-pay"),
    UseGuards(JwtAuthGuard),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommercialController.prototype, "sandboxPay", null);
CommercialController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [CommercialService])
], CommercialController);
export { CommercialController };
//# sourceMappingURL=commercial.controller.js.map