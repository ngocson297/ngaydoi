import { ForbiddenException } from "@nestjs/common";
export const REFRESH_COOKIE = "ngaydoi_refresh";
export const CSRF_COOKIE = "ngaydoi_csrf";
export function requestMetadata(request) {
    const forwarded = request.headers["x-forwarded-for"];
    const ipAddress = Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0]?.trim() || request.ip;
    const rawUserAgent = request.headers["user-agent"];
    const userAgent = Array.isArray(rawUserAgent) ? rawUserAgent[0] : rawUserAgent;
    return { ipAddress, userAgent };
}
export function readCookie(request, name) {
    const rawCookie = request.headers.cookie;
    const raw = Array.isArray(rawCookie) ? rawCookie[0] : rawCookie;
    if (!raw)
        return undefined;
    for (const part of raw.split(";")) {
        const [key, ...value] = part.trim().split("=");
        if (key === name)
            return decodeURIComponent(value.join("="));
    }
    return undefined;
}
export function setSessionCookies(response, refreshToken, csrfToken, maxAgeMs) {
    const secure = process.env.COOKIE_SECURE === "true";
    response.cookie(REFRESH_COOKIE, refreshToken, {
        httpOnly: true,
        secure,
        sameSite: "lax",
        path: "/api/auth",
        maxAge: maxAgeMs,
    });
    response.cookie(CSRF_COOKIE, csrfToken, {
        httpOnly: false,
        secure,
        sameSite: "lax",
        path: "/",
        maxAge: maxAgeMs,
    });
}
export function clearSessionCookies(response) {
    const secure = process.env.COOKIE_SECURE === "true";
    response.clearCookie(REFRESH_COOKIE, { httpOnly: true, secure, sameSite: "lax", path: "/api/auth" });
    response.clearCookie(CSRF_COOKIE, { httpOnly: false, secure, sameSite: "lax", path: "/" });
}
export function assertCsrf(request) {
    const cookie = readCookie(request, CSRF_COOKIE);
    const header = request.headers["x-csrf-token"];
    if (!cookie || typeof header !== "string" || cookie !== header) {
        throw new ForbiddenException("Invalid CSRF token");
    }
}
//# sourceMappingURL=auth.utils.js.map