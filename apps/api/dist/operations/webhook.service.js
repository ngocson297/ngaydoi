var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WebhookService_1;
import { createCipheriv, createDecipheriv, createHash, createHmac, randomBytes, randomUUID } from "node:crypto";
import { BadRequestException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
let WebhookService = WebhookService_1 = class WebhookService {
    prisma;
    logger = new Logger(WebhookService_1.name);
    timer;
    constructor(prisma) {
        this.prisma = prisma;
    }
    onModuleInit() {
        if (process.env.JOB_RUNNER_ENABLED === "false")
            return;
        this.timer = setInterval(() => void this.processPending(), Number(process.env.JOB_POLL_INTERVAL_MS ?? 10_000));
        this.timer.unref();
        setTimeout(() => void this.processPending(), 1000).unref();
    }
    onModuleDestroy() {
        if (this.timer)
            clearInterval(this.timer);
    }
    async create(dto) {
        const url = new URL(dto.url);
        if (process.env.NODE_ENV === "production" && url.protocol !== "https:")
            throw new BadRequestException("Production webhook URLs must use HTTPS");
        const secret = dto.secret?.trim() || randomBytes(32).toString("hex");
        const endpoint = await this.prisma.webhookEndpoint.create({
            data: {
                name: dto.name.trim(),
                url: url.toString(),
                events: [...new Set(dto.events.map((event) => event.trim()).filter(Boolean))],
                secretCiphertext: this.encrypt(secret),
                active: dto.active ?? true,
            },
        });
        return { ...this.publicEndpoint(endpoint), signingSecret: secret };
    }
    async list() {
        const endpoints = await this.prisma.webhookEndpoint.findMany({ orderBy: { createdAt: "desc" }, include: { _count: { select: { deliveries: true } } } });
        return endpoints.map((endpoint) => this.publicEndpoint(endpoint));
    }
    async remove(id) {
        const result = await this.prisma.webhookEndpoint.deleteMany({ where: { id } });
        if (!result.count)
            throw new NotFoundException("Webhook endpoint not found");
        return { success: true };
    }
    async toggle(id, active) {
        const endpoint = await this.prisma.webhookEndpoint.update({ where: { id }, data: { active } });
        return this.publicEndpoint(endpoint);
    }
    async emit(eventType, data, eventId = randomUUID()) {
        const endpoints = await this.prisma.webhookEndpoint.findMany({ where: { active: true, OR: [{ events: { has: eventType } }, { events: { has: "*" } }] } });
        if (!endpoints.length)
            return { queued: 0, eventId };
        const envelope = { id: eventId, type: eventType, createdAt: new Date().toISOString(), data };
        await this.prisma.webhookDelivery.createMany({
            data: endpoints.map((endpoint) => ({ endpointId: endpoint.id, eventType, eventId, payload: envelope })),
            skipDuplicates: true,
        });
        return { queued: endpoints.length, eventId };
    }
    async test(id) {
        const endpoint = await this.prisma.webhookEndpoint.findUnique({ where: { id } });
        if (!endpoint)
            throw new NotFoundException("Webhook endpoint not found");
        const eventId = `test_${randomUUID()}`;
        await this.prisma.webhookDelivery.create({
            data: { endpointId: id, eventType: "system.webhook.test", eventId, payload: { id: eventId, type: "system.webhook.test", createdAt: new Date().toISOString(), data: { message: "Ngày Đôi webhook test" } } },
        });
        await this.processPending(1, id);
        return this.prisma.webhookDelivery.findFirst({ where: { endpointId: id, eventId }, select: { id: true, status: true, responseStatus: true, lastError: true, deliveredAt: true } });
    }
    async deliveries(endpointId) {
        return this.prisma.webhookDelivery.findMany({
            where: endpointId ? { endpointId } : {},
            orderBy: { createdAt: "desc" },
            take: 50,
            include: { endpoint: { select: { name: true, url: true } } },
        });
    }
    async retry(deliveryId) {
        await this.prisma.webhookDelivery.update({ where: { id: deliveryId }, data: { status: "PENDING", attemptCount: 0, nextAttemptAt: new Date(), lastError: null, responseStatus: null, responseBody: null, deliveredAt: null } });
    }
    async processPending(limit = 10, endpointId) {
        await this.prisma.webhookDelivery.updateMany({
            where: { status: "PROCESSING", updatedAt: { lt: new Date(Date.now() - 10 * 60_000) } },
            data: { status: "FAILED", nextAttemptAt: new Date(), lastError: "Recovered after an interrupted worker" },
        });
        const rows = await this.prisma.webhookDelivery.findMany({
            where: { ...(endpointId ? { endpointId } : {}), status: { in: ["PENDING", "FAILED"] }, nextAttemptAt: { lte: new Date() }, attemptCount: { lt: 6 }, endpoint: { active: true } },
            include: { endpoint: true },
            orderBy: { createdAt: "asc" },
            take: limit,
        });
        let processed = 0;
        for (const row of rows) {
            const claimed = await this.prisma.webhookDelivery.updateMany({ where: { id: row.id, status: { in: ["PENDING", "FAILED"] } }, data: { status: "PROCESSING", attemptCount: { increment: 1 } } });
            if (!claimed.count)
                continue;
            try {
                const body = JSON.stringify(row.payload);
                const timestamp = Math.floor(Date.now() / 1000).toString();
                const secret = this.decrypt(row.endpoint.secretCiphertext);
                const signature = createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");
                const response = await fetch(row.endpoint.url, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "user-agent": `NgayDoi-Webhooks/${process.env.APP_VERSION ?? "0.15.14"}`,
                        "x-ngaydoi-event": row.eventType,
                        "x-ngaydoi-delivery": row.id,
                        "x-ngaydoi-timestamp": timestamp,
                        "x-ngaydoi-signature": `v1=${signature}`,
                    },
                    body,
                    signal: AbortSignal.timeout(Number(process.env.WEBHOOK_TIMEOUT_MS ?? 10_000)),
                });
                const responseBody = (await response.text()).slice(0, 1000);
                if (!response.ok)
                    throw new WebhookHttpError(response.status, responseBody);
                await this.prisma.$transaction([
                    this.prisma.webhookDelivery.update({ where: { id: row.id }, data: { status: "DELIVERED", responseStatus: response.status, responseBody, deliveredAt: new Date(), lastError: null } }),
                    this.prisma.webhookEndpoint.update({ where: { id: row.endpointId }, data: { lastDeliveredAt: new Date(), failureCount: 0 } }),
                ]);
            }
            catch (error) {
                const attempts = row.attemptCount + 1;
                const status = error instanceof WebhookHttpError ? error.status : undefined;
                const message = error instanceof Error ? error.message.slice(0, 1000) : String(error).slice(0, 1000);
                await this.prisma.$transaction([
                    this.prisma.webhookDelivery.update({ where: { id: row.id }, data: { status: attempts >= 6 ? "DEAD_LETTER" : "FAILED", responseStatus: status, lastError: message, nextAttemptAt: new Date(Date.now() + Math.min(6 * 60 * 60_000, 2 ** attempts * 30_000)) } }),
                    this.prisma.webhookEndpoint.update({ where: { id: row.endpointId }, data: { lastFailedAt: new Date(), failureCount: { increment: 1 } } }),
                ]);
                this.logger.warn(JSON.stringify({ type: "webhook_failed", deliveryId: row.id, endpointId: row.endpointId, status, message }));
            }
            processed += 1;
        }
        return { processed };
    }
    async summary() {
        const [pending, delivered, failed, deadLetter, endpoints] = await Promise.all([
            this.prisma.webhookDelivery.count({ where: { status: "PENDING" } }),
            this.prisma.webhookDelivery.count({ where: { status: "DELIVERED" } }),
            this.prisma.webhookDelivery.count({ where: { status: "FAILED" } }),
            this.prisma.webhookDelivery.count({ where: { status: "DEAD_LETTER" } }),
            this.prisma.webhookEndpoint.count({ where: { active: true } }),
        ]);
        return { metrics: { endpoints, pending, delivered, failed, deadLetter } };
    }
    publicEndpoint(endpoint) {
        return { id: endpoint.id, name: endpoint.name, url: endpoint.url, events: endpoint.events, active: endpoint.active, failureCount: endpoint.failureCount, lastDeliveredAt: endpoint.lastDeliveredAt, lastFailedAt: endpoint.lastFailedAt, createdAt: endpoint.createdAt, updatedAt: endpoint.updatedAt, deliveryCount: endpoint._count?.deliveries };
    }
    key() {
        const source = process.env.OPERATIONS_ENCRYPTION_KEY ?? "local-development-operations-key-change-me";
        return createHash("sha256").update(source).digest();
    }
    encrypt(value) {
        const iv = randomBytes(12);
        const cipher = createCipheriv("aes-256-gcm", this.key(), iv);
        const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
        return [iv, cipher.getAuthTag(), encrypted].map((part) => part.toString("base64url")).join(".");
    }
    decrypt(value) {
        const [ivValue, tagValue, encryptedValue] = value.split(".");
        if (!ivValue || !tagValue || !encryptedValue)
            throw new Error("Invalid encrypted webhook secret");
        const decipher = createDecipheriv("aes-256-gcm", this.key(), Buffer.from(ivValue, "base64url"));
        decipher.setAuthTag(Buffer.from(tagValue, "base64url"));
        return Buffer.concat([decipher.update(Buffer.from(encryptedValue, "base64url")), decipher.final()]).toString("utf8");
    }
};
WebhookService = WebhookService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], WebhookService);
export { WebhookService };
class WebhookHttpError extends Error {
    status;
    constructor(status, body) {
        super(`Webhook returned ${status}: ${body || "empty response"}`);
        this.status = status;
    }
}
//# sourceMappingURL=webhook.service.js.map