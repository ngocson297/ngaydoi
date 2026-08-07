import { EnvironmentService } from "../common/config/environment.service.js";
import { StorageService } from "../common/storage/storage.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailService } from "./mail.service.js";
import { WebhookService } from "./webhook.service.js";
export declare class SystemHealthService {
    private readonly prisma;
    private readonly environment;
    private readonly storage;
    private readonly mail;
    private readonly webhooks;
    constructor(prisma: PrismaService, environment: EnvironmentService, storage: StorageService, mail: MailService, webhooks: WebhookService);
    live(): {
        status: string;
        service: string;
        version: string;
        release: string;
        uptimeSeconds: number;
        timestamp: string;
    };
    ready(): Promise<{
        status: string;
        checks: {
            database: {
                ok: boolean;
                latencyMs?: number;
                detail: string;
            };
            storage: {
                provider: string;
                ok: boolean;
                detail: string;
            };
            configuration: {
                ok: boolean;
            };
        };
        durationMs: number;
        timestamp: string;
    }>;
    publicStatus(): Promise<{
        status: string;
        services: {
            website: string;
            api: string;
            database: string;
            media: string;
        };
        updatedAt: string;
    }>;
    adminOverview(): Promise<{
        live: {
            status: string;
            service: string;
            version: string;
            release: string;
            uptimeSeconds: number;
            timestamp: string;
        };
        readiness: {
            status: string;
            checks: {
                database: {
                    ok: boolean;
                    latencyMs?: number;
                    detail: string;
                };
                storage: {
                    provider: string;
                    ok: boolean;
                    detail: string;
                };
                configuration: {
                    ok: boolean;
                };
            };
            durationMs: number;
            timestamp: string;
        };
        environment: import("../common/config/environment.service.js").EnvironmentCheck[];
        mail: {
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
        };
        webhooks: {
            metrics: {
                endpoints: number;
                pending: number;
                delivered: number;
                failed: number;
                deadLetter: number;
            };
        };
        database: {
            sizeBytes: number;
            sizeLabel: string;
        };
        runtime: {
            node: string;
            platform: string;
            rssMb: number;
            heapUsedMb: number;
            jobRunnerEnabled: boolean;
        };
    }>;
    private databaseSize;
    private bytes;
}
