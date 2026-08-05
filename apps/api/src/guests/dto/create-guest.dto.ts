import { Transform, Type } from "class-transformer";
import { IsArray, IsEmail, IsEnum, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

enum WeddingSideDto {
  SHARED = "SHARED",
  BRIDE = "BRIDE",
  GROOM = "GROOM",
}

function cleanOptional({ value }: { value: unknown }): unknown {
  return typeof value === "string" && value.trim() === "" ? undefined : value;
}

export class CreateGuestDto {
  @IsString() @MaxLength(160)
  fullName: string;

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(60)
  salutation?: string;

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(30)
  phone?: string;

  @IsOptional() @Transform(cleanOptional) @IsEmail() @MaxLength(190)
  email?: string;

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(100)
  groupName?: string;

  @IsOptional() @IsEnum(WeddingSideDto)
  side?: WeddingSideDto;

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(100)
  invitedBy?: string;

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(80)
  tableName?: string;

  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(20)
  maxAdultCount?: number;

  @IsOptional() @Type(() => Number) @IsInt() @Min(0) @Max(20)
  maxChildCount?: number;

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(1000)
  note?: string;

  @IsOptional() @IsArray() @IsString({ each: true }) @MaxLength(40, { each: true })
  tags?: string[];

  @IsOptional() @IsArray() @IsString({ each: true })
  eventIds?: string[];

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(500)
  greeting?: string;
}
