"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PublicInvitation } from "../../../components/public-invitation";
import { ErrorState, PageSkeleton } from "../../../components/ui";
import { apiRequest, toUiError, type UiError } from "../../../lib/api";
import type { PublicInvitationData } from "../../../lib/invitations";

export default function InvitationPage() {
  const { slug } = useParams<{ slug: string }>();
  const [wedding, setWedding] = useState<PublicInvitationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<UiError | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setWedding(await apiRequest<PublicInvitationData>(`/weddings/public/${encodeURIComponent(slug)}`));
    } catch (reason) {
      setError(toUiError(reason, "Không thể tải thiệp cưới."));
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => { void load(); }, [load]);
  if (loading) return <main id="main-content" tabIndex={-1} className="friendly-error"><PageSkeleton cards={2} /></main>;
  if (error || !wedding) return <main id="main-content" tabIndex={-1} className="friendly-error"><ErrorState title="Thiệp chưa sẵn sàng" description="Thiệp có thể đang được chỉnh sửa, tạm khóa hoặc đã hết hạn. Bạn có thể thử lại hoặc quay về trang chủ." requestId={error?.requestId} onRetry={() => void load()} homeHref="/" homeLabel="Về trang chủ" /></main>;
  return <PublicInvitation data={wedding} />;
}
