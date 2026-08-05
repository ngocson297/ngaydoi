import { Transform } from "class-transformer";
import { IsOptional, IsString, MaxLength } from "class-validator";

function cleanOptional({ value }: { value: unknown }): unknown {
  return typeof value === "string" && value.trim() === "" ? undefined : value;
}

export class ReviewPaymentDto {
  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(500)
  note?: string;
}
