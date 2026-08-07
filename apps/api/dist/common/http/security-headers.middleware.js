var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@nestjs/common";
let SecurityHeadersMiddleware = class SecurityHeadersMiddleware {
    use(_request, response, next) {
        response.setHeader("x-content-type-options", "nosniff");
        response.setHeader("x-frame-options", "DENY");
        response.setHeader("referrer-policy", "strict-origin-when-cross-origin");
        response.setHeader("permissions-policy", "camera=(), microphone=(), geolocation=(), payment=()");
        response.setHeader("cross-origin-opener-policy", "same-origin");
        response.setHeader("cross-origin-resource-policy", "same-site");
        response.setHeader("content-security-policy", "default-src 'none'; frame-ancestors 'none'; base-uri 'none'");
        if (process.env.NODE_ENV === "production")
            response.setHeader("strict-transport-security", "max-age=31536000; includeSubDomains; preload");
        next();
    }
};
SecurityHeadersMiddleware = __decorate([
    Injectable()
], SecurityHeadersMiddleware);
export { SecurityHeadersMiddleware };
//# sourceMappingURL=security-headers.middleware.js.map