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
import { PrismaService } from "../prisma/prisma.service.js";
import { AccessTokenService } from "./access-token.service.js";
let JwtAuthGuard = class JwtAuthGuard {
    tokens;
    prisma;
    constructor(tokens, prisma) {
        this.tokens = tokens;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;
        if (typeof authorization !== "string" || !authorization.startsWith("Bearer "))
            throw new UnauthorizedException("Authentication required");
        const claims = this.tokens.verify(authorization.slice(7));
        const user = await this.prisma.user.findUnique({
            where: { id: claims.sub },
            select: { id: true, email: true, displayName: true, role: true, status: true, authVersion: true, deletedAt: true },
        });
        if (!user || user.deletedAt || user.status !== "ACTIVE" || user.authVersion !== claims.authVersion) {
            throw new UnauthorizedException("Session is no longer valid");
        }
        request.user = {
            id: user.id,
            email: user.email,
            displayName: user.displayName,
            role: user.role,
            authVersion: user.authVersion,
            sessionId: claims.sid,
        };
        return true;
    }
};
JwtAuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AccessTokenService,
        PrismaService])
], JwtAuthGuard);
export { JwtAuthGuard };
//# sourceMappingURL=jwt-auth.guard.js.map