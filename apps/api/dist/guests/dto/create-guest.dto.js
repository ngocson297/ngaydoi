var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Type } from "class-transformer";
import { IsArray, IsEmail, IsEnum, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";
var WeddingSideDto;
(function (WeddingSideDto) {
    WeddingSideDto["SHARED"] = "SHARED";
    WeddingSideDto["BRIDE"] = "BRIDE";
    WeddingSideDto["GROOM"] = "GROOM";
})(WeddingSideDto || (WeddingSideDto = {}));
function cleanOptional({ value }) {
    return typeof value === "string" && value.trim() === "" ? undefined : value;
}
export class CreateGuestDto {
    fullName;
    salutation;
    phone;
    email;
    groupName;
    side;
    invitedBy;
    tableName;
    maxAdultCount;
    maxChildCount;
    note;
    tags;
    eventIds;
    greeting;
}
__decorate([
    IsString(),
    MaxLength(160),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "fullName", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(60),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "salutation", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(30),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "phone", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsEmail(),
    MaxLength(190),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(100),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "groupName", void 0);
__decorate([
    IsOptional(),
    IsEnum(WeddingSideDto),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "side", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(100),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "invitedBy", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "tableName", void 0);
__decorate([
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    Max(20),
    __metadata("design:type", Number)
], CreateGuestDto.prototype, "maxAdultCount", void 0);
__decorate([
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(0),
    Max(20),
    __metadata("design:type", Number)
], CreateGuestDto.prototype, "maxChildCount", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(1000),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "note", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    MaxLength(40, { each: true }),
    __metadata("design:type", Array)
], CreateGuestDto.prototype, "tags", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], CreateGuestDto.prototype, "eventIds", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(500),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "greeting", void 0);
//# sourceMappingURL=create-guest.dto.js.map