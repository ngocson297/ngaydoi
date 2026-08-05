import { spawnSync } from "node:child_process";

const container = "ngaydoi-postgres";
const inspect = spawnSync("docker", ["inspect", "--format", "{{range .Mounts}}{{if eq .Destination \"/var/lib/postgresql/data\"}}{{.Name}}{{end}}{{end}}", container], { encoding: "utf8" });
const volume = inspect.status === 0 ? inspect.stdout.trim() : "";
if (inspect.status === 0) spawnSync("docker", ["rm", "-f", container], { stdio: "inherit" });
if (volume) spawnSync("docker", ["volume", "rm", volume], { stdio: "inherit" });
console.log("Local Ngày Đôi PostgreSQL container and its data volume were removed.");
