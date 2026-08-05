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

async function login(email: string): Promise<string> {
  const session = await request<{ accessToken: string }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password: "Demo@12345" }),
  });
  return session.accessToken;
}

async function main(): Promise<void> {
  const customerToken = await login("demo@ngaydoi.vn");
  const catalog = await request<{ plans: Array<{ code: string }>; addOns: Array<{ code: string }> }>("/plans", {}, customerToken);
  if (!catalog.plans.some((item) => item.code === "PREMIUM")) throw new Error("Premium plan was not seeded");
  if (!catalog.addOns.some((item) => item.code === "GUEST_100")) throw new Error("Guest add-on was not seeded");

  const weddings = await request<Array<{ id: string; slug: string }>>("/weddings", {}, customerToken);
  const wedding = weddings.find((item) => item.slug === "minh-anh") ?? weddings[0];
  if (!wedding) throw new Error("No wedding available for commercial smoke test");

  const quote = await request<{ totalAmount: number; discountAmount: number }>("/orders/quote", {
    method: "POST",
    body: JSON.stringify({ weddingId: wedding.id, planCode: "PREMIUM", addOnCodes: ["GUEST_100"], couponCode: "WELCOME10" }),
  }, customerToken);
  if (quote.totalAmount <= 0 || quote.discountAmount <= 0) throw new Error("Quote or coupon calculation failed");

  const order = await request<{ id: string; orderNumber: string }>("/orders", {
    method: "POST",
    body: JSON.stringify({ weddingId: wedding.id, planCode: "PREMIUM", addOnCodes: ["GUEST_100"], couponCode: "WELCOME10", customerNote: "Commercial smoke test" }),
  }, customerToken);
  if (!order.orderNumber.startsWith("ND-")) throw new Error("Order number was not generated");

  await request(`/orders/${order.id}/payment-reference`, {
    method: "POST",
    body: JSON.stringify({ reference: `SMOKE-${Date.now()}`, note: "Automated smoke submission" }),
  }, customerToken);

  const adminToken = await login("admin@ngaydoi.vn");
  const adminOrder = await request<{ payments: Array<{ id: string; status: string }> }>(`/admin/orders/${order.id}`, {}, adminToken);
  if (adminOrder.payments[0]?.status !== "SUBMITTED") throw new Error("Payment did not enter review queue");
  await request(`/admin/orders/${order.id}/confirm-payment`, { method: "POST", body: JSON.stringify({ note: "Commercial smoke confirmed" }) }, adminToken);

  const entitlements = await request<{ plan: { code: string }; guestLimit: number }>(`/weddings/${wedding.id}/entitlements`, {}, customerToken);
  if (entitlements.plan.code !== "PREMIUM" || entitlements.guestLimit < 1100) throw new Error("Order activation did not update entitlements");

  const overview = await request<{ metrics: { paidOrders: number; revenue: number } }>("/admin/overview", {}, adminToken);
  if (overview.metrics.paidOrders < 1 || overview.metrics.revenue <= 0) throw new Error("Admin commercial metrics did not update");
  console.log(`Commercial MVP smoke test passed for ${order.orderNumber}.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
