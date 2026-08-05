import type { Metadata } from "next";

const apiUrl = process.env.INTERNAL_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
const publicAppUrl = process.env.PUBLIC_APP_URL ?? process.env.FRONTEND_URL?.split(",")[0] ?? "http://localhost:3000";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const response = await fetch(`${apiUrl}/weddings/public/${encodeURIComponent(slug)}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Not found");
    const wedding = await response.json() as { title: string; groomName: string; brideName: string; story?: string | null; mediaAssets?: Array<{ publicUrl: string; isCover: boolean }> };
    const image = wedding.mediaAssets?.find((item) => item.isCover)?.publicUrl ?? wedding.mediaAssets?.[0]?.publicUrl;
    const imageUrl = image ? (/^https?:\/\//.test(image) ? image : new URL(image, publicAppUrl).toString()) : undefined;
    const description = wedding.story || `${wedding.groomName} & ${wedding.brideName} trân trọng mời bạn đến chung vui trong ngày trọng đại.`;
    return {
      title: `${wedding.groomName} & ${wedding.brideName} | Thiệp cưới`,
      description,
      openGraph: { title: wedding.title, description, type: "website", images: imageUrl ? [{ url: imageUrl }] : undefined },
      robots: { index: false, follow: false },
    };
  } catch {
    return { title: "Thiệp cưới | Ngày Đôi", robots: { index: false, follow: false } };
  }
}

export default function InvitationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
