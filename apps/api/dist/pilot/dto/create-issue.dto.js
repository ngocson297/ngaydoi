var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsIn, IsOptional, IsString, MaxLength } from "class-validator";
export class CreateIssueDto {
    title;
    description;
    severity;
    area;
    reporter;
    assignee;
    reproduction;
}
__decorate([
    IsString(),
    MaxLength(160),
    __metadata("design:type", String)
], CreateIssueDto.prototype, "title", void 0);
__decorate([
    IsString(),
    MaxLength(4000),
    __metadata("design:type", String)
], CreateIssueDto.prototype, "description", void 0);
__decorate([
    IsIn(["LOW", "MEDIUM", "HIGH", "CRITICAL"]),
    __metadata("design:type", String)
], CreateIssueDto.prototype, "severity", void 0);
__decorate([
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], CreateIssueDto.prototype, "area", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], CreateIssueDto.prototype, "reporter", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], CreateIssueDto.prototype, "assignee", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(4000),
    __metadata("design:type", String)
], CreateIssueDto.prototype, "reproduction", void 0);
//# sourceMappingURL=create-issue.dto.js.map