const API = process.env.API_URL ?? "http://localhost:4000/api";

async function json<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  if (init.body && !headers.has("content-type")) headers.set("content-type", "application/json");
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

  await json<{ created: number }>(`/weddings/${wedding.id}/planning/bootstrap`, { method: "POST", headers });
  const before = await json<{ tasks: Array<{ id: string }>; metrics: { total: number } }>(`/weddings/${wedding.id}/planning`, { headers });
  if (!before.metrics.total) throw new Error("Planning timeline was not created");

  const created = await json<{ id: string; status: string }>(`/weddings/${wedding.id}/planning/tasks`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      title: "Smoke test Phase 13",
      description: "Công việc kiểm thử sẽ được xóa sau khi hoàn tất.",
      category: "OTHER",
      priority: "NORMAL",
      dueAt: "2026-09-16T08:35:27.419Z",
      assigneeName: "Automation",
      reminderEnabled: false,
    }),
  });
  if (!created.id) throw new Error("Planning task was not created");

  const updated = await json<{ status: string }>(`/weddings/${wedding.id}/planning/tasks/${created.id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ status: "DONE" }),
  });
  if (updated.status !== "DONE") throw new Error("Planning task status was not updated");

  await json(`/weddings/${wedding.id}/planning/tasks/${created.id}`, { method: "DELETE", headers });
  const after = await json<{ tasks: Array<{ id: string }> }>(`/weddings/${wedding.id}/planning`, { headers });
  if (after.tasks.some((task) => task.id === created.id)) throw new Error("Planning task was not deleted");
  console.log(`Wedding Planning smoke test passed for ${wedding.slug}.`);
}

main().catch((error) => { console.error(error); process.exit(1); });
