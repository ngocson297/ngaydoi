var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform } from "class-transformer";
import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";
function cleanOptional({ value }) {
    return typeof value === "string" && value.trim() === "" ? undefined : value;
}
export class SubmitPaymentDto {
    reference;
    note;
    proofUrl;
}
__decorate([
    IsString(),
    MinLength(4),
    MaxLength(120),
    __metadata("design:type", String)
], SubmitPaymentDto.prototype, "reference", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(500),
    __metadata("design:type", String)
], SubmitPaymentDto.prototype, "note", void 0);
__decorate([
    IsOptional(),
    Transform(cleanOptional),
    IsString(),
    MaxLength(500),
    __metadata("design:type", String)
], SubmitPaymentDto.prototype, "proofUrl", void 0);
//# sourceMappingURL=submit-payment.dto.js.map