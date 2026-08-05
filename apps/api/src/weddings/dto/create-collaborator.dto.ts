import { IsEmail, IsIn } from "class-validator";

const PERMISSIONS = ["VIEW", "EDIT"] as const;

export class CreateCollaboratorDto {
  @IsEmail()
  email: string;

  @IsIn(PERMISSIONS)
  permission: (typeof PERMISSIONS)[number];
}
