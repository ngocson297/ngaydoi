import { type NestMiddleware } from "@nestjs/common";
import type { NextFunction, Request, Response } from "express";
interface RequestWithId extends Request {
    requestId?: string;
}
export declare class RequestContextMiddleware implements NestMiddleware {
    private readonly logger;
    use(request: RequestWithId, response: Response, next: NextFunction): void;
}
export {};
