var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { createHmac, timingSafeEqual } from "node:crypto";
function encode(value) {
    return Buffer.from(JSON.stringify(value)).toString("base64url");
}
let AccessTokenService = class AccessTokenService {
    secret;
    ttlSeconds;
    constructor() {
        this.secret = process.env.JWT_ACCESS_SECRET ?? "";
        this.ttlSeconds = Number(process.env.ACCESS_TOKEN_TTL_SECONDS ?? 900);
        if (this.secret.length < 32)
            throw new Error("JWT_ACCESS_SECRET must contain at least 32 characters");
    }
    sign(user, sessionId) {
        const now = Math.floor(Date.now() / 1000);
        const header = encode({ alg: "HS256", typ: "JWT" });
        const payload = encode({
            sub: user.id,
            email: user.email,
            role: user.role,
            authVersion: user.authVersion,
            sid: sessionId,
            type: "access",
            iat: now,
            exp: now + this.ttlSeconds,
        });
        const signature = this.signature(`${header}.${payload}`).toString("base64url");
        return `${header}.${payload}.${signature}`;
    }
    verify(token) {
        const [header, payload, signature] = token.split(".");
        if (!header || !payload || !signature)
            throw new UnauthorizedException("Invalid access token");
        const expected = this.signature(`${header}.${payload}`);
        const received = Buffer.from(signature, "base64url");
        const canonicalSignature = received.toString("base64url");
        if (canonicalSignature !== signature || expected.length !== received.length || !timingSafeEqual(expected, received)) {
            throw new UnauthorizedException("Invalid access token");
        }
        try {
            const parsedHeader = JSON.parse(Buffer.from(header, "base64url").toString("utf8"));
            const claims = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
            if (parsedHeader.alg !== "HS256" || parsedHeader.typ !== "JWT")
                throw new UnauthorizedException("Invalid access token");
            if (!claims.sub || !claims.sid || !claims.email || !claims.role || !Number.isInteger(claims.authVersion) || !Number.isInteger(claims.iat) || !Number.isInteger(claims.exp)) {
                throw new UnauthorizedException("Invalid access token");
            }
            if (claims.type !== "access" || claims.exp <= Math.floor(Date.now() / 1000)) {
                throw new UnauthorizedException("Access token expired");
            }
            return claims;
        }
        catch (error) {
            if (error instanceof UnauthorizedException)
                throw error;
            throw new UnauthorizedException("Invalid access token");
        }
    }
    signature(value) {
        return createHmac("sha256", this.secret).update(value).digest();
    }
};
AccessTokenService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], AccessTokenService);
export { AccessTokenService };
//# sourceMappingURL=access-token.service.js.map