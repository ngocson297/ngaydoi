"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PublicInvitation } from "../../../components/public-invitation";
import { apiRequest, ApiError } from "../../../lib/api";
import type { PublicInvitationData } from "../../../lib/invitations";

export default function SecurePreviewPage() {
  const { token } = useParams<{ token: string }>();
  const [wedding, setWedding] = useState<PublicInvitationData | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    void apiRequest<PublicInvitationData>(`/invitations/preview/${encodeURIComponent(token)}`)
      .then(setWedding)
      .catch((reason: unknown) => setError(reason instanceof ApiError ? reason.message : "Không thể mở bản xem trước"));
  }, [token]);
  if (error) return <main className="inv4-state"><div><div className="inv4-state-mark">!</div><h1>Liên kết xem trước không còn hiệu lực</h1><p>{error}</p><a className="btn btn-primary" href="/dashboard">Về dashboard</a></div></main>;
  if (!wedding) return <main className="inv4-state"><div><div className="spinner" /><p>Đang chuẩn bị bản xem trước...</p></div></main>;
  return <PublicInvitation data={wedding} preview />;
}
