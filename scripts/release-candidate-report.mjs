import { spawnSync } from "node:child_process";

const checks = [
  ["Sprint 15.16 static audit", "npm", ["run", "sprint15.16:audit"]],
  ["Security self-test", "npm", ["run", "security:test"]],
  ["Typecheck", "npm", ["run", "typecheck"]],
];
const results = checks.map(([name, command, args]) => {
  const result = spawnSync(command, args, { stdio: "inherit", shell: process.platform === "win32" });
  return { name, passed: result.status === 0 };
});

console.log("\nNgày Đôi v0.15.15 — Sprint 15.16 Release Candidate");
for (const result of results) console.log(`${result.passed ? "PASS" : "FAIL"}  ${result.name}`);
if (results.some((result) => !result.passed)) process.exit(1);
console.log("RC report passed. Run npm run rc:check for the full build and release gate.");
