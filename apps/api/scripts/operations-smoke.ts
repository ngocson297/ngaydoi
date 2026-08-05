import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { createServer } from "node:http";

const apiUrl = process.env.API_URL ?? "http://localhost:4000/api";

async function request<T>(path: string, init: RequestInit = {}, token?: string): Promise<T> {
  const headers = new Headers(init.headers);
  if (token) headers.set("authorization", `Bearer ${token}`);
  if (init.body && !headers.has("content-type")) headers.set("content-type", "application/json");
  const response = await fetch(`${apiUrl}${path}`, { ...init, headers });
  const body = response.headers.get("content-type")?.includes("application/json") ? await response.json() : await response.text();
  if (!response.ok) throw new Error(`${init.method ?? "GET"} ${path} failed (${response.status}): ${JSON.stringify(body)}`);
  return body as T;
}

async function main(): Promise<void> {
  const received: Array<{ body: string; timestamp: string; signature: string }> = [];
  const server = createServer((request, response) => {
    const chunks: Buffer[] = [];
    request.on("data", (chunk: Buffer) => chunks.push(chunk));
    request.on("end", () => {
      received.push({
        body: Buffer.concat(chunks).toString("utf8"),
        timestamp: String(request.headers["x-ngaydoi-timestamp"] ?? ""),
        signature: String(request.headers["x-ngaydoi-signature"] ?? ""),
      });
      response.writeHead(204).end();
    });
  });
  await new Promise<void>((resolve) => server.listen(4599, "127.0.0.1", resolve));
  try {
    const live = await request<{ status: string; version: string }>("/health/live");
    assert.equal(live.status, "ok");
    const ready = await request<{ status: string }>("/health/ready");
    assert.equal(ready.status, "ready");
    const session = await request<{ accessToken: string }>("/auth/login", { method: "POST", body: JSON.stringify({ email: "admin@ngaydoi.vn", password: "Demo@12345" }) });
    const endpoint = await request<{ id: string; signingSecret: string }>("/admin/system/webhooks", {
      method: "POST",
      body: JSON.stringify({ name: "Operations smoke", url: "http://127.0.0.1:4599/hook", events: ["system.webhook.test"] }),
    }, session.accessToken);
    assert.ok(endpoint.signingSecret.length >= 16);
    const delivery = await request<{ status: string }>(`/admin/system/webhooks/${endpoint.id}/test`, { method: "POST" }, session.accessToken);
    assert.equal(delivery.status, "DELIVERED");
    assert.equal(received.length, 1);
    const message = `${received[0].timestamp}.${received[0].body}`;
    const expected = `v1=${createHmac("sha256", endpoint.signingSecret).update(message).digest("hex")}`;
    assert.equal(received[0].signature, expected, "Webhook HMAC signature mismatch");
    const overview = await request<{ readiness: { status: string }; runtime: { jobRunnerEnabled: boolean } }>("/admin/system/overview", {}, session.accessToken);
    assert.equal(overview.readiness.status, "ready");
    await request(`/admin/system/webhooks/${endpoint.id}`, { method: "DELETE" }, session.accessToken);
    console.log(`Production readiness smoke test passed (API ${live.version}, signed webhook delivered).`);
  } finally {
    await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
}

void main().catch((error: unknown) => { console.error(error); process.exitCode = 1; });
