import { IsIn, IsOptional, IsString, MaxLength } from "class-validator";
export class UpdateIssueDto {
  @IsOptional() @IsIn(["OPEN","INVESTIGATING","FIXED","VERIFIED","CLOSED"])
  status?: "OPEN"|"INVESTIGATING"|"FIXED"|"VERIFIED"|"CLOSED";
  @IsOptional() @IsIn(["LOW","MEDIUM","HIGH","CRITICAL"])
  severity?: "LOW"|"MEDIUM"|"HIGH"|"CRITICAL";
  @IsOptional() @IsString() @MaxLength(120) assignee?: string;
  @IsOptional() @IsString() @MaxLength(4000) resolution?: string;
}
