import { type OnModuleDestroy, type OnModuleInit } from "@nestjs/common";
import type { Prisma } from "../generated/prisma/client.js";
import { PrismaService } from "../prisma/prisma.service.js";
export interface QueueEmailInput {
    recipient: string;
    subject: string;
    htmlBody: string;
    textBody?: string;
    templateKey?: string;
    metadata?: Prisma.InputJsonValue;
}
export declare class MailService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma;
    private readonly logger;
    private timer?;
    constructor(prisma: PrismaService);
    onModuleInit(): void;
    onModuleDestroy(): void;
    queue(input: QueueEmailInput): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").DeliveryStatus;
        createdAt: Date;
    }>;
    processPending(limit?: number): Promise<{
        processed: number;
    }>;
    retry(id: string): Promise<void>;
    summary(): Promise<{
        provider: string;
        metrics: {
            pending: number;
            delivered: number;
            failed: number;
            deadLetter: number;
        };
        recent: {
            id: string;
            status: import("../generated/prisma/enums.js").DeliveryStatus;
            createdAt: Date;
            attemptCount: number;
            lastError: string | null;
            provider: string;
            recipient: string;
            subject: string;
            sentAt: Date | null;
        }[];
    }>;
    private send;
}
