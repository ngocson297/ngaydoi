"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface ToastItem { id: number; tone: "success" | "error" | "info"; title: string; message?: string }
interface ToastContextValue { notify: (toast: Omit<ToastItem, "id">) => void }
const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const notify = useCallback((toast: Omit<ToastItem, "id">) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setItems((current) => [...current, { ...toast, id }].slice(-3));
    window.setTimeout(() => setItems((current) => current.filter((item) => item.id !== id)), 4200);
  }, []);
  const value = useMemo(() => ({ notify }), [notify]);
  return <ToastContext.Provider value={value}>{children}<div className="ui-toast-region" aria-live="polite" aria-atomic="false">{items.map((item) => <div key={item.id} className={`ui-toast ui-toast-${item.tone}`} role="status"><span aria-hidden="true">{item.tone === "success" ? "✓" : item.tone === "error" ? "!" : "i"}</span><div><strong>{item.title}</strong>{item.message ? <p>{item.message}</p> : null}</div><button type="button" aria-label="Đóng thông báo" onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}>×</button></div>)}</div></ToastContext.Provider>;
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
}
