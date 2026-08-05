import { IsString, Length, Matches } from "class-validator";

export class ResetPasswordDto {
  @IsString()
  @Length(20, 500)
  token: string;

  @IsString()
  @Length(8, 128)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: "Password must include uppercase, lowercase and a number",
  })
  password: string;
}
