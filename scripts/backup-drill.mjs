import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(process.cwd(), process.env.BACKUP_ROOT ?? "../ngaydoi-local-data/backups");
const arg = process.argv.slice(2).find((item) => !item.startsWith("-"));
const latest = existsSync(root) ? readdirSync(root, { withFileTypes: true }).filter((item) => item.isDirectory()).map((item) => item.name).sort().reverse()[0] : undefined;
const selected = arg || latest;
if (!selected) { console.error("No backup found. Run npm run backup:create first."); process.exit(1); }
const backupDir = selected.includes("/") ? resolve(selected) : resolve(root, selected);
const dumpPath = resolve(backupDir, "database.dump");
if (!existsSync(dumpPath)) { console.error(`database.dump not found in ${backupDir}`); process.exit(1); }

const container = process.env.POSTGRES_CONTAINER ?? "ngaydoi-postgres";
const user = process.env.POSTGRES_USER ?? "ngaydoi";
const drillDb = `ngaydoi_restore_drill_${Date.now()}`;
const run = (args, options = {}) => spawnSync("docker", ["exec", ...args], { encoding: "utf8", ...options });

let created = false;
try {
  const create = run([container, "createdb", "-U", user, drillDb]);
  if (create.status !== 0) throw new Error(create.stderr || "Unable to create drill database");
  created = true;
  const restore = spawnSync("docker", ["exec", "-i", container, "pg_restore", "-U", user, "-d", drillDb, "--no-owner", "--no-privileges"], { input: readFileSync(dumpPath), encoding: null, maxBuffer: 1024 * 1024 * 1024 });
  if (restore.status !== 0) throw new Error(restore.stderr?.toString() || "Restore drill failed");
  const verify = run([container, "psql", "-U", user, "-d", drillDb, "-tAc", "SELECT count(*) FROM information_schema.tables WHERE table_schema='public';"]);
  const tableCount = Number(String(verify.stdout ?? "").trim());
  if (verify.status !== 0 || !Number.isFinite(tableCount) || tableCount < 10) throw new Error(verify.stderr || `Restore contains too few public tables (${tableCount || 0})`);
  console.log(`Restore drill passed: ${tableCount} public tables restored from ${backupDir}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
} finally {
  if (created) {
    const drop = run([container, "dropdb", "-U", user, "--force", drillDb]);
    if (drop.status !== 0) console.error(`Warning: could not remove drill database ${drillDb}: ${drop.stderr}`);
  }
}
