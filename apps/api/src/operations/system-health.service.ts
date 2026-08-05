import { Injectable } from "@nestjs/common";
import { EnvironmentService } from "../common/config/environment.service.js";
import { StorageService } from "../common/storage/storage.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailService } from "./mail.service.js";
import { WebhookService } from "./webhook.service.js";

@Injectable()
export class SystemHealthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly environment: EnvironmentService,
    private readonly storage: StorageService,
    private readonly mail: MailService,
    private readonly webhooks: WebhookService,
  ) {}

  live() {
    return {
      status: "ok",
      service: "ngaydoi-api",
      version: process.env.APP_VERSION ?? "0.7.0",
      release: process.env.RELEASE_SHA ?? "development",
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
    };
  }

  async ready() {
    const startedAt = performance.now();
    let database: { ok: boolean; latencyMs?: number; detail: string };
    try {
      const dbStarted = performance.now();
      await this.prisma.$queryRaw`SELECT 1`;
      database = { ok: true, latencyMs: Math.round((performance.now() - dbStarted) * 100) / 100, detail: "Connected" };
    } catch (error) {
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

  private async databaseSize(): Promise<{ sizeBytes: number; sizeLabel: string }> {
    try {
      const result = await this.prisma.$queryRaw<Array<{ size: bigint }>>`SELECT pg_database_size(current_database()) AS size`;
      const sizeBytes = Number(result[0]?.size ?? 0);
      return { sizeBytes, sizeLabel: this.bytes(sizeBytes) };
    } catch {
      return { sizeBytes: 0, sizeLabel: "Unavailable" };
    }
  }

  private bytes(value: number): string {
    if (value < 1024) return `${value} B`;
    if (value < 1024 ** 2) return `${(value / 1024).toFixed(1)} KB`;
    if (value < 1024 ** 3) return `${(value / 1024 ** 2).toFixed(1)} MB`;
    return `${(value / 1024 ** 3).toFixed(2)} GB`;
  }
}
