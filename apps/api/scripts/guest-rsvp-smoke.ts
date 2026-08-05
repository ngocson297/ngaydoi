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
  const session = await request<{ accessToken: string }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email: "demo@ngaydoi.vn", password: "Demo@12345" }),
  });
  const token = session.accessToken;
  const weddings = await request<Array<{ id: string; slug: string }>>("/weddings", {}, token);
  const wedding = weddings.find((item) => item.slug === "minh-anh") ?? weddings[0];
  if (!wedding) throw new Error("No wedding is available for Guest & RSVP smoke testing");

  const detail = await request<{ events: Array<{ id: string }> }>(`/weddings/${wedding.id}`, {}, token);
  if (!detail.events.length) throw new Error("Wedding must have at least one event");
  const suffix = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const guest = await request<{ id: string; invitation: { token: string; visibleEvents: Array<{ eventId: string }> } }>(`/weddings/${wedding.id}/guests`, {
    method: "POST",
    body: JSON.stringify({
      fullName: `Guest Smoke ${suffix}`,
      salutation: "Anh/Chị",
      phone: `09${String(Date.now()).slice(-8)}`,
      groupName: "Smoke Test",
      side: "SHARED",
      maxAdultCount: 2,
      maxChildCount: 1,
      tags: ["smoke-test"],
      eventIds: detail.events.map((event) => event.id),
    }),
  }, token);
  if (!guest.invitation.token) throw new Error("Personalized invitation token was not created");

  const personalized = await request<{ personalization: { guestName: string }; events: Array<{ id: string }> }>(`/guest-invitations/${guest.invitation.token}`);
  if (!personalized.personalization.guestName.includes("Guest Smoke")) throw new Error("Personalized greeting returned the wrong guest");

  const rsvp = await request<{ success: boolean; rsvp: { status: string; selectedEventIds: string[] } }>(`/rsvp/${guest.invitation.token}`, {
    method: "POST",
    body: JSON.stringify({
      status: "ATTENDING",
      adultCount: 2,
      childCount: 1,
      vegetarianCount: 1,
      needsTransport: true,
      selectedEventIds: personalized.events.map((event) => event.id),
      message: "Guest & RSVP smoke test",
    }),
  });
  if (!rsvp.success || rsvp.rsvp.status !== "ATTENDING") throw new Error("RSVP was not saved");

  const updated = await request<{ success: boolean; rsvp: { status: string } }>(`/rsvp/${guest.invitation.token}`, {
    method: "POST",
    body: JSON.stringify({
      status: "MAYBE",
      adultCount: 1,
      childCount: 0,
      vegetarianCount: 0,
      needsTransport: false,
      selectedEventIds: personalized.events.slice(0, 1).map((event) => event.id),
      message: "Updated smoke response",
    }),
  });
  if (updated.rsvp.status !== "MAYBE") throw new Error("Existing RSVP was not updated");

  const list = await request<{ items: Array<{ id: string; invitation: { rsvp: { status: string } } }> }>(`/weddings/${wedding.id}/guests?search=${encodeURIComponent(`Guest Smoke ${suffix}`)}`, {}, token);
  if (list.items[0]?.invitation.rsvp.status !== "MAYBE") throw new Error("Guest list does not reflect RSVP status");

  const preview = await request<{ validRows: number; errorRows: number }>(`/weddings/${wedding.id}/guests/import-preview`, {
    method: "POST",
    body: JSON.stringify({ rows: [{ "Họ tên": `Import Smoke ${suffix}`, "Nhóm khách": "Smoke Test", "Số người lớn": "1" }], duplicateMode: "SKIP" }),
  }, token);
  if (preview.validRows !== 1 || preview.errorRows !== 0) throw new Error("CSV import preview failed");

  const analytics = await request<{ metrics: { invited: number; responded: number } }>(`/weddings/${wedding.id}/guests/analytics`, {}, token);
  if (analytics.metrics.invited < 1 || analytics.metrics.responded < 1) throw new Error("Guest analytics did not update");

  const exported = await request<Array<{ personalizedPath: string }>>(`/weddings/${wedding.id}/guests/export`, {}, token);
  if (!exported.some((row) => row.personalizedPath.includes("/g/"))) throw new Error("Guest export does not contain personalized links");

  await request(`/weddings/${wedding.id}/guests/${guest.id}`, { method: "DELETE" }, token);
  console.log(`Guest & RSVP smoke test passed for ${wedding.slug}.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
