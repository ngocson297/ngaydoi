import { IsBoolean, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";
import { Type } from "class-transformer";

export class UpdateMediaDto {
  @IsOptional() @IsString() @MaxLength(180) altText?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(0) @Max(500) sortOrder?: number;
  @IsOptional() @Type(() => Boolean) @IsBoolean() isCover?: boolean;
}
