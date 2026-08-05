import { execFile } from "node:child_process";
import { existsSync, readFileSync, rmSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const root = resolve(process.cwd());
const packagePath = join(root, "package.json");
if (!existsSync(packagePath)) throw new Error("Hãy chạy npm run source:pack tại thư mục gốc của dự án Ngày Đôi.");
const manifest = JSON.parse(readFileSync(packagePath, "utf8"));
if (manifest.name !== "ngaydoi-mvp") throw new Error("Thư mục hiện tại không phải source gốc của Ngày Đôi.");

const output = join(dirname(root), "ngaydoi-current.zip");
rmSync(output, { force: true });

const exclusions = [
  "node_modules/*", "*/node_modules/*", "*/*/node_modules/*",
  ".git/*", "*/.git/*",
  ".next/*", "*/.next/*", "*/*/.next/*",
  "dist/*", "*/dist/*", "*/*/dist/*",
  "coverage/*", "*/coverage/*",
  ".typecheck/*", "*/.typecheck/*",
  "apps/api/src/generated/prisma/*",
  ".env", "apps/api/.env", "apps/web/.env.local", ".env.production",
  "ngaydoi-local-data/*", "*/ngaydoi-local-data/*",
  "*.log", "*/.DS_Store", ".DS_Store",
  "*.zip",
];

const args = ["-rq", output, ".", "-x", ...exclusions];
try {
  await execFileAsync("zip", args, { cwd: root, maxBuffer: 10 * 1024 * 1024 });
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    throw new Error("Không tìm thấy lệnh zip. Trên macOS, lệnh này có sẵn mặc định.");
  }
  throw error;
}

console.log(`Source package created: ${output}`);
console.log(`Project: ${basename(root)} · Version: ${manifest.version}`);
console.log("Đã loại bỏ .env, secret, node_modules, .next, dist, generated Prisma Client, .git, dữ liệu local và log.");
