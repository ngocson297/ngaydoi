import { Module } from "@nestjs/common";
import { CommercialModule } from "../commercial/commercial.module.js";
import { InvitationModule } from "../invitation/invitation.module.js";
import { AdminController } from "./admin.controller.js";
import { AdminService } from "./admin.service.js";

@Module({ imports: [CommercialModule, InvitationModule], controllers: [AdminController], providers: [AdminService] })
export class AdminModule {}
