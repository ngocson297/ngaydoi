var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsIn, IsISO8601, IsInt, IsOptional, IsString, IsUrl, Length, Max, Min } from "class-validator";
const EVENT_TYPES = ["ENGAGEMENT", "ANCESTOR_CEREMONY", "WEDDING_CEREMONY", "RECEPTION", "OTHER"];
const WEDDING_SIDES = ["SHARED", "BRIDE", "GROOM"];
export class UpdateEventDto {
    type;
    side;
    title;
    startsAt;
    endsAt;
    timezone;
    venueName;
    address;
    mapUrl;
    dressCode;
    note;
    sortOrder;
}
__decorate([
    IsOptional(),
    IsIn(EVENT_TYPES),
    __metadata("design:type", Object)
], UpdateEventDto.prototype, "type", void 0);
__decorate([
    IsOptional(),
    IsIn(WEDDING_SIDES),
    __metadata("design:type", Object)
], UpdateEventDto.prototype, "side", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Length(2, 120),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "title", void 0);
__decorate([
    IsOptional(),
    IsISO8601(),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "startsAt", void 0);
__decorate([
    IsOptional(),
    IsISO8601(),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "endsAt", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Length(3, 80),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "timezone", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Length(2, 180),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "venueName", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Length(3, 300),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "address", void 0);
__decorate([
    IsOptional(),
    IsUrl({ require_protocol: true }),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "mapUrl", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Length(0, 160),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "dressCode", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Length(0, 1000),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "note", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(0),
    Max(999),
    __metadata("design:type", Number)
], UpdateEventDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=update-event.dto.js.map