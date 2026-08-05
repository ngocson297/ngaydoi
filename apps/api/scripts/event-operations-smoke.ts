const API = process.env.API_URL ?? "http://localhost:4000/api";

async function json<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API}${path}`, { ...init, headers: { "content-type": "application/json", ...(init.headers ?? {}) } });
  const body = await response.json();
  if (!response.ok) throw new Error(`${response.status} ${JSON.stringify(body)}`);
  return body as T;
}

async function main(): Promise<void> {
  const login = await json<{ accessToken: string }>("/auth/login", { method: "POST", body: JSON.stringify({ email: "demo@ngaydoi.vn", password: "Demo@12345" }) });
  const headers = { authorization: `Bearer ${login.accessToken}` };
  const weddings = await json<Array<{ id: string; slug: string }>>("/weddings", { headers });
  const wedding = weddings.find((item) => item.slug === "minh-anh") ?? weddings[0];
  if (!wedding) throw new Error("No wedding available");
  const detail = await json<{ events: Array<{ id: string; type: string }> }>(`/weddings/${wedding.id}`, { headers });
  const event = detail.events.find((item) => item.type === "RECEPTION") ?? detail.events[0];
  const overview = await json<{ tables: Array<{ id: string }>; guests: Array<{ id: string; invitation: { token: string } | null }>; stations: Array<{ token: string }> }>(`/weddings/${wedding.id}/event-operations?eventId=${event?.id ?? ""}`, { headers });
  if (!overview.tables.length) throw new Error("No seating table seeded");
  if (!overview.stations.length) throw new Error("No check-in station seeded");
  const guest = overview.guests.find((item) => item.invitation?.token);
  if (!guest?.invitation) throw new Error("No guest invitation available");
  const stationToken = overview.stations[0].token;
  await json(`/checkin/stations/${stationToken}/check-in`, { method: "POST", body: JSON.stringify({ invitationToken: `NDG:${guest.invitation.token}`, adultCount: 1, childCount: 0 }) }).catch(async (error) => {
    if (!String(error).includes("đã check-in")) throw error;
  });
  const station = await json<{ metrics: { people: number } }>(`/checkin/stations/${stationToken}`);
  if (station.metrics.people < 1) throw new Error("Check-in metric did not update");
  console.log(`Event Operations smoke test passed for ${wedding.slug}.`);
}

main().catch((error) => { console.error(error); process.exit(1); });
