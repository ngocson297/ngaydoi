import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function parseEnvFile(path) {
  if (!existsSync(path)) return {};
  return Object.fromEntries(readFileSync(path, "utf8").split(/\r?\n/).flatMap((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) return [];
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    return [[key, value]];
  }));
}

const requested = process.argv.find((item) => item.startsWith("--env="))?.slice(6);
const defaultPath = resolve(process.cwd(), "apps/api/.env.production");
const filePath = resolve(process.cwd(), requested || defaultPath);
const env = { ...parseEnvFile(filePath), ...process.env };
const failures = [];
const warnings = [];
const value = (key) => String(env[key] ?? "").trim();
const placeholder = (raw) => /replace-with|change-this|example|your-|<|>/i.test(raw);
const requireValue = (key, predicate, message) => {
  const raw = value(key);
  if (!raw || placeholder(raw) || (predicate && !predicate(raw))) failures.push(`${key}: ${message}`);
};

requireValue("NODE_ENV", (v) => v === "production", "must be production");
requireValue("DATABASE_URL", (v) => /^postgres(?:ql)?:\/\//i.test(v) && !/(localhost|127\.0\.0\.1)/i.test(v), "must point to a non-local PostgreSQL database");
if (value("DATABASE_URL") && !/sslmode=(require|verify-full)/i.test(value("DATABASE_URL"))) warnings.push("DATABASE_URL: no sslmode=require/verify-full detected; confirm TLS is enforced by the provider");
requireValue("FRONTEND_URL", (v) => v.split(",").every((origin) => /^https:\/\//i.test(origin.trim())), "all production origins must use HTTPS");
requireValue("COOKIE_SECURE", (v) => v === "true", "must be true");
requireValue("REQUIRE_EMAIL_VERIFICATION", (v) => v === "true", "must be true");
requireValue("PAYMENT_SANDBOX_ENABLED", (v) => v === "false", "must be false");
requireValue("JWT_ACCESS_SECRET", (v) => v.length >= 32, "use a unique secret of at least 32 characters");
requireValue("OPERATIONS_ENCRYPTION_KEY", (v) => v.length >= 32, "use a unique key of at least 32 characters");
requireValue("MEMORY_UPLOAD_SIGNING_SECRET", (v) => v.length >= 32, "separate upload signing secret is required in production");
requireValue("MEMORY_ACTOR_PEPPER", (v) => v.length >= 32, "separate actor pepper is required in production");
requireValue("MAIL_PROVIDER", (v) => v.toUpperCase() === "RESEND", "production mail provider must be RESEND");
requireValue("RESEND_API_KEY", (v) => v.length >= 10, "configure the production provider key");
requireValue("MAIL_FROM", (v) => /@/.test(v), "configure a verified sender");
requireValue("STORAGE_PROVIDER", (v) => ["S3", "R2"].includes(v.toUpperCase()), "use S3 or R2; LOCAL is not allowed");
for (const key of ["S3_ENDPOINT", "S3_BUCKET", "S3_ACCESS_KEY_ID", "S3_SECRET_ACCESS_KEY"]) requireValue(key, (v) => v.length > 2, "required for object storage");
requireValue("S3_PUBLIC_BASE_URL", (v) => /^https:\/\//i.test(v), "must be an HTTPS CDN/public media base URL");
requireValue("APP_VERSION", (v) => /^\d+\.\d+\.\d+/.test(v), "set the release version");
requireValue("RELEASE_SHA", (v) => v.length >= 7 && v !== "development", "set the deployed Git SHA");
requireValue("TRUST_PROXY_HOPS", (v) => Number.isFinite(Number(v)) && Number(v) >= 1, "must be at least 1 behind the production proxy");

console.log(`Production configuration source: ${existsSync(filePath) ? filePath : "process environment"}`);
for (const item of warnings) console.warn(`WARN  ${item}`);
if (failures.length) {
  console.error(`Production configuration check failed (${failures.length}):`);
  failures.forEach((item) => console.error(`FAIL  ${item}`));
  process.exit(1);
}
console.log("Production configuration check passed.");
