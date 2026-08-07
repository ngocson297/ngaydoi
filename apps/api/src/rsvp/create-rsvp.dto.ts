import { IsArray, IsBoolean, IsEnum, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

enum RsvpStatusDto {
  ATTENDING = "ATTENDING",
  DECLINED = "DECLINED",
  MAYBE = "MAYBE",
}

export class CreateRsvpDto {
  @IsEnum(RsvpStatusDto)
  status: RsvpStatusDto;

  @IsInt() @Min(0) @Max(20)
  adultCount: number;

  @IsInt() @Min(0) @Max(20)
  childCount: number;

  @IsInt() @Min(0) @Max(20)
  vegetarianCount: number;

  @IsBoolean()
  needsTransport: boolean;

  @IsArray() @IsString({ each: true })
  selectedEventIds: string[];

  @IsOptional() @IsString() @MaxLength(1000)
  message?: string;

  @IsOptional() @IsBoolean()
  publishWish?: boolean;
}
