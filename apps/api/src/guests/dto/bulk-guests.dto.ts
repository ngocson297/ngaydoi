import { IsArray, IsEnum, IsString } from "class-validator";

export enum BulkGuestActionDto {
  MARK_SENT = "MARK_SENT",
  REVOKE = "REVOKE",
  REGENERATE = "REGENERATE",
  ARCHIVE = "ARCHIVE",
  RESTORE = "RESTORE",
  DELETE = "DELETE",
}

export class BulkGuestsDto {
  @IsArray() @IsString({ each: true })
  guestIds: string[];

  @IsEnum(BulkGuestActionDto)
  action: BulkGuestActionDto;
}
