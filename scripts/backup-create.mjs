import { mkdirSync, existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(process.cwd(), process.env.BACKUP_ROOT ?? "../ngaydoi-local-data/backups");
const uploadDir = resolve(process.cwd(), process.env.UPLOAD_DIR ?? "../ngaydoi-local-data/uploads");
const timestamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
const destination = resolve(root, timestamp);
const container = process.env.POSTGRES_CONTAINER ?? "ngaydoi-postgres";
const user = process.env.POSTGRES_USER ?? "ngaydoi";
const database = process.env.POSTGRES_DB ?? "ngaydoi";
const retention = Number(process.env.BACKUP_RETENTION_COUNT ?? 14);

mkdirSync(destination, { recursive: true });
const dump = spawnSync("docker", ["exec", container, "pg_dump", "-U", user, "-d", database, "-Fc"], { encoding: null, maxBuffer: 1024 * 1024 * 1024 });
if (dump.status !== 0 || !dump.stdout?.length) {
  console.error(dump.stderr?.toString() || "Database backup failed. Is ngaydoi-postgres running?");
  process.exit(dump.status ?? 1);
}
writeFileSync(resolve(destination, "database.dump"), dump.stdout);

if (existsSync(uploadDir)) {
  const media = spawnSync("tar", ["-czf", resolve(destination, "uploads.tar.gz"), "-C", uploadDir, "."], { stdio: "inherit" });
  if (media.status !== 0) process.exit(media.status ?? 1);
}
writeFileSync(resolve(destination, "manifest.json"), JSON.stringify({
  createdAt: new Date().toISOString(),
  appVersion: process.env.APP_VERSION ?? "0.7.0",
  database,
  postgresContainer: container,
  includesUploads: existsSync(uploadDir),
}, null, 2));

const verify = spawnSync("docker", ["exec", "-i", container, "pg_restore", "--list"], { input: dump.stdout, stdio: ["pipe", "ignore", "pipe"] });
if (verify.status !== 0) {
  console.error(verify.stderr?.toString() || "Backup verification failed");
  process.exit(verify.status ?? 1);
}

const backups = readdirSync(root, { withFileTypes: true }).filter((item) => item.isDirectory()).map((item) => item.name).sort().reverse();
for (const old of backups.slice(retention)) rmSync(resolve(root, old), { recursive: true, force: true });
console.log(`Backup created and verified: ${destination}`);
