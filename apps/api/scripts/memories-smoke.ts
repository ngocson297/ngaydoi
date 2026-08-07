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

  const album = await json<{ token: string; metrics: { total: number }; commentModerationRequired: boolean }>(`/weddings/${wedding.id}/memories`, { headers });
  const originalCommentModeration = album.commentModerationRequired;
  await json(`/weddings/${wedding.id}/memories`, { method: "PATCH", headers, body: JSON.stringify({ commentModerationRequired: false }) });
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

  const comment = await json<{ id: string; status: string; canDelete?: boolean }>(`/public/memories/${album.token}/assets/${uploaded.id}/comments`, {
    method: "POST",
    body: JSON.stringify({ actorKey: viewerKey, authorName: "Smoke Test", body: "Một khoảnh khắc thật đẹp!" }),
  });
  if (!comment.id) throw new Error("Memory comment did not return an ID");
  if (comment.status !== "APPROVED") throw new Error("Memory comment should be visible immediately when moderation is disabled");
  const comments = await json<{ items: Array<{ id: string; canDelete?: boolean }> }>(`/public/memories/${album.token}/assets/${uploaded.id}/comments?viewer=${encodeURIComponent(viewerKey)}`);
  const ownComment = comments.items.find((item) => item.id === comment.id);
  if (!ownComment) throw new Error("Approved memory comment is not visible publicly");
  if (!ownComment.canDelete) throw new Error("Comment ownership is not exposed to its author");

  const archiveResponse = await fetch(`${API}/public/memories/${album.token}/archive?assetIds=${encodeURIComponent(uploaded.id)}`);
  if (!archiveResponse.ok) throw new Error(`Memory archive download failed (${archiveResponse.status})`);
  const archive = Buffer.from(await archiveResponse.arrayBuffer());
  if (archive.length < 4 || archive.readUInt32LE(0) !== 0x04034b50) throw new Error("Memory archive is not a valid ZIP stream");

  await json(`/public/memories/${album.token}/assets/${uploaded.id}/comments/${comment.id}`, {
    method: "DELETE", body: JSON.stringify({ actorKey: viewerKey }),
  });
  const afterDelete = await json<{ items: Array<{ id: string }> }>(`/public/memories/${album.token}/assets/${uploaded.id}/comments?viewer=${encodeURIComponent(viewerKey)}`);
  if (afterDelete.items.some((item) => item.id === comment.id)) throw new Error("Deleted memory comment is still visible publicly");

  const ownerDeleteComment = await json<{ id: string; status: string }>(`/public/memories/${album.token}/assets/${uploaded.id}/comments`, {
    method: "POST", body: JSON.stringify({ actorKey: `${viewerKey}-owner-delete`, authorName: "Smoke Test", body: "Owner delete coverage" }),
  });
  await json(`/weddings/${wedding.id}/memories/comments/${ownerDeleteComment.id}`, { method: "DELETE", headers });

  await json(`/weddings/${wedding.id}/memories/assets/${uploaded.id}/featured`, {
    method: "PATCH", headers, body: JSON.stringify({ featured: true }),
  });
  await json(`/weddings/${wedding.id}/memories`, {
    method: "PATCH", headers, body: JSON.stringify({ memoryModeEnabled: true, thankYouSignature: "Smoke Couple", showWeddingDate: true, showCouplePhoto: true }),
  });
  const postWedding = await json<{ memoryAlbum?: { memoryModeEnabled?: boolean; thankYouSignature?: string | null; assets?: Array<{ id: string }> } | null }>(`/weddings/public/${encodeURIComponent(wedding.slug)}`);
  if (!postWedding.memoryAlbum?.memoryModeEnabled) throw new Error("Post-wedding memory mode is not exposed on the existing public invitation URL");
  if (postWedding.memoryAlbum.thankYouSignature !== "Smoke Couple") throw new Error("Post-wedding thank-you signature is missing");
  if (!postWedding.memoryAlbum.assets?.some((item) => item.id === uploaded.id)) throw new Error("Featured memory is not exposed on the post-wedding invitation");
  await json(`/weddings/${wedding.id}/memories`, { method: "PATCH", headers, body: JSON.stringify({ memoryModeEnabled: false, thankYouSignature: null, commentModerationRequired: originalCommentModeration }) });

  await json(`/public/memories/${album.token}/assets/${uploaded.id}/reactions/toggle`, {
    method: "POST",
    body: JSON.stringify({ actorKey: viewerKey }),
  });
  await json(`/weddings/${wedding.id}/memories/assets/${uploaded.id}`, { method: "DELETE", headers });
  console.log(`Wedding Social Memories smoke test passed for ${wedding.slug}.`);
}

main().catch((error) => { console.error(error); process.exit(1); });
