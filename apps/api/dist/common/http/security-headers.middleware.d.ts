import { type NestMiddleware } from "@nestjs/common";
import type { NextFunction, Request, Response } from "express";
export declare class SecurityHeadersMiddleware implements NestMiddleware {
    use(_request: Request, response: Response, next: NextFunction): void;
}
