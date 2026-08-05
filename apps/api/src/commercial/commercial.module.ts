import { Module } from "@nestjs/common";
import { CommercialController } from "./commercial.controller.js";
import { CommercialService } from "./commercial.service.js";
import { EntitlementsService } from "./entitlements.service.js";

@Module({
  controllers: [CommercialController],
  providers: [CommercialService, EntitlementsService],
  exports: [CommercialService, EntitlementsService],
})
export class CommercialModule {}
