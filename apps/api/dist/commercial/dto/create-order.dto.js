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
import { IsArray, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";
function cleanOptional({ value }) {
    return typeof value === "string" && value.trim() === "" ? undefined : value;
}
export class CreateOrderDto {
    weddingId;
    planCode;
    addOnCodes;
    couponCode;
    customerNote;
    quantity;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "weddingId", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "planCode", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "addOnCodes", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(40),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "couponCode", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(1000),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "customerNote", void 0);
__decorate([
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    Max(10),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "quantity", void 0);
//# sourceMappingURL=create-order.dto.js.map