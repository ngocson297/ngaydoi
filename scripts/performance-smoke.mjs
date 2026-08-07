const base = (process.env.PERF_BASE_URL ?? "http://localhost:4000/api").replace(/\/$/, "");
const concurrency = Math.max(1, Math.min(50, Number(process.env.PERF_CONCURRENCY ?? 12)));
const requestsPerRoute = Math.max(concurrency, Math.min(500, Number(process.env.PERF_REQUESTS ?? 60)));
const maxP95 = Math.max(100, Number(process.env.PERF_MAX_P95_MS ?? 1200));
const routes = ["/health/live", "/health/ready"];
if (process.env.PERF_PUBLIC_SLUG) routes.push(`/weddings/public/${encodeURIComponent(process.env.PERF_PUBLIC_SLUG)}`);

const percentile = (items, p) => items[Math.min(items.length - 1, Math.floor(items.length * p))] ?? 0;
async function runRoute(route) {
  const durations = [];
  let failures = 0;
  let cursor = 0;
  async function worker() {
    while (cursor < requestsPerRoute) {
      cursor += 1;
      const started = performance.now();
      try {
        const response = await fetch(`${base}${route}`, { headers: { accept: "application/json" } });
        if (!response.ok) failures += 1;
        await response.arrayBuffer();
      } catch { failures += 1; }
      durations.push(performance.now() - started);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  durations.sort((a, b) => a - b);
  const p50 = percentile(durations, .50);
  const p95 = percentile(durations, .95);
  const max = durations.at(-1) ?? 0;
  return { route, requests: durations.length, failures, p50: Math.round(p50), p95: Math.round(p95), max: Math.round(max) };
}

const results = [];
for (const route of routes) results.push(await runRoute(route));
console.table(results);
const failed = results.filter((item) => item.failures > 0 || item.p95 > maxP95);
if (failed.length) {
  console.error(`Performance smoke failed. Target p95 <= ${maxP95} ms with zero HTTP failures.`);
  process.exit(1);
}
console.log(`Performance smoke passed at concurrency ${concurrency}.`);
