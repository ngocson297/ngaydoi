import { Global, Module } from "@nestjs/common";
import { AccessTokenService } from "./access-token.service.js";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { JwtAuthGuard } from "./jwt-auth.guard.js";
import { RateLimitService } from "./rate-limit.service.js";
import { RolesGuard } from "./roles.guard.js";

@Global()
@Module({
  controllers: [AuthController],
  providers: [AuthService, AccessTokenService, RateLimitService, JwtAuthGuard, RolesGuard],
  exports: [AccessTokenService, JwtAuthGuard, RolesGuard, RateLimitService],
})
export class AuthModule {}
