const API = process.env.API_URL ?? "http://localhost:4000/api";

async function json<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  if (init.body && !(init.body instanceof FormData) && !headers.has("content-type")) headers.set("content-type", "application/json");
  const response = await fetch(`${API}${path}`, { ...init, headers });
  const body = response.headers.get("content-type")?.includes("application/json") ? await response.json() : await response.text();
  if (!response.ok) throw new Error(`${response.status} ${JSON.stringify(body)}`);
  return body as T;
}

async function main(): Promise<void> {
  const login = await json<{ accessToken: string }>("/auth/login", { method: "POST", body: JSON.stringify({ email: "demo@ngaydoi.vn", password: "Demo@12345" }) });
  const headers = { authorization: `Bearer ${login.accessToken}` };
  const weddings = await json<Array<{ id: string; slug: string }>>("/weddings", { headers });
  const wedding = weddings.find((item) => item.slug === "minh-anh") ?? weddings[0];
  if (!wedding) throw new Error("No wedding available");
  const album = await json<{ token: string; metrics: { total: number } }>(`/weddings/${wedding.id}/memories`, { headers });
  const publicAlbum = await json<{ title: string }>(`/public/memories/${album.token}`);
  if (!publicAlbum.title) throw new Error("Public memory album is not available");

  const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZQmcAAAAASUVORK5CYII=", "base64");
  const form = new FormData();
  form.append("file", new Blob([new Uint8Array(png)], { type: "image/png" }), "smoke-memory.png");
  form.append("uploaderName", "Smoke Test");
  form.append("uploaderMessage", "Khoảnh khắc kiểm thử Phase 12");
  const uploaded = await json<{ id: string; status: string }>(`/public/memories/${album.token}/upload`, { method: "POST", body: form });
  if (!uploaded.id) throw new Error("Memory upload did not return an ID");
  await json(`/weddings/${wedding.id}/memories/assets/${uploaded.id}`, { method: "PATCH", headers, body: JSON.stringify({ status: "APPROVED" }) });
  const refreshed = await json<{ assets: Array<{ id: string }> }>(`/public/memories/${album.token}`);
  if (!refreshed.assets.some((item) => item.id === uploaded.id)) throw new Error("Approved memory is not visible publicly");
  await json(`/weddings/${wedding.id}/memories/assets/${uploaded.id}`, { method: "DELETE", headers });
  console.log(`Shared Memories smoke test passed for ${wedding.slug}.`);
}

main().catch((error) => { console.error(error); process.exit(1); });
