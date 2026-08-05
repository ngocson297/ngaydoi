import { IsIn, IsOptional, IsString, MaxLength } from "class-validator";
export class CreateAnnouncementDto {
  @IsString() @MaxLength(120) title: string;
  @IsString() @MaxLength(1000) message: string;
  @IsIn(["INFO","MAINTENANCE","WARNING","RESOLVED"]) level: string;
  @IsOptional() @IsString() endsAt?: string;
}
