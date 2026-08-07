var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsIn } from "class-validator";
const WEDDING_STATUSES = ["DRAFT", "READY_FOR_REVIEW", "PUBLISHED", "SUSPENDED", "EXPIRED", "ARCHIVED"];
export class UpdateLifecycleDto {
    status;
}
__decorate([
    IsIn(WEDDING_STATUSES),
    __metadata("design:type", Object)
], UpdateLifecycleDto.prototype, "status", void 0);
//# sourceMappingURL=update-lifecycle.dto.js.map