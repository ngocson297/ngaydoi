import { IsArray, IsEnum, IsObject } from "class-validator";

enum ImportModeDto {
  SKIP = "SKIP",
  UPDATE = "UPDATE",
}

export class ImportGuestsDto {
  @IsArray() @IsObject({ each: true })
  rows: Array<Record<string, unknown>>;

  @IsEnum(ImportModeDto)
  duplicateMode: ImportModeDto;
}
