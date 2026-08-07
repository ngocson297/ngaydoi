declare enum ImportModeDto {
    SKIP = "SKIP",
    UPDATE = "UPDATE"
}
export declare class ImportGuestsDto {
    rows: Array<Record<string, unknown>>;
    duplicateMode: ImportModeDto;
}
export {};
