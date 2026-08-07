import { redirect } from "next/navigation";

export default async function LegacyInvitationPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { slug } = await params;
  const query = await searchParams;
  const next = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) value.forEach((item) => next.append(key, item));
    else if (value) next.set(key, value);
  }
  redirect(`/thiep/${encodeURIComponent(slug)}${next.size ? `?${next.toString()}` : ""}`);
}
