import { CreateRsvpDto } from "./create-rsvp.dto.js";
import { RsvpService } from "./rsvp.service.js";
export declare class RsvpController {
    private readonly rsvpService;
    constructor(rsvpService: RsvpService);
    submit(token: string, dto: CreateRsvpDto): Promise<{
        success: boolean;
        message: string;
        rsvp: {
            selectedEventIds: string[];
            selectedEvents: undefined;
            id: string;
            status: import("../generated/prisma/enums.js").RsvpStatus;
            updatedAt: Date;
            message: string | null;
            eventId: string | null;
            invitationId: string;
            adultCount: number;
            childCount: number;
            vegetarianCount: number;
            needsTransport: boolean;
            publishWish: boolean;
            respondedAt: Date;
        } | null;
    }>;
}
