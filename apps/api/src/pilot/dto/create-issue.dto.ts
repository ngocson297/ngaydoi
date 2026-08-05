import { IsIn, IsOptional, IsString, MaxLength } from "class-validator";
export class CreateIssueDto {
  @IsString() @MaxLength(160) title: string;
  @IsString() @MaxLength(4000) description: string;
  @IsIn(["LOW","MEDIUM","HIGH","CRITICAL"]) severity: "LOW"|"MEDIUM"|"HIGH"|"CRITICAL";
  @IsString() @MaxLength(80) area: string;
  @IsOptional() @IsString() @MaxLength(120) reporter?: string;
  @IsOptional() @IsString() @MaxLength(120) assignee?: string;
  @IsOptional() @IsString() @MaxLength(4000) reproduction?: string;
}
