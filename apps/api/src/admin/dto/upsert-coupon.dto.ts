import { IsArray, IsBoolean, IsIn, IsInt, IsISO8601, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class UpsertCouponDto {
  @IsOptional() @IsString() @MaxLength(32)
  code?: string;

  @IsOptional() @IsString() @MaxLength(120)
  name?: string;

  @IsOptional() @IsIn(["FIXED", "PERCENTAGE"])
  discountType?: "FIXED" | "PERCENTAGE";

  @IsOptional() @IsInt() @Min(1)
  discountValue?: number;

  @IsOptional() @IsISO8601()
  startsAt?: string | null;

  @IsOptional() @IsISO8601()
  endsAt?: string | null;

  @IsOptional() @IsInt() @Min(1)
  usageLimit?: number | null;

  @IsOptional() @IsBoolean()
  active?: boolean;

  @IsOptional() @IsArray() @IsIn(["FREE", "STARTER", "STANDARD", "PREMIUM"], { each: true })
  planCodes?: Array<"FREE" | "STARTER" | "STANDARD" | "PREMIUM">;
}
