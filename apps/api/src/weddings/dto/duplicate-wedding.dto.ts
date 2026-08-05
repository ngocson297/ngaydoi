import { IsString, Length, Matches } from "class-validator";

export class DuplicateWeddingDto {
  @IsString()
  @Length(3, 80)
  title: string;

  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  @Length(3, 80)
  slug: string;
}
