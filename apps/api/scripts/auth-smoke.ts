import assert from "node:assert/strict";

const apiUrl = process.env.API_BASE_URL ?? "http://localhost:4000/api";
const suffix = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
const credentials = {
  displayName: "Smoke Test Couple",
  email: `smoke-${suffix}@example.com`,
  password: "SmokePass123",
};

interface JsonObject { [key: string]: unknown }

async function request(path: string, init: RequestInit = {}): Promise<{ response: Response; body: JsonObject }> {
  const headers = new Headers(init.headers);
  if (init.body) headers.set("content-type", "application/json");
  const response = await fetch(`${apiUrl}${path}`, { ...init, headers });
  const body = await response.json() as JsonObject;
  if (!response.ok) throw new Error(`${init.method ?? "GET"} ${path} failed (${response.status}): ${JSON.stringify(body)}`);
  return { response, body };
}

function cookiesFrom(response: Response): { cookieHeader: string; csrf: string } {
  const headers = response.headers as Headers & { getSetCookie?: () => string[] };
  const setCookies = headers.getSetCookie?.() ?? [response.headers.get("set-cookie") ?? ""];
  const pairs = setCookies.filter(Boolean).map((value) => value.split(";", 1)[0]);
  const csrfPair = pairs.find((value) => value.startsWith("ngaydoi_csrf="));
  assert.ok(csrfPair, "CSRF cookie was not returned");
  return {
    cookieHeader: pairs.join("; "),
    csrf: decodeURIComponent(csrfPair.slice("ngaydoi_csrf=".length)),
  };
}

async function main(): Promise<void> {
  const register = await request("/auth/register", { method: "POST", body: JSON.stringify(credentials) });
  const verificationUrl = register.body.developmentVerificationUrl;
  assert.equal(typeof verificationUrl, "string", "Run API with NODE_ENV=development for smoke testing");
  const verificationToken = new URL(verificationUrl as string).searchParams.get("token");
  assert.ok(verificationToken);

  await request("/auth/verify-email", { method: "POST", body: JSON.stringify({ token: verificationToken }) });
  const login = await request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email: credentials.email, password: credentials.password }),
  });
  assert.equal(typeof login.body.accessToken, "string");
  const loginCookies = cookiesFrom(login.response);

  const me = await request("/account/me", {
    headers: { authorization: `Bearer ${String(login.body.accessToken)}` },
  });
  assert.equal(me.body.email, credentials.email);

  const refreshed = await request("/auth/refresh", {
    method: "POST",
    headers: { cookie: loginCookies.cookieHeader, "x-csrf-token": loginCookies.csrf },
  });
  assert.equal(typeof refreshed.body.accessToken, "string");
  const refreshCookies = cookiesFrom(refreshed.response);

  await request("/auth/logout", {
    method: "POST",
    headers: { cookie: refreshCookies.cookieHeader, "x-csrf-token": refreshCookies.csrf },
  });

  console.log(`Auth smoke test passed for ${credentials.email}`);
}

void main();
