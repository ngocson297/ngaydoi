declare enum WeddingSideDto {
    SHARED = "SHARED",
    BRIDE = "BRIDE",
    GROOM = "GROOM"
}
export declare class CreateGuestDto {
    fullName: string;
    salutation?: string;
    phone?: string;
    email?: string;
    groupName?: string;
    side?: WeddingSideDto;
    invitedBy?: string;
    tableName?: string;
    maxAdultCount?: number;
    maxChildCount?: number;
    note?: string;
    tags?: string[];
    eventIds?: string[];
    greeting?: string;
}
export {};
