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
function cleanNullable({ value }) {
    return typeof value === "string" && value.trim() === "" ? null : value;
}
export class UpdateGuestDto {
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
    IsOptional(),
    IsString(),
    MaxLength(160),
    __metadata("design:type", String)
], UpdateGuestDto.prototype, "fullName", void 0);
__decorate([
    IsOptional(),
    Transform(cleanNullable),
    IsString(),
    MaxLength(60),
    __metadata("design:type", Object)
], UpdateGuestDto.prototype, "salutation", void 0);
__decorate([
    IsOptional(),
    Transform(cleanNullable),
    IsString(),
    MaxLength(30),
    __metadata("design:type", Object)
], UpdateGuestDto.prototype, "phone", void 0);
__decorate([
    IsOptional(),
    Transform(cleanNullable),
    IsEmail(),
    MaxLength(190),
    __metadata("design:type", Object)
], UpdateGuestDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    Transform(cleanNullable),
    IsString(),
    MaxLength(100),
    __metadata("design:type", Object)
], UpdateGuestDto.prototype, "groupName", void 0);
__decorate([
    IsOptional(),
    IsEnum(WeddingSideDto),
    __metadata("design:type", String)
], UpdateGuestDto.prototype, "side", void 0);
__decorate([
    IsOptional(),
    Transform(cleanNullable),
    IsString(),
    MaxLength(100),
    __metadata("design:type", Object)
], UpdateGuestDto.prototype, "invitedBy", void 0);
__decorate([
    IsOptional(),
    Transform(cleanNullable),
    IsString(),
    MaxLength(80),
    __metadata("design:type", Object)
], UpdateGuestDto.prototype, "tableName", void 0);
__decorate([
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    Max(20),
    __metadata("design:type", Number)
], UpdateGuestDto.prototype, "maxAdultCount", void 0);
__decorate([
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(0),
    Max(20),
    __metadata("design:type", Number)
], UpdateGuestDto.prototype, "maxChildCount", void 0);
__decorate([
    IsOptional(),
    Transform(cleanNullable),
    IsString(),
    MaxLength(1000),
    __metadata("design:type", Object)
], UpdateGuestDto.prototype, "note", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    MaxLength(40, { each: true }),
    __metadata("design:type", Array)
], UpdateGuestDto.prototype, "tags", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], UpdateGuestDto.prototype, "eventIds", void 0);
__decorate([
    IsOptional(),
    Transform(cleanNullable),
    IsString(),
    MaxLength(500),
    __metadata("design:type", Object)
], UpdateGuestDto.prototype, "greeting", void 0);
//# sourceMappingURL=update-guest.dto.js.map