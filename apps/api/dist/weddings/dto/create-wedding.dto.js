var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsISO8601, IsOptional, IsString, Length, Matches } from "class-validator";
export class CreateWeddingDto {
    title;
    brideName;
    groomName;
    slug;
    mainDate;
    timezone;
}
__decorate([
    IsString(),
    Length(3, 80),
    __metadata("design:type", String)
], CreateWeddingDto.prototype, "title", void 0);
__decorate([
    IsString(),
    Length(2, 60),
    __metadata("design:type", String)
], CreateWeddingDto.prototype, "brideName", void 0);
__decorate([
    IsString(),
    Length(2, 60),
    __metadata("design:type", String)
], CreateWeddingDto.prototype, "groomName", void 0);
__decorate([
    IsString(),
    Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    Length(3, 80),
    __metadata("design:type", String)
], CreateWeddingDto.prototype, "slug", void 0);
__decorate([
    IsOptional(),
    IsISO8601(),
    __metadata("design:type", String)
], CreateWeddingDto.prototype, "mainDate", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Length(3, 80),
    __metadata("design:type", String)
], CreateWeddingDto.prototype, "timezone", void 0);
//# sourceMappingURL=create-wedding.dto.js.map