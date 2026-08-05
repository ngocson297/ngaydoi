import { spawnSync } from "node:child_process";

const container = "ngaydoi-postgres";
const inspect = spawnSync("docker", ["inspect", container], { stdio: "ignore" });
if (inspect.status !== 0) {
  console.log("PostgreSQL container does not exist. Nothing to stop.");
  process.exit(0);
}
const stop = spawnSync("docker", ["stop", container], { stdio: "inherit" });
process.exit(stop.status ?? 0);
