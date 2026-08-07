var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@nestjs/common";
import { EnvironmentService } from "../common/config/environment.service.js";
import { StorageService } from "../common/storage/storage.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailService } from "./mail.service.js";
import { WebhookService } from "./webhook.service.js";
let SystemHealthService = class SystemHealthService {
    prisma;
    environment;
    storage;
    mail;
    webhooks;
    constructor(prisma, environment, storage, mail, webhooks) {
        this.prisma = prisma;
        this.environment = environment;
        this.storage = storage;
        this.mail = mail;
        this.webhooks = webhooks;
    }
    live() {
        return {
            status: "ok",
            service: "ngaydoi-api",
            version: process.env.APP_VERSION ?? "0.15.14",
            release: process.env.RELEASE_SHA ?? "development",
            uptimeSeconds: Math.floor(process.uptime()),
            timestamp: new Date().toISOString(),
        };
    }
    async ready() {
        const startedAt = performance.now();
        let database;
        try {
            const dbStarted = performance.now();
            await this.prisma.$queryRaw `SELECT 1`;
            database = { ok: true, latencyMs: Math.round((performance.now() - dbStarted) * 100) / 100, detail: "Connected" };
        }
        catch (error) {
            database = { ok: false, detail: error instanceof Error ? error.message : String(error) };
        }
        const storage = await this.storage.health();
        const environment = this.environment.report();
        const configurationOk = !environment.some((item) => item.status === "error");
        const ok = database.ok && storage.ok && configurationOk;
        return {
            status: ok ? "ready" : "not_ready",
            checks: { database, storage, configuration: { ok: configurationOk } },
            durationMs: Math.round((performance.now() - startedAt) * 100) / 100,
            timestamp: new Date().toISOString(),
        };
    }
    async publicStatus() {
        const readiness = await this.ready();
        return {
            status: readiness.status === "ready" ? "operational" : "degraded",
            services: {
                website: "operational",
                api: readiness.checks.database.ok ? "operational" : "degraded",
                database: readiness.checks.database.ok ? "operational" : "outage",
                media: readiness.checks.storage.ok ? "operational" : "degraded",
            },
            updatedAt: readiness.timestamp,
        };
    }
    async adminOverview() {
        const [readiness, mail, webhooks, databaseSize] = await Promise.all([
            this.ready(),
            this.mail.summary(),
            this.webhooks.summary(),
            this.databaseSize(),
        ]);
        const memory = process.memoryUsage();
        return {
            live: this.live(),
            readiness,
            environment: this.environment.report(),
            mail,
            webhooks,
            database: databaseSize,
            runtime: {
                node: process.version,
                platform: `${process.platform}/${process.arch}`,
                rssMb: Math.round(memory.rss / 1024 / 1024),
                heapUsedMb: Math.round(memory.heapUsed / 1024 / 1024),
                jobRunnerEnabled: process.env.JOB_RUNNER_ENABLED !== "false",
            },
        };
    }
    async databaseSize() {
        try {
            const result = await this.prisma.$queryRaw `SELECT pg_database_size(current_database()) AS size`;
            const sizeBytes = Number(result[0]?.size ?? 0);
            return { sizeBytes, sizeLabel: this.bytes(sizeBytes) };
        }
        catch {
            return { sizeBytes: 0, sizeLabel: "Unavailable" };
        }
    }
    bytes(value) {
        if (value < 1024)
            return `${value} B`;
        if (value < 1024 ** 2)
            return `${(value / 1024).toFixed(1)} KB`;
        if (value < 1024 ** 3)
            return `${(value / 1024 ** 2).toFixed(1)} MB`;
        return `${(value / 1024 ** 3).toFixed(2)} GB`;
    }
};
SystemHealthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        EnvironmentService,
        StorageService,
        MailService,
        WebhookService])
], SystemHealthService);
export { SystemHealthService };
//# sourceMappingURL=system-health.service.js.map