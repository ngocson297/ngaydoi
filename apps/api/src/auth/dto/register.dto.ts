import { IsEmail, IsOptional, IsString, Length, Matches, MaxLength } from "class-validator";

export class RegisterDto {
  @IsEmail()
  @MaxLength(200)
  email: string;

  @IsString()
  @Length(2, 80)
  displayName: string;

  @IsString()
  @Length(8, 128)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: "Password must include uppercase, lowercase and a number",
  })
  password: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  @Matches(/^\/(?!\/)/, { message: "Return path must be an internal application path" })
  returnPath?: string;
}
