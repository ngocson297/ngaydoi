import { IsString, Length, Matches } from "class-validator";

export class ChangePasswordDto {
  @IsString()
  @Length(8, 128)
  currentPassword: string;

  @IsString()
  @Length(8, 128)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: "New password must include uppercase, lowercase and a number",
  })
  newPassword: string;
}
