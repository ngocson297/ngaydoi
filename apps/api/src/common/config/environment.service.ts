import { Injectable, Logger, type OnApplicationBootstrap } from "@nestjs/common";

export interface EnvironmentCheck {
  key: string;
  status: "ok" | "warning" | "error";
  message: string;
}

@Injectable()
export class EnvironmentService implements OnApplicationBootstrap {
  private readonly logger = new Logger(EnvironmentService.name);

  onApplicationBootstrap(): void {
    const report = this.report();
    const errors = report.filter((item) => item.status === "error");
    for (const item of report.filter((entry) => entry.status !== "ok")) {
      const line = `${item.key}: ${item.message}`;
      if (item.status === "error") this.logger.error(line);
      else this.logger.warn(line);
    }
    if (errors.length) throw new Error(`Unsafe production configuration: ${errors.map((item) => item.key).join(", ")}`);
  }

  report(): EnvironmentCheck[] {
    const production = process.env.NODE_ENV === "production";
    const checks: EnvironmentCheck[] = [];
    const secret = process.env.JWT_ACCESS_SECRET ?? "";
    checks.push({
      key: "JWT_ACCESS_SECRET",
      status: secret.length >= 32 && !secret.includes("change-this") ? "ok" : production ? "error" : "warning",
      message: secret.length >= 32 && !secret.includes("change-this") ? "Configured" : "Use a unique secret of at least 32 characters",
    });
    const frontendUrls = (process.env.FRONTEND_URL ?? "").split(",").map((value) => value.trim()).filter(Boolean);
    const secureOrigins = frontendUrls.length > 0 && frontendUrls.every((value) => value.startsWith("https://"));
    checks.push({
      key: "FRONTEND_URL",
      status: !production || secureOrigins ? "ok" : "error",
      message: !production || secureOrigins ? "Allowed origins configured" : "Production origins must use HTTPS",
    });
    checks.push({
      key: "COOKIE_SECURE",
      status: !production || process.env.COOKIE_SECURE === "true" ? "ok" : "error",
      message: !production || process.env.COOKIE_SECURE === "true" ? "Configured" : "Must be true in production",
    });
    checks.push({
      key: "PAYMENT_SANDBOX_ENABLED",
      status: !production || process.env.PAYMENT_SANDBOX_ENABLED !== "true" ? "ok" : "error",
      message: !production || process.env.PAYMENT_SANDBOX_ENABLED !== "true" ? "Configured" : "Sandbox payments must be disabled in production",
    });
    const mailProvider = (process.env.MAIL_PROVIDER ?? "CONSOLE").toUpperCase();
    const mailReady = mailProvider === "CONSOLE" ? !production : mailProvider === "RESEND" && Boolean(process.env.RESEND_API_KEY && process.env.MAIL_FROM);
    checks.push({
      key: "MAIL_PROVIDER",
      status: mailReady ? "ok" : production ? "error" : "warning",
      message: mailReady ? `${mailProvider} is ready` : "Production requires RESEND_API_KEY and MAIL_FROM",
    });
    const storageProvider = (process.env.STORAGE_PROVIDER ?? "LOCAL").toUpperCase();
    const s3Ready = ["S3", "R2"].includes(storageProvider)
      ? ["S3_ENDPOINT", "S3_BUCKET", "S3_ACCESS_KEY_ID", "S3_SECRET_ACCESS_KEY", "S3_PUBLIC_BASE_URL"].every((key) => Boolean(process.env[key]))
      : storageProvider === "LOCAL" && !production;
    checks.push({
      key: "STORAGE_PROVIDER",
      status: s3Ready ? "ok" : production ? "error" : "warning",
      message: s3Ready ? `${storageProvider} is ready` : "Production requires an S3-compatible storage configuration",
    });
    const encryptionKey = process.env.OPERATIONS_ENCRYPTION_KEY ?? "";
    checks.push({
      key: "OPERATIONS_ENCRYPTION_KEY",
      status: encryptionKey.length >= 32 ? "ok" : production ? "error" : "warning",
      message: encryptionKey.length >= 32 ? "Configured" : "Use at least 32 characters to encrypt webhook secrets",
    });
    return checks;
  }
}
