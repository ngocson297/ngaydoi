export interface AuthenticatedUser {
    id: string;
    email: string;
    displayName: string;
    role: string;
    authVersion: number;
    sessionId: string;
}
export interface RequestMetadata {
    ipAddress?: string;
    userAgent?: string;
}
export interface HttpRequest {
    headers: Record<string, string | string[] | undefined>;
    ip?: string;
    user?: AuthenticatedUser;
}
export interface HttpResponse {
    cookie(name: string, value: string, options: Record<string, unknown>): void;
    clearCookie(name: string, options: Record<string, unknown>): void;
}
