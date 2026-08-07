declare enum RsvpStatusDto {
    ATTENDING = "ATTENDING",
    DECLINED = "DECLINED",
    MAYBE = "MAYBE"
}
export declare class CreateRsvpDto {
    status: RsvpStatusDto;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: boolean;
    selectedEventIds: string[];
    message?: string;
    publishWish?: boolean;
}
export {};
