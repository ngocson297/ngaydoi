import { randomUUID } from "node:crypto";
import { Injectable, Logger, type NestMiddleware } from "@nestjs/common";
import type { NextFunction, Request, Response } from "express";

interface RequestWithId extends Request { requestId?: string }

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  private readonly logger = new Logger("HTTP");

  use(request: RequestWithId, response: Response, next: NextFunction): void {
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
      if (response.statusCode >= 500) this.logger.error(serialized);
      else if (response.statusCode >= 400) this.logger.warn(serialized);
      else this.logger.log(serialized);
    });
    next();
  }
}
