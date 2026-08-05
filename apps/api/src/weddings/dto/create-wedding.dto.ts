import { IsISO8601, IsOptional, IsString, Length, Matches } from "class-validator";

export class CreateWeddingDto {
  @IsString()
  @Length(3, 80)
  title: string;

  @IsString()
  @Length(2, 60)
  brideName: string;

  @IsString()
  @Length(2, 60)
  groomName: string;

  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  @Length(3, 80)
  slug: string;

  @IsOptional()
  @IsISO8601()
  mainDate?: string;

  @IsOptional()
  @IsString()
  @Length(3, 80)
  timezone?: string;
}
