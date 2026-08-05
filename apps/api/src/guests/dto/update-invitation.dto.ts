import { Transform } from "class-transformer";
import { IsArray, IsOptional, IsString, MaxLength } from "class-validator";

function cleanNullable({ value }: { value: unknown }): unknown {
  return typeof value === "string" && value.trim() === "" ? null : value;
}

export class UpdateGuestInvitationDto {
  @IsOptional() @Transform(cleanNullable) @IsString() @MaxLength(500)
  greeting?: string | null;

  @IsOptional() @IsArray() @IsString({ each: true })
  eventIds?: string[];
}
