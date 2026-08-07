var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MailService_1;
import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
let MailService = MailService_1 = class MailService {
    prisma;
    logger = new Logger(MailService_1.name);
    timer;
    constructor(prisma) {
        this.prisma = prisma;
    }
    onModuleInit() {
        if (process.env.JOB_RUNNER_ENABLED === "false")
            return;
        this.timer = setInterval(() => void this.processPending(), Number(process.env.JOB_POLL_INTERVAL_MS ?? 10_000));
        this.timer.unref();
        setTimeout(() => void this.processPending(), 500).unref();
    }
    onModuleDestroy() {
        if (this.timer)
            clearInterval(this.timer);
    }
    async queue(input) {
        return this.prisma.emailOutbox.create({
            data: {
                recipient: input.recipient.trim().toLowerCase(),
                subject: input.subject,
                htmlBody: input.htmlBody,
                textBody: input.textBody,
                templateKey: input.templateKey,
                metadata: input.metadata,
                provider: (process.env.MAIL_PROVIDER ?? "CONSOLE").toUpperCase(),
            },
            select: { id: true, status: true, createdAt: true },
        });
    }
    async processPending(limit = 10) {
        await this.prisma.emailOutbox.updateMany({
            where: { status: "PROCESSING", updatedAt: { lt: new Date(Date.now() - 10 * 60_000) } },
            data: { status: "FAILED", nextAttemptAt: new Date(), lastError: "Recovered after an interrupted worker" },
        });
        const rows = await this.prisma.emailOutbox.findMany({
            where: { status: { in: ["PENDING", "FAILED"] }, nextAttemptAt: { lte: new Date() }, attemptCount: { lt: 5 } },
            orderBy: { createdAt: "asc" },
            take: limit,
        });
        let processed = 0;
        for (const row of rows) {
            const claimed = await this.prisma.emailOutbox.updateMany({
                where: { id: row.id, status: { in: ["PENDING", "FAILED"] } },
                data: { status: "PROCESSING", attemptCount: { increment: 1 } },
            });
            if (!claimed.count)
                continue;
            try {
                const messageId = await this.send(row.recipient, row.subject, row.htmlBody, row.textBody ?? undefined);
                await this.prisma.emailOutbox.update({ where: { id: row.id }, data: { status: "DELIVERED", sentAt: new Date(), providerMessageId: messageId, lastError: null } });
            }
            catch (error) {
                const attempts = row.attemptCount + 1;
                await this.prisma.emailOutbox.update({
                    where: { id: row.id },
                    data: {
                        status: attempts >= 5 ? "DEAD_LETTER" : "FAILED",
                        lastError: error instanceof Error ? error.message.slice(0, 1000) : String(error).slice(0, 1000),
                        nextAttemptAt: new Date(Date.now() + Math.min(60 * 60_000, 2 ** attempts * 30_000)),
                    },
                });
            }
            processed += 1;
        }
        return { processed };
    }
    async retry(id) {
        await this.prisma.emailOutbox.update({ where: { id }, data: { status: "PENDING", attemptCount: 0, nextAttemptAt: new Date(), sentAt: null, providerMessageId: null, lastError: null } });
    }
    async summary() {
        const [pending, delivered, failed, deadLetter, recent] = await Promise.all([
            this.prisma.emailOutbox.count({ where: { status: "PENDING" } }),
            this.prisma.emailOutbox.count({ where: { status: "DELIVERED" } }),
            this.prisma.emailOutbox.count({ where: { status: "FAILED" } }),
            this.prisma.emailOutbox.count({ where: { status: "DEAD_LETTER" } }),
            this.prisma.emailOutbox.findMany({ orderBy: { createdAt: "desc" }, take: 30, select: { id: true, recipient: true, subject: true, status: true, provider: true, attemptCount: true, lastError: true, createdAt: true, sentAt: true } }),
        ]);
        return { provider: (process.env.MAIL_PROVIDER ?? "CONSOLE").toUpperCase(), metrics: { pending, delivered, failed, deadLetter }, recent };
    }
    async send(recipient, subject, html, text) {
        const provider = (process.env.MAIL_PROVIDER ?? "CONSOLE").toUpperCase();
        if (provider === "CONSOLE") {
            this.logger.log(JSON.stringify({ type: "email_console", recipient, subject, preview: text?.slice(0, 160) }));
            return `console-${Date.now()}`;
        }
        if (provider !== "RESEND")
            throw new Error(`Unsupported mail provider: ${provider}`);
        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.MAIL_FROM;
        if (!apiKey || !from)
            throw new Error("RESEND_API_KEY and MAIL_FROM are required");
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
            body: JSON.stringify({ from, to: [recipient], subject, html, text }),
        });
        const payload = await response.json();
        if (!response.ok || !payload.id)
            throw new Error(payload.message ?? `Resend failed with ${response.status}`);
        return payload.id;
    }
};
MailService = MailService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], MailService);
export { MailService };
//# sourceMappingURL=mail.service.js.map