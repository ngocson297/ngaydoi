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
import { Body, Controller, Param, Post } from "@nestjs/common";
import { CreateRsvpDto } from "./create-rsvp.dto.js";
import { RsvpService } from "./rsvp.service.js";
let RsvpController = class RsvpController {
    rsvpService;
    constructor(rsvpService) {
        this.rsvpService = rsvpService;
    }
    submit(token, dto) {
        return this.rsvpService.submit(token, dto);
    }
};
__decorate([
    Post(":token"),
    __param(0, Param("token")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateRsvpDto]),
    __metadata("design:returntype", void 0)
], RsvpController.prototype, "submit", null);
RsvpController = __decorate([
    Controller("rsvp"),
    __metadata("design:paramtypes", [RsvpService])
], RsvpController);
export { RsvpController };
//# sourceMappingURL=rsvp.controller.js.map