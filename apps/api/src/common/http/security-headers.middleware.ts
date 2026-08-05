import { Injectable, type NestMiddleware } from "@nestjs/common";
import type { NextFunction, Request, Response } from "express";

@Injectable()
export class SecurityHeadersMiddleware implements NestMiddleware {
  use(_request: Request, response: Response, next: NextFunction): void {
    response.setHeader("x-content-type-options", "nosniff");
    response.setHeader("x-frame-options", "DENY");
    response.setHeader("referrer-policy", "strict-origin-when-cross-origin");
    response.setHeader("permissions-policy", "camera=(), microphone=(), geolocation=(), payment=()");
    response.setHeader("cross-origin-opener-policy", "same-origin");
    response.setHeader("cross-origin-resource-policy", "same-site");
    response.setHeader("content-security-policy", "default-src 'none'; frame-ancestors 'none'; base-uri 'none'");
    if (process.env.NODE_ENV === "production") response.setHeader("strict-transport-security", "max-age=31536000; includeSubDomains; preload");
    next();
  }
}
