"use client";

import { AuthProvider } from "../components/auth-provider";
import { ToastProvider } from "../components/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider><AuthProvider>{children}</AuthProvider></ToastProvider>;
}
