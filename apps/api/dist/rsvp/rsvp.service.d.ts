import { RateLimitService } from "../auth/rate-limit.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { WebhookService } from "../operations/webhook.service.js";
import { CreateRsvpDto } from "./create-rsvp.dto.js";
export declare class RsvpService {
    private readonly prisma;
    private readonly rateLimit;
    private readonly webhooks;
    constructor(prisma: PrismaService, rateLimit: RateLimitService, webhooks: WebhookService);
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
