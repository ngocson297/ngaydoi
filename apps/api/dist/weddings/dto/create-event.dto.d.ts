declare const EVENT_TYPES: readonly ["ENGAGEMENT", "ANCESTOR_CEREMONY", "WEDDING_CEREMONY", "RECEPTION", "OTHER"];
declare const WEDDING_SIDES: readonly ["SHARED", "BRIDE", "GROOM"];
export declare class CreateEventDto {
    type: (typeof EVENT_TYPES)[number];
    side: (typeof WEDDING_SIDES)[number];
    title: string;
    startsAt: string;
    endsAt?: string;
    timezone?: string;
    venueName: string;
    address: string;
    mapUrl?: string;
    dressCode?: string;
    note?: string;
    sortOrder?: number;
}
export {};
