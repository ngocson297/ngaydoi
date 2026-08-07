var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsArray, IsEnum, IsObject } from "class-validator";
var ImportModeDto;
(function (ImportModeDto) {
    ImportModeDto["SKIP"] = "SKIP";
    ImportModeDto["UPDATE"] = "UPDATE";
})(ImportModeDto || (ImportModeDto = {}));
export class ImportGuestsDto {
    rows;
    duplicateMode;
}
__decorate([
    IsArray(),
    IsObject({ each: true }),
    __metadata("design:type", Array)
], ImportGuestsDto.prototype, "rows", void 0);
__decorate([
    IsEnum(ImportModeDto),
    __metadata("design:type", String)
], ImportGuestsDto.prototype, "duplicateMode", void 0);
//# sourceMappingURL=import-guests.dto.js.map