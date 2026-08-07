import type { CanActivate, ExecutionContext } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { AccessTokenService } from "./access-token.service.js";
export declare class JwtAuthGuard implements CanActivate {
    private readonly tokens;
    private readonly prisma;
    constructor(tokens: AccessTokenService, prisma: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
