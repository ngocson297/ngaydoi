var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsArray, IsBoolean, IsIn, IsInt, IsISO8601, IsOptional, IsString, MaxLength, Min } from "class-validator";
export class UpsertCouponDto {
    code;
    name;
    discountType;
    discountValue;
    startsAt;
    endsAt;
    usageLimit;
    active;
    planCodes;
}
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(32),
    __metadata("design:type", String)
], UpsertCouponDto.prototype, "code", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], UpsertCouponDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsIn(["FIXED", "PERCENTAGE"]),
    __metadata("design:type", String)
], UpsertCouponDto.prototype, "discountType", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], UpsertCouponDto.prototype, "discountValue", void 0);
__decorate([
    IsOptional(),
    IsISO8601(),
    __metadata("design:type", Object)
], UpsertCouponDto.prototype, "startsAt", void 0);
__decorate([
    IsOptional(),
    IsISO8601(),
    __metadata("design:type", Object)
], UpsertCouponDto.prototype, "endsAt", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Object)
], UpsertCouponDto.prototype, "usageLimit", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpsertCouponDto.prototype, "active", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsIn(["FREE", "STARTER", "STANDARD", "PREMIUM"], { each: true }),
    __metadata("design:type", Array)
], UpsertCouponDto.prototype, "planCodes", void 0);
//# sourceMappingURL=upsert-coupon.dto.js.map