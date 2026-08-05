import { IsIn, IsOptional, IsString, MaxLength } from "class-validator";

export class PublishReviewDto {
  @IsIn(["APPROVE", "CHANGES_REQUESTED", "REJECT", "SUSPEND"])
  decision: "APPROVE" | "CHANGES_REQUESTED" | "REJECT" | "SUSPEND";

  @IsOptional() @IsString() @MaxLength(1000)
  note?: string;
}
