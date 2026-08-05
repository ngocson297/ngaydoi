import { IsString, Length } from "class-validator";

export class TokenDto {
  @IsString()
  @Length(20, 500)
  token: string;
}
