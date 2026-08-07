import type { HttpRequest, HttpResponse, RequestMetadata } from "./auth.types.js";
export declare const REFRESH_COOKIE = "ngaydoi_refresh";
export declare const CSRF_COOKIE = "ngaydoi_csrf";
export declare function requestMetadata(request: HttpRequest): RequestMetadata;
export declare function readCookie(request: HttpRequest, name: string): string | undefined;
export declare function setSessionCookies(response: HttpResponse, refreshToken: string, csrfToken: string, maxAgeMs: number): void;
export declare function clearSessionCookies(response: HttpResponse): void;
export declare function assertCsrf(request: HttpRequest): void;
