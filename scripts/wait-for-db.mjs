import { readFile } from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import process from "node:process";

const ENV_PATH = path.resolve(process.cwd(), "apps/api/.env");
const MAX_ATTEMPTS = 60;
const RETRY_DELAY_MS = 1_000;

function parseEnv(content) {
  return Object.fromEntries(
    content
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const index = line.indexOf("=");
        const key = line.slice(0, index).trim();
        const value = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, "");
        return [key, value];
      }),
  );
}

function canConnect(host, port) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host, port });
    const finish = (result) => {
      socket.removeAllListeners();
      socket.destroy();
      resolve(result);
    };

    socket.setTimeout(1_000);
    socket.once("connect", () => finish(true));
    socket.once("error", () => finish(false));
    socket.once("timeout", () => finish(false));
  });
}

async function main() {
  let envContent;
  try {
    envContent = await readFile(ENV_PATH, "utf8");
  } catch {
    throw new Error(`Missing ${ENV_PATH}. Copy apps/api/.env.example to apps/api/.env first.`);
  }

  const env = parseEnv(envContent);
  const connectionString = process.env.DATABASE_URL ?? env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is missing from apps/api/.env");
  }

  const url = new URL(connectionString);
  const host = url.hostname === "localhost" ? "127.0.0.1" : url.hostname;
  const port = Number(url.port || 5432);

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    if (await canConnect(host, port)) {
      console.log(`PostgreSQL is reachable at ${host}:${port}.`);
      return;
    }

    process.stdout.write(`Waiting for PostgreSQL at ${host}:${port} (${attempt}/${MAX_ATTEMPTS})...\r`);
    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
  }

  throw new Error(
    `Cannot reach PostgreSQL at ${host}:${port}. Check Docker Desktop, docker compose ps, port conflicts, and DATABASE_URL.`,
  );
}

main().catch((error) => {
  console.error(`\nDatabase readiness check failed: ${error.message}`);
  process.exit(1);
});
