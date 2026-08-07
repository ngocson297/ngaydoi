import { CreateWebhookDto } from "./dto/create-webhook.dto.js";
import { ToggleWebhookDto } from "./dto/toggle-webhook.dto.js";
import { MailService } from "./mail.service.js";
import { SystemHealthService } from "./system-health.service.js";
import { WebhookService } from "./webhook.service.js";
export declare class OperationsController {
    private readonly health;
    private readonly mail;
    private readonly webhooks;
    constructor(health: SystemHealthService, mail: MailService, webhooks: WebhookService);
    overview(): Promise<{
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
    emails(): Promise<{
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
    processEmails(): Promise<{
        processed: number;
    }>;
    retryEmail(id: string): Promise<{
        success: boolean;
    }>;
    webhooksList(): Promise<{
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
    createWebhook(dto: CreateWebhookDto): Promise<{
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
    deleteWebhook(id: string): Promise<{
        success: true;
    }>;
    toggleWebhook(id: string, dto: ToggleWebhookDto): Promise<{
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
    testWebhook(id: string): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").DeliveryStatus;
        responseStatus: number | null;
        lastError: string | null;
        deliveredAt: Date | null;
    } | null>;
    webhookDeliveries(endpointId?: string): Promise<({
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
    retryWebhook(id: string): Promise<{
        success: boolean;
    }>;
    processWebhooks(): Promise<{
        processed: number;
    }>;
}
