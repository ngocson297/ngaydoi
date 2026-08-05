import { Module } from "@nestjs/common";
import { CommercialModule } from "../commercial/commercial.module.js";
import { InvitationModule } from "../invitation/invitation.module.js";
import { WeddingsController } from "./weddings.controller.js";
import { WeddingsService } from "./weddings.service.js";

@Module({ imports: [InvitationModule, CommercialModule], controllers: [WeddingsController], providers: [WeddingsService] })
export class WeddingsModule {}
