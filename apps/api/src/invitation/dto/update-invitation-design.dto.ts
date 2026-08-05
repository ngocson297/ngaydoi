import { IsArray, IsBoolean, IsHexColor, IsIn, IsOptional, IsString, MaxLength } from "class-validator";
import { INVITATION_TEMPLATE_KEYS } from "../invitation.constants.js";

const headingFonts = ["elegant-serif", "romantic-serif", "editorial-serif", "heritage-serif", "minimal-serif", "display-serif"];
const bodyFonts = ["clean-sans", "modern-sans", "humanist-sans", "soft-sans"];
const sectionKeys = ["hero", "family", "story", "gallery", "countdown", "events", "footer"];

export class UpdateInvitationDesignDto {
  @IsOptional() @IsIn(INVITATION_TEMPLATE_KEYS) templateKey?: string;
  @IsOptional() @IsString() @MaxLength(30) paletteKey?: string;
  @IsOptional() @IsHexColor() primaryColor?: string;
  @IsOptional() @IsHexColor() accentColor?: string;
  @IsOptional() @IsHexColor() backgroundColor?: string;
  @IsOptional() @IsHexColor() surfaceColor?: string;
  @IsOptional() @IsHexColor() textColor?: string;
  @IsOptional() @IsIn(headingFonts) headingFont?: string;
  @IsOptional() @IsIn(bodyFonts) bodyFont?: string;
  @IsOptional() @IsString() @MaxLength(120) heroEyebrow?: string;
  @IsOptional() @IsString() @MaxLength(500) greeting?: string;
  @IsOptional() @IsString() @MaxLength(120) storyTitle?: string;
  @IsOptional() @IsString() @MaxLength(120) galleryTitle?: string;
  @IsOptional() @IsString() @MaxLength(120) eventsTitle?: string;
  @IsOptional() @IsString() @MaxLength(120) countdownTitle?: string;
  @IsOptional() @IsString() @MaxLength(500) footerMessage?: string;
  @IsOptional() @IsBoolean() showHero?: boolean;
  @IsOptional() @IsBoolean() showFamily?: boolean;
  @IsOptional() @IsBoolean() showStory?: boolean;
  @IsOptional() @IsBoolean() showGallery?: boolean;
  @IsOptional() @IsBoolean() showEvents?: boolean;
  @IsOptional() @IsBoolean() showCountdown?: boolean;
  @IsOptional() @IsBoolean() showFooter?: boolean;
  @IsOptional() @IsBoolean() musicEnabled?: boolean;
  @IsOptional() @IsString() @MaxLength(1000) musicUrl?: string;
  @IsOptional() @IsArray() @IsIn(sectionKeys, { each: true }) sectionOrder?: string[];
}
