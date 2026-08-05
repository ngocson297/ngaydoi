import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd(), process.env.BACKUP_ROOT ?? "../ngaydoi-local-data/backups");
if (!existsSync(root)) { console.log("No backups found."); process.exit(0); }
const rows = readdirSync(root, { withFileTypes: true }).filter((item) => item.isDirectory()).map((item) => {
  const dir = resolve(root, item.name);
  const dump = resolve(dir, "database.dump");
  const manifest = resolve(dir, "manifest.json");
  let createdAt = item.name;
  if (existsSync(manifest)) {
    try { createdAt = JSON.parse(readFileSync(manifest, "utf8")).createdAt ?? createdAt; } catch {}
  }
  return { name: item.name, createdAt, sizeMb: existsSync(dump) ? (statSync(dump).size / 1024 / 1024).toFixed(2) : "missing" };
}).sort((a, b) => b.name.localeCompare(a.name));
console.table(rows);
