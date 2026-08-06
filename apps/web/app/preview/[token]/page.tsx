"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PublicInvitation } from "../../../components/public-invitation";
import { ErrorState, PageSkeleton } from "../../../components/ui";
import { apiRequest, toUiError, type UiError } from "../../../lib/api";
import type { PublicInvitationData } from "../../../lib/invitations";

export default function SecurePreviewPage() {
  const { token } = useParams<{ token: string }>();
  const [wedding, setWedding] = useState<PublicInvitationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<UiError | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setWedding(await apiRequest<PublicInvitationData>(`/invitations/preview/${encodeURIComponent(token)}`));
    } catch (reason) {
      setError(toUiError(reason, "Không thể mở bản xem trước."));
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { void load(); }, [load]);
  if (loading) return <main id="main-content" tabIndex={-1} className="friendly-error"><PageSkeleton cards={2} /></main>;
  if (error || !wedding) return <main id="main-content" tabIndex={-1} className="friendly-error"><ErrorState title="Liên kết xem trước không còn hiệu lực" description={error?.message ?? "Bản xem trước không còn khả dụng."} requestId={error?.requestId} onRetry={() => void load()} homeHref="/dashboard" /></main>;
  return <PublicInvitation data={wedding} preview />;
}
