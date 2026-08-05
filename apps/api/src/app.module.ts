import { Module, type MiddlewareConsumer, type NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AccountModule } from "./account/account.module.js";
import { AdminModule } from "./admin/admin.module.js";
import { AuthModule } from "./auth/auth.module.js";
import { CommercialModule } from "./commercial/commercial.module.js";
import { RequestContextMiddleware } from "./common/http/request-context.middleware.js";
import { SecurityHeadersMiddleware } from "./common/http/security-headers.middleware.js";
import { GuestsModule } from "./guests/guests.module.js";
import { EventOperationsModule } from "./event-operations/event-operations.module.js";
import { GrowthModule } from "./growth/growth.module.js";
import { HealthModule } from "./health/health.module.js";
import { InvitationModule } from "./invitation/invitation.module.js";
import { MemoriesModule } from "./memories/memories.module.js";
import { OperationsModule } from "./operations/operations.module.js";
import { PilotModule } from "./pilot/pilot.module.js";
import { PlanningModule } from "./planning/planning.module.js";
import { PartnerModule } from "./partner/partner.module.js";
import { PrismaModule } from "./prisma/prisma.module.js";
import { RsvpModule } from "./rsvp/rsvp.module.js";
import { WeddingsModule } from "./weddings/weddings.module.js";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    OperationsModule,
    PilotModule,
    PlanningModule,
    PartnerModule,
    AuthModule,
    AccountModule,
    CommercialModule,
    AdminModule,
    HealthModule,
    GrowthModule,
    EventOperationsModule,
    GuestsModule,
    WeddingsModule,
    InvitationModule,
    MemoriesModule,
    RsvpModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestContextMiddleware, SecurityHeadersMiddleware).forRoutes("*");
  }
}
