import { Transform, Type } from "class-transformer";
import { IsArray, IsEmail, IsEnum, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

enum WeddingSideDto {
  SHARED = "SHARED",
  BRIDE = "BRIDE",
  GROOM = "GROOM",
}

function cleanNullable({ value }: { value: unknown }): unknown {
  return typeof value === "string" && value.trim() === "" ? null : value;
}

export class UpdateGuestDto {
  @IsOptional() @IsString() @MaxLength(160)
  fullName?: string;

  @IsOptional() @Transform(cleanNullable) @IsString() @MaxLength(60)
  salutation?: string | null;

  @IsOptional() @Transform(cleanNullable) @IsString() @MaxLength(30)
  phone?: string | null;

  @IsOptional() @Transform(cleanNullable) @IsEmail() @MaxLength(190)
  email?: string | null;

  @IsOptional() @Transform(cleanNullable) @IsString() @MaxLength(100)
  groupName?: string | null;

  @IsOptional() @IsEnum(WeddingSideDto)
  side?: WeddingSideDto;

  @IsOptional() @Transform(cleanNullable) @IsString() @MaxLength(100)
  invitedBy?: string | null;

  @IsOptional() @Transform(cleanNullable) @IsString() @MaxLength(80)
  tableName?: string | null;

  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(20)
  maxAdultCount?: number;

  @IsOptional() @Type(() => Number) @IsInt() @Min(0) @Max(20)
  maxChildCount?: number;

  @IsOptional() @Transform(cleanNullable) @IsString() @MaxLength(1000)
  note?: string | null;

  @IsOptional() @IsArray() @IsString({ each: true }) @MaxLength(40, { each: true })
  tags?: string[];

  @IsOptional() @IsArray() @IsString({ each: true })
  eventIds?: string[];

  @IsOptional() @Transform(cleanNullable) @IsString() @MaxLength(500)
  greeting?: string | null;
}
