"use client";

import { AuthProvider } from "../components/auth-provider";
import { ConfirmProvider, ToastProvider } from "../components/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider><ConfirmProvider><AuthProvider>{children}</AuthProvider></ConfirmProvider></ToastProvider>;
}
