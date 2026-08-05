import { IsEmail, MaxLength } from "class-validator";

export class EmailDto {
  @IsEmail()
  @MaxLength(200)
  email: string;
}
