import { IsOptional, IsString, MaxLength } from "class-validator";

export class CreateVersionDto {
  @IsOptional() @IsString() @MaxLength(80) reason?: string;
}
