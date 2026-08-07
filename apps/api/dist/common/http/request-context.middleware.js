var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { randomUUID } from "node:crypto";
import { Injectable, Logger } from "@nestjs/common";
let RequestContextMiddleware = class RequestContextMiddleware {
    logger = new Logger("HTTP");
    use(request, response, next) {
        const requestIdHeader = request.headers["x-request-id"];
        const requestId = typeof requestIdHeader === "string" && requestIdHeader.length <= 100 ? requestIdHeader : randomUUID();
        request.requestId = requestId;
        response.setHeader("x-request-id", requestId);
        const startedAt = performance.now();
        response.on("finish", () => {
            const durationMs = Math.round((performance.now() - startedAt) * 100) / 100;
            const payload = {
                type: "http_request",
                requestId,
                method: request.method,
                path: request.originalUrl,
                statusCode: response.statusCode,
                durationMs,
                userAgent: request.headers["user-agent"],
                ip: request.ip,
            };
            const serialized = JSON.stringify(payload);
            if (response.statusCode >= 500)
                this.logger.error(serialized);
            else if (response.statusCode >= 400)
                this.logger.warn(serialized);
            else
                this.logger.log(serialized);
        });
        next();
    }
};
RequestContextMiddleware = __decorate([
    Injectable()
], RequestContextMiddleware);
export { RequestContextMiddleware };
//# sourceMappingURL=request-context.middleware.js.map