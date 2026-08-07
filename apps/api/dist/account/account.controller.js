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
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { requestMetadata } from "../auth/auth.utils.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { AccountService } from "./account.service.js";
import { ChangePasswordDto } from "./dto/change-password.dto.js";
import { DeleteAccountDto } from "./dto/delete-account.dto.js";
import { UpdateProfileDto } from "./dto/update-profile.dto.js";
let AccountController = class AccountController {
    account;
    constructor(account) {
        this.account = account;
    }
    me(user) {
        return this.account.me(user.id);
    }
    updateProfile(user, dto) {
        return this.account.updateProfile(user.id, dto);
    }
    changePassword(user, dto) {
        return this.account.changePassword(user, dto);
    }
    sessions(user) {
        return this.account.sessions(user);
    }
    revokeSession(user, id) {
        return this.account.revokeSession(user, id);
    }
    requestDeletion(user, dto, request) {
        return this.account.requestDeletion(user, dto, requestMetadata(request));
    }
};
__decorate([
    Get("me"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "me", null);
__decorate([
    Patch("profile"),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "updateProfile", null);
__decorate([
    Post("change-password"),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ChangePasswordDto]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "changePassword", null);
__decorate([
    Get("sessions"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "sessions", null);
__decorate([
    Delete("sessions/:id"),
    __param(0, CurrentUser()),
    __param(1, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "revokeSession", null);
__decorate([
    Post("request-deletion"),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __param(2, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteAccountDto, Object]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "requestDeletion", null);
AccountController = __decorate([
    Controller("account"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [AccountService])
], AccountController);
export { AccountController };
//# sourceMappingURL=account.controller.js.map