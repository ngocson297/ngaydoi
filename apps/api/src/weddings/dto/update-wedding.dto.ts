import { IsBoolean, IsISO8601, IsOptional, IsString, Length, Matches } from "class-validator";

export class UpdateWeddingDto {
  @IsOptional()
  @IsString()
  @Length(3, 80)
  title?: string;

  @IsOptional()
  @IsString()
  @Length(2, 60)
  brideName?: string;

  @IsOptional()
  @IsString()
  @Length(2, 60)
  groomName?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  @Length(3, 80)
  slug?: string;

  @IsOptional()
  @IsISO8601()
  mainDate?: string;

  @IsOptional()
  @IsString()
  @Length(3, 80)
  timezone?: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  brideFatherName?: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  brideMotherName?: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  groomFatherName?: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  groomMotherName?: string;

  @IsOptional()
  @IsBoolean()
  showBrideParents?: boolean;

  @IsOptional()
  @IsBoolean()
  showGroomParents?: boolean;

  @IsOptional()
  @IsString()
  @Length(0, 3000)
  story?: string;
}
