import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];
const read = (file) => {
  const path = join(root, file);
  if (!existsSync(path)) {
    failures.push(`${file}: missing`);
    return "";
  }
  return readFileSync(path, "utf8");
};
const requirePattern = (file, pattern, message) => {
  const source = read(file);
  if (source && !pattern.test(source)) failures.push(`${file}: ${message}`);
};
const rejectPattern = (file, pattern, message) => {
  const source = read(file);
  if (source && pattern.test(source)) failures.push(`${file}: ${message}`);
};

const pkg = JSON.parse(read("package.json") || "{}");
if (pkg.version !== "0.15.15") failures.push(`package.json: expected 0.15.15, found ${pkg.version}`);
for (const script of ["lint", "typecheck", "rc:smoke", "rc:report", "rc:check", "sprint15.16:audit"]) {
  if (!pkg.scripts?.[script]) failures.push(`package.json: ${script} script missing`);
}

// Public/private album boundary and upload state transitions.
requirePattern("apps/api/src/memories/memories.service.ts", /asset\.status !== "APPROVED"/, "public media is not restricted to approved assets");
rejectPattern("apps/api/src/memories/memories.service.ts", /\["APPROVED",\s*"PENDING"\]\.includes\(asset\.status\)/, "pending media remains publicly readable");
requirePattern("apps/api/src/memories/memories.service.ts", /completeUpload[\s\S]*?!album\.uploadEnabled[\s\S]*?album\.closesAt && album\.closesAt <= new Date\(\)/, "direct-upload completion does not revalidate the intake deadline");
requirePattern("apps/api/src/memories/memories.service.ts", /where:\s*\{ id: assetId, albumId: album\.id, status: "APPROVED" \}/, "public social actions are not scoped to approved album assets");

// Tenant isolation must be enforced in services, not only hidden in the UI.
for (const file of [
  "apps/api/src/weddings/weddings.service.ts",
  "apps/api/src/guests/guests.service.ts",
  "apps/api/src/invitation/invitation.service.ts",
  "apps/api/src/event-operations/event-operations.service.ts",
  "apps/api/src/memories/memories.service.ts",
  "apps/api/src/planning/planning.service.ts",
]) {
  requirePattern(file, /ownerId === user\.id/, "owner identity is not checked");
  requirePattern(file, /collaborators/, "accepted collaborator scope is not checked");
  requirePattern(file, /NotFoundException/, "unauthorized tenant resources are not concealed");
}

// Admin routes require both authentication and backend role authorization.
for (const file of [
  "apps/api/src/admin/admin.controller.ts",
  "apps/api/src/operations/operations.controller.ts",
  "apps/api/src/pilot/pilot.controller.ts",
  "apps/api/src/partner/partner.controller.ts",
  "apps/api/src/growth/growth.controller.ts",
]) {
  requirePattern(file, /JwtAuthGuard/, "Admin route is missing authentication guard");
  requirePattern(file, /RolesGuard/, "Admin route is missing role guard");
  requirePattern(file, /@Roles\("ADMIN"/, "Admin role is not required by the backend");
}

requirePattern("apps/api/src/common/http/request-context.middleware.ts", /x-request-id/, "request ID response tracing is missing");
requirePattern("apps/api/src/common/http/global-exception.filter.ts", /requestId/, "request ID is missing from API errors");
requirePattern("apps/api/src/rsvp/rsvp.service.ts", /rateLimit\.consume/, "public RSVP rate limiting is missing");
requirePattern("apps/api/src/memories/memories.service.ts", /memory-comment:/, "public album comment rate limiting is missing");

if (failures.length) {
  console.error(`Sprint 15.16 audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("Sprint 15.16 audit passed: tenant isolation, Admin RBAC, approved-only public media, upload deadline, request tracing and public rate limits verified.");
