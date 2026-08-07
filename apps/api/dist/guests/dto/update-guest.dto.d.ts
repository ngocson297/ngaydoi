declare enum WeddingSideDto {
    SHARED = "SHARED",
    BRIDE = "BRIDE",
    GROOM = "GROOM"
}
export declare class UpdateGuestDto {
    fullName?: string;
    salutation?: string | null;
    phone?: string | null;
    email?: string | null;
    groupName?: string | null;
    side?: WeddingSideDto;
    invitedBy?: string | null;
    tableName?: string | null;
    maxAdultCount?: number;
    maxChildCount?: number;
    note?: string | null;
    tags?: string[];
    eventIds?: string[];
    greeting?: string | null;
}
export {};
