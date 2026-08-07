var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
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
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(RequestContextMiddleware, SecurityHeadersMiddleware).forRoutes("*");
    }
};
AppModule = __decorate([
    Module({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map