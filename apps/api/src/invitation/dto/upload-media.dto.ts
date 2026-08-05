import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

export class UploadMediaDto {
  @IsOptional() @IsString() @MaxLength(180) altText?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(8000) width?: number;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(8000) height?: number;
}
