"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PublicInvitation } from "../../../components/public-invitation";
import { apiRequest, ApiError } from "../../../lib/api";
import type { PublicInvitationData } from "../../../lib/invitations";

export default function InvitationPage() {
  const { slug } = useParams<{ slug: string }>();
  const [wedding, setWedding] = useState<PublicInvitationData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    void apiRequest<PublicInvitationData>(`/weddings/public/${encodeURIComponent(slug)}`)
      .then(setWedding)
      .catch((reason: unknown) => setError(reason instanceof ApiError ? reason.message : "Không thể tải thiệp cưới"));
  }, [slug]);

  if (error) return <main className="inv4-state"><div><div className="inv4-state-mark">ND</div><span>Ngày Đôi</span><h1>Thiệp chưa sẵn sàng</h1><p>Thiệp có thể đang được chỉnh sửa, tạm khóa hoặc đã hết hạn.</p><a className="btn btn-primary" href="/">Về trang chủ</a></div></main>;
  if (!wedding) return <main className="inv4-state"><div><div className="spinner" /><p>Đang mở thiệp cưới...</p></div></main>;
  return <PublicInvitation data={wedding} />;
}
