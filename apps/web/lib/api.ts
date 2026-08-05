export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly details?: unknown,
    public readonly requestId?: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export interface UiError {
  message: string;
  requestId?: string;
  status?: number;
}

const internalErrorPattern = /(prisma|postgres|sqlstate|stack trace|node_modules|\/apps\/|\.ts:\d+|\.js:\d+|syntaxerror|typeerror|referenceerror)/i;

function publicApiMessage(status: number, rawMessage: string): string {
  const normalized = rawMessage.trim();
  if (status >= 500 || internalErrorPattern.test(normalized)) {
    return "Hệ thống đang gặp sự cố tạm thời. Dữ liệu của bạn vẫn an toàn; vui lòng thử lại sau.";
  }
  if (normalized && normalized !== "Request failed") return normalized;
  if (status === 400) return "Thông tin gửi lên chưa hợp lệ. Vui lòng kiểm tra lại.";
  if (status === 401) return "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.";
  if (status === 403) return "Bạn không có quyền thực hiện thao tác này.";
  if (status === 404) return "Không tìm thấy nội dung hoặc nội dung không còn khả dụng.";
  if (status === 409) return "Dữ liệu vừa thay đổi hoặc đã tồn tại. Vui lòng tải lại và thử lại.";
  if (status === 429) return "Bạn đang thao tác quá nhanh. Vui lòng chờ một chút rồi thử lại.";
  return "Chưa thể hoàn tất yêu cầu. Vui lòng thử lại.";
}

export function toUiError(reason: unknown, fallback: string): UiError {
  if (reason instanceof ApiError) {
    return {
      message: reason.message || fallback,
      requestId: reason.requestId,
      status: reason.status,
    };
  }
  return { message: fallback };
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

  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...init,
      headers,
      credentials: "include",
    });
  } catch (reason) {
    throw new ApiError(
      "Không thể kết nối tới Ngày Đôi. Hãy kiểm tra mạng hoặc thử lại sau.",
      0,
      reason,
    );
  }

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const body = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const rawMessage = typeof body === "object" && body && "message" in body ? (body as { message: unknown }).message : body;
    const messageText = Array.isArray(rawMessage) ? rawMessage.join(". ") : String(rawMessage || "Request failed");
    const requestId = typeof body === "object" && body && "requestId" in body
      ? String((body as { requestId?: unknown }).requestId || "") || undefined
      : response.headers.get("x-request-id") || undefined;
    throw new ApiError(publicApiMessage(response.status, messageText), response.status, body, requestId);
  }
  return body as T;
}
