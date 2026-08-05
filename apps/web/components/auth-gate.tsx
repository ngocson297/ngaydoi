"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./auth-provider";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      const next = `${window.location.pathname}${window.location.search}`;
      router.replace(`/login?next=${encodeURIComponent(next)}`);
    }
  }, [router, status]);

  if (status === "loading") {
    return <main className="auth-shell"><div className="auth-card auth-status"><div className="spinner" /><h2>Đang kiểm tra phiên đăng nhập</h2></div></main>;
  }
  if (status === "unauthenticated") return null;
  return children;
}
