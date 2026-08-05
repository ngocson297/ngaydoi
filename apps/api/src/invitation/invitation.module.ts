import { Module } from "@nestjs/common";
import { CommercialModule } from "../commercial/commercial.module.js";
import { PrismaModule } from "../prisma/prisma.module.js";
import { InvitationController } from "./invitation.controller.js";
import { InvitationService } from "./invitation.service.js";

@Module({
  imports: [PrismaModule, CommercialModule],
  controllers: [InvitationController],
  providers: [InvitationService],
  exports: [InvitationService],
})
export class InvitationModule {}
