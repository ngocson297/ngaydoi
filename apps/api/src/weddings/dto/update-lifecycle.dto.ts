import { IsIn } from "class-validator";

const WEDDING_STATUSES = ["DRAFT", "READY_FOR_REVIEW", "PUBLISHED", "SUSPENDED", "EXPIRED", "ARCHIVED"] as const;

export class UpdateLifecycleDto {
  @IsIn(WEDDING_STATUSES)
  status: (typeof WEDDING_STATUSES)[number];
}
