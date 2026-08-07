import { Injectable, Logger, type OnApplicationBootstrap } from "@nestjs/common";

export interface EnvironmentCheck {
  key: string;
  status: "ok" | "warning" | "error";
  message: string;
}

function looksPlaceholder(value: string): boolean {
  const normalized = value.toLowerCase();
  return !value || normalized.includes("change-this") || normalized.includes("replace-me") || normalized.includes("example") || normalized.includes("dev-only");
}

function isLocalDatabaseUrl(value: string): boolean {
  return /(?:localhost|127\.0\.0\.1|host\.docker\.internal|postgres:5432)/i.test(value);
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
    const status = (ready: boolean): "ok" | "warning" | "error" => ready ? "ok" : production ? "error" : "warning";

    const secret = process.env.JWT_ACCESS_SECRET ?? "";
    const jwtReady = secret.length >= 32 && !looksPlaceholder(secret);
    checks.push({
      key: "JWT_ACCESS_SECRET",
      status: status(jwtReady),
      message: jwtReady ? "Configured" : "Use a unique secret of at least 32 characters",
    });

    const databaseUrl = process.env.DATABASE_URL ?? "";
    const databaseReady = Boolean(databaseUrl) && (!production || !isLocalDatabaseUrl(databaseUrl));
    checks.push({
      key: "DATABASE_URL",
      status: status(databaseReady),
      message: databaseReady ? "Database target configured" : production ? "Production must not target the local development database" : "Configure a database URL",
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
      key: "REQUIRE_EMAIL_VERIFICATION",
      status: !production || process.env.REQUIRE_EMAIL_VERIFICATION === "true" ? "ok" : "error",
      message: !production || process.env.REQUIRE_EMAIL_VERIFICATION === "true" ? "Configured" : "Must be true for the production pilot",
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
      status: status(mailReady),
      message: mailReady ? `${mailProvider} is ready` : "Production requires RESEND_API_KEY and MAIL_FROM",
    });

    const storageProvider = (process.env.STORAGE_PROVIDER ?? "LOCAL").toUpperCase();
    const publicStorageUrl = process.env.S3_PUBLIC_BASE_URL ?? "";
    const s3Ready = ["S3", "R2"].includes(storageProvider)
      ? ["S3_ENDPOINT", "S3_BUCKET", "S3_ACCESS_KEY_ID", "S3_SECRET_ACCESS_KEY", "S3_PUBLIC_BASE_URL"].every((key) => Boolean(process.env[key]))
        && (!production || publicStorageUrl.startsWith("https://"))
      : storageProvider === "LOCAL" && !production;
    checks.push({
      key: "STORAGE_PROVIDER",
      status: status(s3Ready),
      message: s3Ready ? `${storageProvider} is ready` : "Production requires S3/R2 plus an HTTPS public CDN/base URL",
    });

    const encryptionKey = process.env.OPERATIONS_ENCRYPTION_KEY ?? "";
    const encryptionReady = encryptionKey.length >= 32 && !looksPlaceholder(encryptionKey);
    checks.push({
      key: "OPERATIONS_ENCRYPTION_KEY",
      status: status(encryptionReady),
      message: encryptionReady ? "Configured" : "Use a unique key of at least 32 characters to encrypt webhook secrets",
    });

    const uploadSigningSecret = process.env.MEMORY_UPLOAD_SIGNING_SECRET ?? "";
    const actorPepper = process.env.MEMORY_ACTOR_PEPPER ?? "";
    const memorySecretsReady = uploadSigningSecret.length >= 32
      && actorPepper.length >= 32
      && !looksPlaceholder(uploadSigningSecret)
      && !looksPlaceholder(actorPepper)
      && uploadSigningSecret !== actorPepper
      && uploadSigningSecret !== secret
      && actorPepper !== secret;
    checks.push({
      key: "MEMORY_SECURITY_SECRETS",
      status: status(memorySecretsReady),
      message: memorySecretsReady ? "Upload signing and actor secrets are separate" : "Use separate 32+ character secrets for MEMORY_UPLOAD_SIGNING_SECRET and MEMORY_ACTOR_PEPPER",
    });

    const releaseSha = process.env.RELEASE_SHA ?? "";
    const releaseReady = !production || (releaseSha.length >= 7 && !looksPlaceholder(releaseSha));
    checks.push({
      key: "RELEASE_SHA",
      status: releaseReady ? "ok" : "error",
      message: releaseReady ? "Release identifier configured" : "Set RELEASE_SHA to the deployed Git commit",
    });

    checks.push({
      key: "TRUST_PROXY_HOPS",
      status: !production || (Number.isFinite(Number(process.env.TRUST_PROXY_HOPS)) && Number(process.env.TRUST_PROXY_HOPS) >= 1) ? "ok" : "error",
      message: !production || (Number.isFinite(Number(process.env.TRUST_PROXY_HOPS)) && Number(process.env.TRUST_PROXY_HOPS) >= 1) ? "Configured" : "Set TRUST_PROXY_HOPS to at least 1 behind the production reverse proxy/CDN",
    });

    return checks;
  }
}
