import { createCipheriv, createDecipheriv, createHash, createHmac, randomBytes, randomUUID } from "node:crypto";
import { BadRequestException, Injectable, Logger, NotFoundException, type OnModuleDestroy, type OnModuleInit } from "@nestjs/common";
import type { Prisma } from "../generated/prisma/client.js";
import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateWebhookDto } from "./dto/create-webhook.dto.js";

interface WebhookEnvelope {
  id: string;
  type: string;
  createdAt: string;
  data: Prisma.InputJsonValue;
}

@Injectable()
export class WebhookService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(WebhookService.name);
  private timer?: NodeJS.Timeout;

  constructor(private readonly prisma: PrismaService) {}

  onModuleInit(): void {
    if (process.env.JOB_RUNNER_ENABLED === "false") return;
    this.timer = setInterval(() => void this.processPending(), Number(process.env.JOB_POLL_INTERVAL_MS ?? 10_000));
    this.timer.unref();
    setTimeout(() => void this.processPending(), 1000).unref();
  }

  onModuleDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  async create(dto: CreateWebhookDto) {
    const url = new URL(dto.url);
    if (process.env.NODE_ENV === "production" && url.protocol !== "https:") throw new BadRequestException("Production webhook URLs must use HTTPS");
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

  async remove(id: string): Promise<{ success: true }> {
    const result = await this.prisma.webhookEndpoint.deleteMany({ where: { id } });
    if (!result.count) throw new NotFoundException("Webhook endpoint not found");
    return { success: true };
  }

  async toggle(id: string, active: boolean) {
    const endpoint = await this.prisma.webhookEndpoint.update({ where: { id }, data: { active } });
    return this.publicEndpoint(endpoint);
  }

  async emit(eventType: string, data: Prisma.InputJsonValue, eventId = randomUUID()): Promise<{ queued: number; eventId: string }> {
    const endpoints = await this.prisma.webhookEndpoint.findMany({ where: { active: true, OR: [{ events: { has: eventType } }, { events: { has: "*" } }] } });
    if (!endpoints.length) return { queued: 0, eventId };
    const envelope: WebhookEnvelope = { id: eventId, type: eventType, createdAt: new Date().toISOString(), data };
    await this.prisma.webhookDelivery.createMany({
      data: endpoints.map((endpoint) => ({ endpointId: endpoint.id, eventType, eventId, payload: envelope as unknown as Prisma.InputJsonValue })),
      skipDuplicates: true,
    });
    return { queued: endpoints.length, eventId };
  }

  async test(id: string) {
    const endpoint = await this.prisma.webhookEndpoint.findUnique({ where: { id } });
    if (!endpoint) throw new NotFoundException("Webhook endpoint not found");
    const eventId = `test_${randomUUID()}`;
    await this.prisma.webhookDelivery.create({
      data: { endpointId: id, eventType: "system.webhook.test", eventId, payload: { id: eventId, type: "system.webhook.test", createdAt: new Date().toISOString(), data: { message: "Ngày Đôi webhook test" } } },
    });
    await this.processPending(1, id);
    return this.prisma.webhookDelivery.findFirst({ where: { endpointId: id, eventId }, select: { id: true, status: true, responseStatus: true, lastError: true, deliveredAt: true } });
  }

  async deliveries(endpointId?: string) {
    return this.prisma.webhookDelivery.findMany({
      where: endpointId ? { endpointId } : {},
      orderBy: { createdAt: "desc" },
      take: 50,
      include: { endpoint: { select: { name: true, url: true } } },
    });
  }

  async retry(deliveryId: string): Promise<void> {
    await this.prisma.webhookDelivery.update({ where: { id: deliveryId }, data: { status: "PENDING", attemptCount: 0, nextAttemptAt: new Date(), lastError: null, responseStatus: null, responseBody: null, deliveredAt: null } });
  }

  async processPending(limit = 10, endpointId?: string): Promise<{ processed: number }> {
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
      if (!claimed.count) continue;
      try {
        const body = JSON.stringify(row.payload);
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const secret = this.decrypt(row.endpoint.secretCiphertext);
        const signature = createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");
        const response = await fetch(row.endpoint.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "user-agent": `NgayDoi-Webhooks/${process.env.APP_VERSION ?? "0.7.0"}`,
            "x-ngaydoi-event": row.eventType,
            "x-ngaydoi-delivery": row.id,
            "x-ngaydoi-timestamp": timestamp,
            "x-ngaydoi-signature": `v1=${signature}`,
          },
          body,
          signal: AbortSignal.timeout(Number(process.env.WEBHOOK_TIMEOUT_MS ?? 10_000)),
        });
        const responseBody = (await response.text()).slice(0, 1000);
        if (!response.ok) throw new WebhookHttpError(response.status, responseBody);
        await this.prisma.$transaction([
          this.prisma.webhookDelivery.update({ where: { id: row.id }, data: { status: "DELIVERED", responseStatus: response.status, responseBody, deliveredAt: new Date(), lastError: null } }),
          this.prisma.webhookEndpoint.update({ where: { id: row.endpointId }, data: { lastDeliveredAt: new Date(), failureCount: 0 } }),
        ]);
      } catch (error) {
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

  private publicEndpoint(endpoint: { id: string; name: string; url: string; events: string[]; active: boolean; failureCount: number; lastDeliveredAt: Date | null; lastFailedAt: Date | null; createdAt: Date; updatedAt: Date; _count?: { deliveries: number } }) {
    return { id: endpoint.id, name: endpoint.name, url: endpoint.url, events: endpoint.events, active: endpoint.active, failureCount: endpoint.failureCount, lastDeliveredAt: endpoint.lastDeliveredAt, lastFailedAt: endpoint.lastFailedAt, createdAt: endpoint.createdAt, updatedAt: endpoint.updatedAt, deliveryCount: endpoint._count?.deliveries };
  }

  private key(): Buffer {
    const source = process.env.OPERATIONS_ENCRYPTION_KEY ?? "local-development-operations-key-change-me";
    return createHash("sha256").update(source).digest();
  }

  private encrypt(value: string): string {
    const iv = randomBytes(12);
    const cipher = createCipheriv("aes-256-gcm", this.key(), iv);
    const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
    return [iv, cipher.getAuthTag(), encrypted].map((part) => part.toString("base64url")).join(".");
  }

  private decrypt(value: string): string {
    const [ivValue, tagValue, encryptedValue] = value.split(".");
    if (!ivValue || !tagValue || !encryptedValue) throw new Error("Invalid encrypted webhook secret");
    const decipher = createDecipheriv("aes-256-gcm", this.key(), Buffer.from(ivValue, "base64url"));
    decipher.setAuthTag(Buffer.from(tagValue, "base64url"));
    return Buffer.concat([decipher.update(Buffer.from(encryptedValue, "base64url")), decipher.final()]).toString("utf8");
  }
}

class WebhookHttpError extends Error {
  constructor(public readonly status: number, body: string) {
    super(`Webhook returned ${status}: ${body || "empty response"}`);
  }
}
