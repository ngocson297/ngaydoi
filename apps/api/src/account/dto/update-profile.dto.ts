import { IsOptional, IsString, IsUrl, Length, MaxLength } from "class-validator";

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @Length(2, 80)
  displayName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string;

  @IsOptional()
  @IsUrl({ require_protocol: true })
  @MaxLength(500)
  avatarUrl?: string;
}
