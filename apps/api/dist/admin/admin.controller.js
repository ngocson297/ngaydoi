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
import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import { AdminService } from "./admin.service.js";
import { AddOrderNoteDto } from "./dto/add-order-note.dto.js";
import { PublishReviewDto } from "./dto/publish-review.dto.js";
import { ReviewPaymentDto } from "./dto/review-payment.dto.js";
import { UpsertCouponDto } from "./dto/upsert-coupon.dto.js";
let AdminController = class AdminController {
    admin;
    constructor(admin) {
        this.admin = admin;
    }
    overview() { return this.admin.overview(); }
    listOrders(query) { return this.admin.listOrders(query); }
    getOrder(id) { return this.admin.getOrder(id); }
    confirm(id, dto, user) {
        return this.admin.confirmPayment(id, dto, user);
    }
    reject(id, dto, user) {
        return this.admin.rejectPayment(id, dto, user);
    }
    refund(id, dto, user) {
        return this.admin.refund(id, dto, user);
    }
    addNote(id, dto, user) {
        return this.admin.addNote(id, dto, user);
    }
    reviewPublish(id, dto, user) {
        return this.admin.reviewPublish(id, dto, user);
    }
    coupons() { return this.admin.listCoupons(); }
    createCoupon(dto, user) { return this.admin.createCoupon(dto, user); }
    updateCoupon(id, dto, user) { return this.admin.updateCoupon(id, dto, user); }
    users(search) { return this.admin.searchUsers(search); }
    weddings(search) { return this.admin.searchWeddings(search); }
};
__decorate([
    Get("overview"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "overview", null);
__decorate([
    Get("orders"),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "listOrders", null);
__decorate([
    Get("orders/:id"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getOrder", null);
__decorate([
    Post("orders/:id/confirm-payment"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReviewPaymentDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "confirm", null);
__decorate([
    Post("orders/:id/reject-payment"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReviewPaymentDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "reject", null);
__decorate([
    Post("orders/:id/refund"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReviewPaymentDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "refund", null);
__decorate([
    Post("orders/:id/notes"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AddOrderNoteDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "addNote", null);
__decorate([
    Post("weddings/:id/publish-review"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, PublishReviewDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "reviewPublish", null);
__decorate([
    Get("coupons"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "coupons", null);
__decorate([
    Post("coupons"),
    Roles("ADMIN"),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpsertCouponDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createCoupon", null);
__decorate([
    Patch("coupons/:id"),
    Roles("ADMIN"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpsertCouponDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateCoupon", null);
__decorate([
    Get("users"),
    __param(0, Query("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "users", null);
__decorate([
    Get("weddings"),
    __param(0, Query("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "weddings", null);
AdminController = __decorate([
    Controller("admin"),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles("ADMIN", "STAFF"),
    __metadata("design:paramtypes", [AdminService])
], AdminController);
export { AdminController };
//# sourceMappingURL=admin.controller.js.map