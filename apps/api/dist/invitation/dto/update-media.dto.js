var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";
import { Type } from "class-transformer";
export class UpdateMediaDto {
    altText;
    sortOrder;
    isCover;
}
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(180),
    __metadata("design:type", String)
], UpdateMediaDto.prototype, "altText", void 0);
__decorate([
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(0),
    Max(500),
    __metadata("design:type", Number)
], UpdateMediaDto.prototype, "sortOrder", void 0);
__decorate([
    IsOptional(),
    Type(() => Boolean),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateMediaDto.prototype, "isCover", void 0);
//# sourceMappingURL=update-media.dto.js.map