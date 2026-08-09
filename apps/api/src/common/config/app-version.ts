import { createRequire } from "node:module";

interface PackageMetadata {
  version?: unknown;
}

const require = createRequire(import.meta.url);
const packageMetadata = require("../../../package.json") as PackageMetadata;
const packageVersion = typeof packageMetadata.version === "string" ? packageMetadata.version : "unknown";

export function appVersion(): string {
  return process.env.APP_VERSION?.trim() || packageVersion;
}
