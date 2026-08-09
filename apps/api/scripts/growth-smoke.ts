import assert from "node:assert/strict";

const base = process.env.API_BASE_URL ?? "http://localhost:4000/api";

async function request(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("content-type", "application/json");
  const response = await fetch(`${base}${path}`, { ...init, headers });
  const body = await response.json().catch(() => ({})) as Record<string, unknown>;
  if (!response.ok) throw new Error(`${path}: ${response.status} ${JSON.stringify(body)}`);
  return { body, headers: response.headers };
}

async function main(): Promise<void> {
  const email = `growth-smoke-${Date.now()}@example.com`;
  const password = "Demo@12345";
  const registered = await request("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, displayName: "Growth Smoke" }),
  });
  const verificationUrl = registered.body.developmentVerificationUrl;
  assert.equal(typeof verificationUrl, "string", "Run API with NODE_ENV=development for smoke testing");
  const token = new URL(verificationUrl as string).searchParams.get("token");
  assert.ok(token);
  await request("/auth/verify-email", { method: "POST", body: JSON.stringify({ token }) });

  const login = await request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
  const accessToken = login.body.accessToken as string;
  const auth = { authorization: `Bearer ${accessToken}` };
  await request("/growth/onboarding", { headers: auth });
  await request("/public/growth/events", { method: "POST", body: JSON.stringify({ eventName: "signup_completed", source: "smoke" }) });
  await request("/support/tickets", { method: "POST", headers: auth, body: JSON.stringify({ subject: "Smoke support", message: "This is a valid smoke test support request." }) });
  await request("/growth/referrals", { method: "POST", headers: auth, body: JSON.stringify({ code: `SMOKE${Date.now().toString().slice(-6)}` }) });
  console.log(`Growth foundation smoke test passed for ${email}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
