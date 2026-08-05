import { Transform } from "class-transformer";
import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

function cleanOptional({ value }: { value: unknown }): unknown {
  return typeof value === "string" && value.trim() === "" ? undefined : value;
}

export class SubmitPaymentDto {
  @IsString() @MinLength(4) @MaxLength(120)
  reference: string;

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(500)
  note?: string;

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(500)
  proofUrl?: string;
}
