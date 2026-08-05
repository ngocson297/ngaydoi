import { IsIn, IsISO8601, IsInt, IsOptional, IsString, IsUrl, Length, Max, Min } from "class-validator";

const EVENT_TYPES = ["ENGAGEMENT", "ANCESTOR_CEREMONY", "WEDDING_CEREMONY", "RECEPTION", "OTHER"] as const;
const WEDDING_SIDES = ["SHARED", "BRIDE", "GROOM"] as const;

export class CreateEventDto {
  @IsIn(EVENT_TYPES)
  type: (typeof EVENT_TYPES)[number];

  @IsIn(WEDDING_SIDES)
  side: (typeof WEDDING_SIDES)[number];

  @IsString()
  @Length(2, 120)
  title: string;

  @IsISO8601()
  startsAt: string;

  @IsOptional()
  @IsISO8601()
  endsAt?: string;

  @IsOptional()
  @IsString()
  @Length(3, 80)
  timezone?: string;

  @IsString()
  @Length(2, 180)
  venueName: string;

  @IsString()
  @Length(3, 300)
  address: string;

  @IsOptional()
  @IsUrl({ require_protocol: true })
  mapUrl?: string;

  @IsOptional()
  @IsString()
  @Length(0, 160)
  dressCode?: string;

  @IsOptional()
  @IsString()
  @Length(0, 1000)
  note?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(999)
  sortOrder?: number;
}
