var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator";
export class CreateWebhookDto {
    name;
    url;
    events;
    secret;
    active;
}
__decorate([
    IsString(),
    MinLength(2),
    MaxLength(80),
    __metadata("design:type", String)
], CreateWebhookDto.prototype, "name", void 0);
__decorate([
    IsUrl({ protocols: ["http", "https"], require_protocol: true, require_tld: false }),
    MaxLength(500),
    __metadata("design:type", String)
], CreateWebhookDto.prototype, "url", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ArrayMaxSize(30),
    IsString({ each: true }),
    __metadata("design:type", Array)
], CreateWebhookDto.prototype, "events", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(16),
    MaxLength(200),
    __metadata("design:type", String)
], CreateWebhookDto.prototype, "secret", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateWebhookDto.prototype, "active", void 0);
//# sourceMappingURL=create-webhook.dto.js.map