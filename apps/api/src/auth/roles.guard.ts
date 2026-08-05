import { Injectable } from "@nestjs/common";
import type { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { AuthenticatedUser, HttpRequest } from "./auth.types.js";
import { ROLES_KEY } from "./roles.decorator.js";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const allowed = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);
    if (!allowed?.length) return true;
    const request = context.switchToHttp().getRequest<HttpRequest & { user?: AuthenticatedUser }>();
    return Boolean(request.user && allowed.includes(request.user.role));
  }
}
