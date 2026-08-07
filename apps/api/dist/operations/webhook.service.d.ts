import { type OnModuleDestroy, type OnModuleInit } from "@nestjs/common";
import type { Prisma } from "../generated/prisma/client.js";
import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateWebhookDto } from "./dto/create-webhook.dto.js";
export declare class WebhookService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma;
    private readonly logger;
    private timer?;
    constructor(prisma: PrismaService);
    onModuleInit(): void;
    onModuleDestroy(): void;
    create(dto: CreateWebhookDto): Promise<{
        signingSecret: string;
        id: string;
        name: string;
        url: string;
        events: string[];
        active: boolean;
        failureCount: number;
        lastDeliveredAt: Date | null;
        lastFailedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deliveryCount: number | undefined;
    }>;
    list(): Promise<{
        id: string;
        name: string;
        url: string;
        events: string[];
        active: boolean;
        failureCount: number;
        lastDeliveredAt: Date | null;
        lastFailedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deliveryCount: number | undefined;
    }[]>;
    remove(id: string): Promise<{
        success: true;
    }>;
    toggle(id: string, active: boolean): Promise<{
        id: string;
        name: string;
        url: string;
        events: string[];
        active: boolean;
        failureCount: number;
        lastDeliveredAt: Date | null;
        lastFailedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deliveryCount: number | undefined;
    }>;
    emit(eventType: string, data: Prisma.InputJsonValue, eventId?: `${string}-${string}-${string}-${string}-${string}`): Promise<{
        queued: number;
        eventId: string;
    }>;
    test(id: string): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").DeliveryStatus;
        responseStatus: number | null;
        lastError: string | null;
        deliveredAt: Date | null;
    } | null>;
    deliveries(endpointId?: string): Promise<({
        endpoint: {
            name: string;
            url: string;
        };
    } & {
        payload: import("@prisma/client/runtime/client").JsonValue;
        id: string;
        status: import("../generated/prisma/enums.js").DeliveryStatus;
        createdAt: Date;
        updatedAt: Date;
        eventId: string;
        eventType: string;
        attemptCount: number;
        nextAttemptAt: Date;
        responseStatus: number | null;
        responseBody: string | null;
        lastError: string | null;
        deliveredAt: Date | null;
        endpointId: string;
    })[]>;
    retry(deliveryId: string): Promise<void>;
    processPending(limit?: number, endpointId?: string): Promise<{
        processed: number;
    }>;
    summary(): Promise<{
        metrics: {
            endpoints: number;
            pending: number;
            delivered: number;
            failed: number;
            deadLetter: number;
        };
    }>;
    private publicEndpoint;
    private key;
    private encrypt;
    private decrypt;
}
