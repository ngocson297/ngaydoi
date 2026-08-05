import { IsIn, IsOptional, IsString, IsUrl, MaxLength } from "class-validator";
export class UpdateChecklistDto {
  @IsOptional() @IsIn(["NOT_STARTED","IN_PROGRESS","BLOCKED","PASSED","FAILED","WAIVED"])
  status?: "NOT_STARTED"|"IN_PROGRESS"|"BLOCKED"|"PASSED"|"FAILED"|"WAIVED";
  @IsOptional() @IsString() @MaxLength(120) owner?: string;
  @IsOptional() @IsString() @MaxLength(2000) notes?: string;
  @IsOptional() @IsUrl({ require_tld: false }) evidenceUrl?: string;
}
