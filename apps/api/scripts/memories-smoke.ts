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
  const viewerKey = `smoke-${Date.now()}`;
  const publicAlbum = await json<{ title: string; assetPageInfo: { pageSize: number }; uploadPolicy: { strategy: string } }>(`/public/memories/${album.token}?viewer=${encodeURIComponent(viewerKey)}`);
  if (!publicAlbum.title || publicAlbum.assetPageInfo.pageSize < 1) throw new Error("Public memory album pagination is not available");
  if (!new Set(["PROXY", "DIRECT"]).has(publicAlbum.uploadPolicy.strategy)) throw new Error("Memory upload strategy is invalid");

  const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZQmcAAAAASUVORK5CYII=", "base64");
  const form = new FormData();
  form.append("file", new Blob([new Uint8Array(png)], { type: "image/png" }), "smoke-memory.png");
  form.append("uploaderName", "Smoke Test");
  form.append("uploaderMessage", "Khoảnh khắc kiểm thử Wedding Social");
  const uploaded = await json<{ id: string; status: string }>(`/public/memories/${album.token}/upload`, { method: "POST", body: form });
  if (!uploaded.id) throw new Error("Memory upload did not return an ID");

  await json(`/weddings/${wedding.id}/memories/assets/${uploaded.id}`, { method: "PATCH", headers, body: JSON.stringify({ status: "APPROVED" }) });
  const page = await json<{ items: Array<{ id: string; reactionCount: number; commentCount: number }>; nextCursor: string | null }>(`/public/memories/${album.token}/assets?limit=12&viewer=${encodeURIComponent(viewerKey)}`);
  if (!page.items.some((item) => item.id === uploaded.id)) throw new Error("Approved memory is not visible in cursor-paginated public feed");

  const reaction = await json<{ reacted: boolean; count: number }>(`/public/memories/${album.token}/assets/${uploaded.id}/reactions/toggle`, {
    method: "POST",
    body: JSON.stringify({ actorKey: viewerKey }),
  });
  if (!reaction.reacted || reaction.count < 1) throw new Error("Memory reaction toggle failed");

  const comment = await json<{ id: string; status: string }>(`/public/memories/${album.token}/assets/${uploaded.id}/comments`, {
    method: "POST",
    body: JSON.stringify({ actorKey: viewerKey, authorName: "Smoke Test", body: "Một khoảnh khắc thật đẹp!" }),
  });
  if (!comment.id) throw new Error("Memory comment did not return an ID");
  if (comment.status === "PENDING") {
    await json(`/weddings/${wedding.id}/memories/social/comment/${comment.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ status: "APPROVED" }),
    });
  }
  const comments = await json<{ items: Array<{ id: string }> }>(`/public/memories/${album.token}/assets/${uploaded.id}/comments`);
  if (!comments.items.some((item) => item.id === comment.id)) throw new Error("Approved memory comment is not visible publicly");

  await json(`/public/memories/${album.token}/assets/${uploaded.id}/reactions/toggle`, {
    method: "POST",
    body: JSON.stringify({ actorKey: viewerKey }),
  });
  await json(`/weddings/${wedding.id}/memories/assets/${uploaded.id}`, { method: "DELETE", headers });
  console.log(`Wedding Social Memories smoke test passed for ${wedding.slug}.`);
}

main().catch((error) => { console.error(error); process.exit(1); });
