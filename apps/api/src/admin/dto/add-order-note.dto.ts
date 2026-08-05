import { IsIn, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class AddOrderNoteDto {
  @IsString() @MinLength(2) @MaxLength(1000)
  body: string;

  @IsOptional() @IsIn(["INTERNAL", "CUSTOMER"])
  visibility?: "INTERNAL" | "CUSTOMER";
}
