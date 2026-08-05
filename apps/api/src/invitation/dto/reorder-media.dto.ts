import { ArrayMaxSize, IsArray, IsString } from "class-validator";

export class ReorderMediaDto {
  @IsArray() @ArrayMaxSize(60) @IsString({ each: true }) mediaIds!: string[];
}
