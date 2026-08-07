var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsArray, IsBoolean, IsEnum, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";
var RsvpStatusDto;
(function (RsvpStatusDto) {
    RsvpStatusDto["ATTENDING"] = "ATTENDING";
    RsvpStatusDto["DECLINED"] = "DECLINED";
    RsvpStatusDto["MAYBE"] = "MAYBE";
})(RsvpStatusDto || (RsvpStatusDto = {}));
export class CreateRsvpDto {
    status;
    adultCount;
    childCount;
    vegetarianCount;
    needsTransport;
    selectedEventIds;
    message;
    publishWish;
}
__decorate([
    IsEnum(RsvpStatusDto),
    __metadata("design:type", String)
], CreateRsvpDto.prototype, "status", void 0);
__decorate([
    IsInt(),
    Min(0),
    Max(20),
    __metadata("design:type", Number)
], CreateRsvpDto.prototype, "adultCount", void 0);
__decorate([
    IsInt(),
    Min(0),
    Max(20),
    __metadata("design:type", Number)
], CreateRsvpDto.prototype, "childCount", void 0);
__decorate([
    IsInt(),
    Min(0),
    Max(20),
    __metadata("design:type", Number)
], CreateRsvpDto.prototype, "vegetarianCount", void 0);
__decorate([
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateRsvpDto.prototype, "needsTransport", void 0);
__decorate([
    IsArray(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], CreateRsvpDto.prototype, "selectedEventIds", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(1000),
    __metadata("design:type", String)
], CreateRsvpDto.prototype, "message", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateRsvpDto.prototype, "publishWish", void 0);
//# sourceMappingURL=create-rsvp.dto.js.map