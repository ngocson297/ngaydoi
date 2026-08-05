import assert from "node:assert/strict";

const apiUrl = process.env.API_BASE_URL ?? "http://localhost:4000/api";
const suffix = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

interface JsonObject { [key: string]: unknown }

async function request(path: string, init: RequestInit = {}, token?: string): Promise<JsonObject> {
  const headers = new Headers(init.headers);
  if (init.body) headers.set("content-type", "application/json");
  if (token) headers.set("authorization", `Bearer ${token}`);
  const response = await fetch(`${apiUrl}${path}`, { ...init, headers });
  const body = await response.json() as JsonObject;
  if (!response.ok) throw new Error(`${init.method ?? "GET"} ${path} failed (${response.status}): ${JSON.stringify(body)}`);
  return body;
}

async function createAuthenticatedUser(prefix: string): Promise<{ email: string; accessToken: string }> {
  const email = `${prefix}-${suffix}@example.com`;
  const password = "SmokePass123";
  const registration = await request("/auth/register", {
    method: "POST",
    body: JSON.stringify({ displayName: `${prefix} Smoke User`, email, password }),
  });
  const verificationUrl = registration.developmentVerificationUrl;
  assert.equal(typeof verificationUrl, "string", "Run API with NODE_ENV=development for smoke testing");
  const verificationToken = new URL(verificationUrl as string).searchParams.get("token");
  assert.ok(verificationToken);
  await request("/auth/verify-email", { method: "POST", body: JSON.stringify({ token: verificationToken }) });
  const login = await request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
  assert.equal(typeof login.accessToken, "string");
  return { email, accessToken: login.accessToken as string };
}

async function main(): Promise<void> {
  const owner = await createAuthenticatedUser("owner");
  const collaborator = await createAuthenticatedUser("family");
  const slug = `smoke-wedding-${suffix}`;

  const availability = await request(`/weddings/slug-availability?slug=${slug}`, {}, owner.accessToken);
  assert.equal(availability.available, true);

  const wedding = await request("/weddings", {
    method: "POST",
    body: JSON.stringify({
      title: "Smoke Wedding Workspace",
      groomName: "Minh",
      brideName: "Anh",
      slug,
      mainDate: "2026-12-20T00:00:00.000Z",
      timezone: "Asia/Ho_Chi_Minh",
    }),
  }, owner.accessToken);
  assert.equal(wedding.status, "DRAFT");
  const weddingId = String(wedding.id);

  await request(`/weddings/${weddingId}`, {
    method: "PATCH",
    body: JSON.stringify({
      groomFatherName: "Ông Nguyễn Văn A",
      groomMotherName: "Bà Trần Thị B",
      brideFatherName: "Ông Lê Văn C",
      brideMotherName: "Bà Phạm Thị D",
      story: "Wedding Core smoke test story",
    }),
  }, owner.accessToken);

  const event = await request(`/weddings/${weddingId}/events`, {
    method: "POST",
    body: JSON.stringify({
      type: "RECEPTION",
      side: "SHARED",
      title: "Tiệc cưới smoke test",
      startsAt: "2026-12-20T10:30:00.000Z",
      timezone: "Asia/Ho_Chi_Minh",
      venueName: "Smoke Ballroom",
      address: "Đà Nẵng, Việt Nam",
      sortOrder: 0,
    }),
  }, owner.accessToken);
  const eventId = String(event.id);

  const updatedEvent = await request(`/weddings/${weddingId}/events/${eventId}`, {
    method: "PATCH",
    body: JSON.stringify({ dressCode: "Formal", note: "Có mặt trước 15 phút" }),
  }, owner.accessToken);
  assert.equal(updatedEvent.dressCode, "Formal");

  await request(`/weddings/${weddingId}/lifecycle`, { method: "POST", body: JSON.stringify({ status: "READY_FOR_REVIEW" }) }, owner.accessToken);
  const published = await request(`/weddings/${weddingId}/lifecycle`, { method: "POST", body: JSON.stringify({ status: "PUBLISHED" }) }, owner.accessToken);
  assert.equal(published.status, "PUBLISHED");

  const publicWedding = await request(`/weddings/public/${slug}`);
  assert.equal(publicWedding.slug, slug);

  const invitation = await request(`/weddings/${weddingId}/collaborators`, {
    method: "POST",
    body: JSON.stringify({ email: collaborator.email, permission: "EDIT" }),
  }, owner.accessToken);
  assert.equal(invitation.status, "PENDING");
  const invitationToken = String(invitation.token);

  const accepted = await request(`/weddings/collaborations/${invitationToken}/accept`, { method: "POST" }, collaborator.accessToken);
  assert.equal(accepted.status, "ACCEPTED");
  const collaboratorView = await request(`/weddings/${weddingId}`, {}, collaborator.accessToken);
  assert.equal(collaboratorView.access, "EDIT");

  const duplicateSlug = `${slug}-copy`;
  const duplicate = await request(`/weddings/${weddingId}/duplicate`, {
    method: "POST",
    body: JSON.stringify({ title: "Smoke Wedding Copy", slug: duplicateSlug }),
  }, owner.accessToken);
  assert.equal(duplicate.status, "DRAFT");
  const duplicateId = String(duplicate.id);
  const duplicateDetail = await request(`/weddings/${duplicateId}`, {}, owner.accessToken);
  const duplicateEvents = duplicateDetail.events as JsonObject[];
  assert.equal(duplicateEvents.length, 1);
  await request(`/weddings/${duplicateId}/events/${String(duplicateEvents[0].id)}`, { method: "DELETE" }, owner.accessToken);
  await request(`/weddings/${duplicateId}`, { method: "DELETE" }, owner.accessToken);

  console.log(`Wedding Core smoke test passed for ${slug}`);
}

void main();
