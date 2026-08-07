var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Type } from "class-transformer";
import { ArrayMaxSize, IsArray, IsBoolean, IsHexColor, IsIn, IsOptional, IsString, Matches, MaxLength, ValidateNested, } from "class-validator";
import { INVITATION_TEMPLATE_KEYS } from "../invitation.constants.js";
const headingFonts = ["elegant-serif", "romantic-serif", "editorial-serif", "heritage-serif", "minimal-serif", "display-serif"];
const bodyFonts = ["clean-sans", "modern-sans", "humanist-sans", "soft-sans"];
const sectionKeys = ["hero", "family", "story", "gallery", "countdown", "events", "gift", "footer"];
export class GiftTransferAccountDto {
    id;
    side;
    label;
    mode;
    qrAssetId;
    qrImageUrl;
    bankBin;
    bankCode;
    bankName;
    accountNumber;
    accountName;
    transferNote;
}
__decorate([
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "id", void 0);
__decorate([
    IsIn(["BRIDE", "GROOM", "SHARED"]),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "side", void 0);
__decorate([
    IsString(),
    MaxLength(60),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "label", void 0);
__decorate([
    IsOptional(),
    IsIn(["UPLOAD", "VIETQR"]),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "mode", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "qrAssetId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(1000),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "qrImageUrl", void 0);
__decorate([
    Matches(/^$|^\d{6}$/),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "bankBin", void 0);
__decorate([
    IsString(),
    MaxLength(20),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "bankCode", void 0);
__decorate([
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "bankName", void 0);
__decorate([
    Matches(/^$|^\d{6,19}$/),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "accountNumber", void 0);
__decorate([
    IsString(),
    MaxLength(70),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "accountName", void 0);
__decorate([
    IsString(),
    MaxLength(25),
    __metadata("design:type", String)
], GiftTransferAccountDto.prototype, "transferNote", void 0);
export class UpdateInvitationDesignDto {
    templateKey;
    paletteKey;
    primaryColor;
    accentColor;
    backgroundColor;
    surfaceColor;
    textColor;
    headingFont;
    bodyFont;
    heroEyebrow;
    greeting;
    storyTitle;
    galleryTitle;
    eventsTitle;
    countdownTitle;
    giftTitle;
    giftMessage;
    giftAccounts;
    footerMessage;
    showHero;
    showFamily;
    showStory;
    showGallery;
    showEvents;
    showCountdown;
    showGift;
    showFooter;
    musicEnabled;
    musicUrl;
    sectionOrder;
}
__decorate([
    IsOptional(),
    IsIn(INVITATION_TEMPLATE_KEYS),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "templateKey", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(30),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "paletteKey", void 0);
__decorate([
    IsOptional(),
    IsHexColor(),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "primaryColor", void 0);
__decorate([
    IsOptional(),
    IsHexColor(),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "accentColor", void 0);
__decorate([
    IsOptional(),
    IsHexColor(),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "backgroundColor", void 0);
__decorate([
    IsOptional(),
    IsHexColor(),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "surfaceColor", void 0);
__decorate([
    IsOptional(),
    IsHexColor(),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "textColor", void 0);
__decorate([
    IsOptional(),
    IsIn(headingFonts),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "headingFont", void 0);
__decorate([
    IsOptional(),
    IsIn(bodyFonts),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "bodyFont", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "heroEyebrow", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(500),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "greeting", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "storyTitle", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "galleryTitle", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "eventsTitle", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "countdownTitle", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "giftTitle", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(500),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "giftMessage", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ArrayMaxSize(3),
    ValidateNested({ each: true }),
    Type(() => GiftTransferAccountDto),
    __metadata("design:type", Array)
], UpdateInvitationDesignDto.prototype, "giftAccounts", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(500),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "footerMessage", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateInvitationDesignDto.prototype, "showHero", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateInvitationDesignDto.prototype, "showFamily", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateInvitationDesignDto.prototype, "showStory", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateInvitationDesignDto.prototype, "showGallery", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateInvitationDesignDto.prototype, "showEvents", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateInvitationDesignDto.prototype, "showCountdown", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateInvitationDesignDto.prototype, "showGift", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateInvitationDesignDto.prototype, "showFooter", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateInvitationDesignDto.prototype, "musicEnabled", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(1000),
    __metadata("design:type", String)
], UpdateInvitationDesignDto.prototype, "musicUrl", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsIn(sectionKeys, { each: true }),
    __metadata("design:type", Array)
], UpdateInvitationDesignDto.prototype, "sectionOrder", void 0);
//# sourceMappingURL=update-invitation-design.dto.js.map