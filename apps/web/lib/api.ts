export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly details?: unknown,
    public readonly requestId?: string,
  ) {
    super(message);
  }
}

export function readBrowserCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const prefix = `${name}=`;
  return document.cookie
    .split(";")
    .map((value) => value.trim())
    .find((value) => value.startsWith(prefix))
    ?.slice(prefix.length);
}

export async function apiRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  const isFormData = typeof FormData !== "undefined" && init.body instanceof FormData;
  if (init.body && !isFormData && !headers.has("content-type")) headers.set("content-type", "application/json");

  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers,
    credentials: "include",
  });

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const body = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const rawMessage = typeof body === "object" && body && "message" in body ? (body as { message: unknown }).message : body;
    const message = Array.isArray(rawMessage) ? rawMessage.join(". ") : String(rawMessage || "Request failed");
    const requestId = typeof body === "object" && body && "requestId" in body ? String((body as { requestId?: unknown }).requestId || "") : response.headers.get("x-request-id") || undefined;
    throw new ApiError(requestId ? `${message} (Mã hỗ trợ: ${requestId})` : message, response.status, body, requestId);
  }
  return body as T;
}
