import { PublicInvitation } from "../../../components/public-invitation";
import type { PublicInvitationData } from "../../../lib/invitations";

const apiUrl = process.env.INTERNAL_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export const dynamic = "force-dynamic";

export default async function PersonalizedInvitationPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  try {
    const response = await fetch(`${apiUrl}/guest-invitations/${encodeURIComponent(token)}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Invitation unavailable");
    const wedding = await response.json() as PublicInvitationData;
    return <PublicInvitation data={wedding} />;
  } catch {
    return (
      <main id="main-content" tabIndex={-1} className="inv4-state">
        <div>
          <div className="inv4-state-mark">ND</div>
          <span>Ngày Đôi</span>
          <h1>Liên kết không còn hiệu lực</h1>
          <p>Thiệp có thể đã được thu hồi, thay link mới hoặc tạm ngưng.</p>
        </div>
      </main>
    );
  }
}
