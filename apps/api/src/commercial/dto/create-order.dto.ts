import { Transform, Type } from "class-transformer";
import { IsArray, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

function cleanOptional({ value }: { value: unknown }): unknown {
  return typeof value === "string" && value.trim() === "" ? undefined : value;
}

export class CreateOrderDto {
  @IsString()
  weddingId: string;

  @IsString()
  planCode: string;

  @IsOptional() @IsArray() @IsString({ each: true })
  addOnCodes?: string[];

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(40)
  couponCode?: string;

  @IsOptional() @Transform(cleanOptional) @IsString() @MaxLength(1000)
  customerNote?: string;

  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(10)
  quantity?: number;
}
