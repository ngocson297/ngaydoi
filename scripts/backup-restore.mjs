import { existsSync, readFileSync, rmSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const backupArg = process.argv.find((value) => !value.startsWith("-") && value !== process.argv[0] && value !== process.argv[1]);
if (!backupArg || !process.argv.includes("--yes")) {
  console.error("Usage: npm run backup:restore -- <backup-folder-or-name> --yes");
  process.exit(1);
}
const root = resolve(process.cwd(), process.env.BACKUP_ROOT ?? "../ngaydoi-local-data/backups");
const backupDir = backupArg.includes("/") ? resolve(backupArg) : resolve(root, backupArg);
const dumpPath = resolve(backupDir, "database.dump");
if (!existsSync(dumpPath)) { console.error(`database.dump not found in ${backupDir}`); process.exit(1); }
const container = process.env.POSTGRES_CONTAINER ?? "ngaydoi-postgres";
const user = process.env.POSTGRES_USER ?? "ngaydoi";
const database = process.env.POSTGRES_DB ?? "ngaydoi";
const restore = spawnSync("docker", ["exec", "-i", container, "pg_restore", "-U", user, "-d", database, "--clean", "--if-exists", "--no-owner", "--no-privileges"], { input: readFileSync(dumpPath), stdio: ["pipe", "inherit", "inherit"] });
if (restore.status !== 0) process.exit(restore.status ?? 1);
const mediaArchive = resolve(backupDir, "uploads.tar.gz");
if (existsSync(mediaArchive)) {
  const uploadDir = resolve(process.cwd(), process.env.UPLOAD_DIR ?? "../ngaydoi-local-data/uploads");
  rmSync(uploadDir, { recursive: true, force: true });
  mkdirSync(uploadDir, { recursive: true });
  const media = spawnSync("tar", ["-xzf", mediaArchive, "-C", uploadDir], { stdio: "inherit" });
  if (media.status !== 0) process.exit(media.status ?? 1);
}
console.log(`Restore completed from ${backupDir}. Run npm run db:generate before starting the API.`);
