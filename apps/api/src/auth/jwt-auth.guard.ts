import { Injectable, UnauthorizedException } from "@nestjs/common";
import type { CanActivate, ExecutionContext } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { AccessTokenService } from "./access-token.service.js";
import type { AuthenticatedUser, HttpRequest } from "./auth.types.js";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly tokens: AccessTokenService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<HttpRequest & { user?: AuthenticatedUser }>();
    const authorization = request.headers.authorization;
    if (typeof authorization !== "string" || !authorization.startsWith("Bearer ")) throw new UnauthorizedException("Authentication required");

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
}
