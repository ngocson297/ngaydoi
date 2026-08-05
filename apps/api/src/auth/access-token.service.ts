import { Injectable, UnauthorizedException } from "@nestjs/common";
import { createHmac, timingSafeEqual } from "node:crypto";

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

function encode(value: unknown): string {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

@Injectable()
export class AccessTokenService {
  private readonly secret: string;
  private readonly ttlSeconds: number;

  constructor() {
    this.secret = process.env.JWT_ACCESS_SECRET ?? "";
    this.ttlSeconds = Number(process.env.ACCESS_TOKEN_TTL_SECONDS ?? 900);
    if (this.secret.length < 32) throw new Error("JWT_ACCESS_SECRET must contain at least 32 characters");
  }

  sign(user: SignableUser, sessionId: string): string {
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
    } satisfies AccessTokenPayload);
    const signature = this.signature(`${header}.${payload}`).toString("base64url");
    return `${header}.${payload}.${signature}`;
  }

  verify(token: string): AccessTokenPayload {
    const [header, payload, signature] = token.split(".");
    if (!header || !payload || !signature) throw new UnauthorizedException("Invalid access token");

    const expected = this.signature(`${header}.${payload}`);
    const received = Buffer.from(signature, "base64url");
    const canonicalSignature = received.toString("base64url");
    if (canonicalSignature !== signature || expected.length !== received.length || !timingSafeEqual(expected, received)) {
      throw new UnauthorizedException("Invalid access token");
    }

    try {
      const parsedHeader = JSON.parse(Buffer.from(header, "base64url").toString("utf8")) as { alg?: string; typ?: string };
      const claims = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as AccessTokenPayload;
      if (parsedHeader.alg !== "HS256" || parsedHeader.typ !== "JWT") throw new UnauthorizedException("Invalid access token");
      if (!claims.sub || !claims.sid || !claims.email || !claims.role || !Number.isInteger(claims.authVersion) || !Number.isInteger(claims.iat) || !Number.isInteger(claims.exp)) {
        throw new UnauthorizedException("Invalid access token");
      }
      if (claims.type !== "access" || claims.exp <= Math.floor(Date.now() / 1000)) {
        throw new UnauthorizedException("Access token expired");
      }
      return claims;
    } catch (error) {
      if (error instanceof UnauthorizedException) throw error;
      throw new UnauthorizedException("Invalid access token");
    }
  }

  private signature(value: string): Buffer {
    return createHmac("sha256", this.secret).update(value).digest();
  }
}
