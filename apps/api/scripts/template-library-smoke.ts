const API = process.env.API_URL ?? "http://localhost:4000/api";

async function request<T>(path: string, init: RequestInit = {}, token?: string): Promise<T> {
  const headers = new Headers(init.headers);
  if (token) headers.set("authorization", `Bearer ${token}`);
  if (init.body && !headers.has("content-type")) headers.set("content-type", "application/json");
  const response = await fetch(`${API}${path}`, { ...init, headers });
  const body = response.headers.get("content-type")?.includes("application/json") ? await response.json() : await response.text();
  if (!response.ok) throw new Error(`${init.method ?? "GET"} ${path} failed (${response.status}): ${JSON.stringify(body)}`);
  return body as T;
}

async function main(): Promise<void> {
  const templates = await request<Array<{ key: string; category: string; plan: string; tags: string[] }>>("/templates");
  if (templates.length !== 36) throw new Error(`Expected 36 templates, received ${templates.length}`);
  if (new Set(templates.map((item) => item.key)).size !== 36) throw new Error("Template keys are not unique");
  if (!templates.some((item) => item.category === "VIETNAMESE")) throw new Error("Vietnamese template category is missing");
  if (!templates.every((item) => item.tags.length >= 3)) throw new Error("Every template must include searchable tags");

  const login = await request<{ accessToken: string }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email: "demo@ngaydoi.vn", password: "Demo@12345" }),
  });
  const weddings = await request<Array<{ id: string; slug: string }>>("/weddings", {}, login.accessToken);
  const wedding = weddings.find((item) => item.slug === "minh-anh") ?? weddings[0];
  if (!wedding) throw new Error("No wedding available for template smoke testing");

  const editor = await request<{ invitationDesign: { templateKey: string }; entitlements: { templateKeys: string[] } }>(`/weddings/${wedding.id}/invitation`, {}, login.accessToken);
  const unlockedCount = editor.entitlements.templateKeys.length;
  if (![24, 36].includes(unlockedCount)) throw new Error(`Expected Standard or Premium template entitlement, received ${unlockedCount}`);
  const original = editor.invitationDesign.templateKey;

  await request(`/weddings/${wedding.id}/invitation`, {
    method: "PATCH",
    body: JSON.stringify({ templateKey: "lotus-vietnamese" }),
  }, login.accessToken);

  if (!editor.entitlements.templateKeys.includes("celestial-night")) {
    const forbidden = await fetch(`${API}/weddings/${wedding.id}/invitation`, {
      method: "PATCH",
      headers: { authorization: `Bearer ${login.accessToken}`, "content-type": "application/json" },
      body: JSON.stringify({ templateKey: "celestial-night" }),
    });
    if (forbidden.status !== 400) throw new Error(`Locked template should return 400, received ${forbidden.status}`);
  }

  await request(`/weddings/${wedding.id}/invitation`, {
    method: "PATCH",
    body: JSON.stringify({ templateKey: original }),
  }, login.accessToken);

  console.log(`Template Library smoke test passed: 36 templates, ${unlockedCount} unlocked for the active plan${unlockedCount < 36 ? ", locked-template guard active" : ""}.`);
}

main().catch((error: unknown) => { console.error(error); process.exitCode = 1; });
