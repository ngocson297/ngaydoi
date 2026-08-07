interface AccessTokenPayload {
    sub: string;
    email: string;
    role: string;
    authVersion: number;
    sid: string;
    type: "access";
    iat: number;
    exp: number;
}
interface SignableUser {
    id: string;
    email: string;
    role: string;
    authVersion: number;
}
export declare class AccessTokenService {
    private readonly secret;
    private readonly ttlSeconds;
    constructor();
    sign(user: SignableUser, sessionId: string): string;
    verify(token: string): AccessTokenPayload;
    private signature;
}
export {};
