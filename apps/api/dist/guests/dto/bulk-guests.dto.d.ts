export declare enum BulkGuestActionDto {
    MARK_SENT = "MARK_SENT",
    REVOKE = "REVOKE",
    REGENERATE = "REGENERATE",
    ARCHIVE = "ARCHIVE",
    RESTORE = "RESTORE",
    DELETE = "DELETE"
}
export declare class BulkGuestsDto {
    guestIds: string[];
    action: BulkGuestActionDto;
}
