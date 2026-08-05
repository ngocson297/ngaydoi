import { spawnSync } from "node:child_process";

const container = "ngaydoi-postgres";
const inspect = spawnSync("docker", ["inspect", container], { stdio: "ignore" });
if (inspect.status === 0) {
  const start = spawnSync("docker", ["start", container], { stdio: "inherit" });
  if (start.status !== 0) process.exit(start.status ?? 1);
} else {
  const compose = spawnSync("docker", ["compose", "up", "-d", "postgres"], { stdio: "inherit" });
  if (compose.status !== 0) process.exit(compose.status ?? 1);
}
