import { createParamDecorator } from "@nestjs/common";
import type { ExecutionContext } from "@nestjs/common";
import type { AuthenticatedUser, HttpRequest } from "./auth.types.js";

export const CurrentUser = createParamDecorator((_data: unknown, context: ExecutionContext): AuthenticatedUser => {
  const request = context.switchToHttp().getRequest<HttpRequest & { user: AuthenticatedUser }>();
  return request.user;
});
