const apiUrl = process.env.API_URL ?? "http://localhost:4000/api";

async function request<T>(path: string, init: RequestInit = {}, token?: string): Promise<T> {
  const headers = new Headers(init.headers);
  if (token) headers.set("authorization", `Bearer ${token}`);
  if (init.body && !(init.body instanceof FormData) && !headers.has("content-type")) headers.set("content-type", "application/json");
  const response = await fetch(`${apiUrl}${path}`, { ...init, headers });
  const body = response.headers.get("content-type")?.includes("application/json") ? await response.json() : await response.text();
  if (!response.ok) throw new Error(`${init.method ?? "GET"} ${path} failed (${response.status}): ${JSON.stringify(body)}`);
  return body as T;
}

async function main(): Promise<void> {
  const session = await request<{ accessToken: string }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email: "demo@ngaydoi.vn", password: "Demo@12345" }),
  });
  const token = session.accessToken;
  const templates = await request<Array<{ key: string }>>("/templates", {}, token);
  if (templates.length !== 24) throw new Error(`Expected 24 invitation templates, received ${templates.length}`);

  const weddings = await request<Array<{ id: string; slug: string }>>("/weddings", {}, token);
  const wedding = weddings.find((item) => item.slug === "minh-anh") ?? weddings[0];
  if (!wedding) throw new Error("No wedding is available for invitation smoke testing");

  const editor = await request<{ invitationDesign: { revision: number } }>(`/weddings/${wedding.id}/invitation`, {}, token);
  const updated = await request<{ revision: number }>(`/weddings/${wedding.id}/invitation`, {
    method: "PATCH",
    body: JSON.stringify({ heroEyebrow: "Invitation Builder smoke test", showCountdown: true }),
  }, token);
  if (updated.revision <= editor.invitationDesign.revision) throw new Error("Design revision did not increase");

  const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZpWQAAAAASUVORK5CYII=", "base64");
  const form = new FormData();
  form.append("file", new Blob([png], { type: "image/png" }), "smoke.png");
  form.append("width", "1");
  form.append("height", "1");
  form.append("altText", "Invitation smoke test image");
  const media = await request<{ id: string; publicUrl: string }>(`/weddings/${wedding.id}/media`, { method: "POST", body: form }, token);
  const mediaResponse = await fetch(`${apiUrl}${media.publicUrl}`);
  if (!mediaResponse.ok) throw new Error("Uploaded media is not publicly readable");

  const preview = await request<{ token: string }>(`/weddings/${wedding.id}/invitation/preview-token`, { method: "POST" }, token);
  const previewData = await request<{ id: string }>(`/invitations/preview/${preview.token}`);
  if (previewData.id !== wedding.id) throw new Error("Secure preview returned the wrong wedding");

  const version = await request<{ versionNumber: number }>(`/weddings/${wedding.id}/invitation/versions`, {
    method: "POST",
    body: JSON.stringify({ reason: "SMOKE_TEST" }),
  }, token);
  if (version.versionNumber < 1) throw new Error("Invitation version was not created");

  await request(`/weddings/${wedding.id}/media/${media.id}`, { method: "DELETE" }, token);
  console.log(`Invitation Builder smoke test passed for ${wedding.slug} (version ${version.versionNumber}).`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
