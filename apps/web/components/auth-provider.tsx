"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { apiRequest, ApiError, readBrowserCookie } from "../lib/api";

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  role: string;
}

interface SessionResponse {
  accessToken: string | null;
  user: AuthUser | null;
}

interface AuthContextValue {
  user: AuthUser | null;
  status: "loading" | "authenticated" | "unauthenticated";
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  logoutAll: () => Promise<void>;
  refresh: () => Promise<string | null>;
  authRequest: <T>(path: string, init?: RequestInit) => Promise<T>;
  updateLocalUser: (user: AuthUser) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);
let sharedRefreshRequest: Promise<SessionResponse> | null = null;

function csrfHeaders(): HeadersInit {
  const csrf = readBrowserCookie("ngaydoi_csrf");
  return csrf ? { "x-csrf-token": decodeURIComponent(csrf) } : {};
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [status, setStatus] = useState<AuthContextValue["status"]>("loading");

  const applySession = useCallback((session: SessionResponse): string | null => {
    setAccessToken(session.accessToken);
    setUser(session.user);
    setStatus(session.user && session.accessToken ? "authenticated" : "unauthenticated");
    return session.accessToken;
  }, []);

  const refresh = useCallback(async (): Promise<string | null> => {
    if (!readBrowserCookie("ngaydoi_csrf")) {
      applySession({ accessToken: null, user: null });
      return null;
    }
    const requestRefresh = (): Promise<SessionResponse> => {
      if (!sharedRefreshRequest) {
        sharedRefreshRequest = apiRequest<SessionResponse>("/auth/refresh", { method: "POST", headers: csrfHeaders() })
          .finally(() => { sharedRefreshRequest = null; });
      }
      return sharedRefreshRequest;
    };

    try {
      return applySession(await requestRefresh());
    } catch (firstError) {
      // A second tab may have rotated the cookie while this request was in flight.
      await new Promise((resolve) => setTimeout(resolve, 120));
      try {
        return applySession(await requestRefresh());
      } catch {
        applySession({ accessToken: null, user: null });
        return null;
      }
    }
  }, [applySession]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const login = useCallback(async (email: string, password: string): Promise<void> => {
    const session = await apiRequest<SessionResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    applySession(session);
  }, [applySession]);

  const authRequest = useCallback(async <T,>(path: string, init: RequestInit = {}): Promise<T> => {
    let token = accessToken ?? (await refresh());
    if (!token) throw new ApiError("Authentication required", 401);

    const send = (currentToken: string) => {
      const headers = new Headers(init.headers);
      headers.set("authorization", `Bearer ${currentToken}`);
      return apiRequest<T>(path, { ...init, headers });
    };

    try {
      return await send(token);
    } catch (error) {
      if (!(error instanceof ApiError) || error.status !== 401) throw error;
      token = await refresh();
      if (!token) throw error;
      return send(token);
    }
  }, [accessToken, refresh]);

  const logout = useCallback(async (): Promise<void> => {
    try {
      if (readBrowserCookie("ngaydoi_csrf")) {
        await apiRequest("/auth/logout", { method: "POST", headers: csrfHeaders() });
      }
    } finally {
      applySession({ accessToken: null, user: null });
    }
  }, [applySession]);

  const logoutAll = useCallback(async (): Promise<void> => {
    try {
      await authRequest("/auth/logout-all", { method: "POST" });
    } finally {
      applySession({ accessToken: null, user: null });
    }
  }, [applySession, authRequest]);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    status,
    login,
    logout,
    logoutAll,
    refresh,
    authRequest,
    updateLocalUser: setUser,
  }), [user, status, login, logout, logoutAll, refresh, authRequest]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
