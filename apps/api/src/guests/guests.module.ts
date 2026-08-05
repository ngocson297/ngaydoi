import { Module } from "@nestjs/common";
import { CommercialModule } from "../commercial/commercial.module.js";
import { GuestsController } from "./guests.controller.js";
import { GuestsService } from "./guests.service.js";

@Module({ imports: [CommercialModule], controllers: [GuestsController], providers: [GuestsService], exports: [GuestsService] })
export class GuestsModule {}
