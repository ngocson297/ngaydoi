import { type OnModuleDestroy, type OnModuleInit } from "@nestjs/common";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { MailService } from "../operations/mail.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
export declare class PlanningService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma;
    private readonly mail;
    private readonly logger;
    private timer?;
    constructor(prisma: PrismaService, mail: MailService);
    onModuleInit(): void;
    onModuleDestroy(): void;
    private access;
    overview(weddingId: string, user: AuthenticatedUser): Promise<unknown>;
    bootstrap(weddingId: string, user: AuthenticatedUser): Promise<{
        created: number;
        skipped: number;
    }>;
    create(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    update(weddingId: string, taskId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    remove(weddingId: string, taskId: string, user: AuthenticatedUser): Promise<{
        deleted: true;
    }>;
    processReminders(): Promise<{
        processed: number;
    }>;
}
