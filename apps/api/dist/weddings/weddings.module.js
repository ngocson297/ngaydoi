var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { CommercialModule } from "../commercial/commercial.module.js";
import { InvitationModule } from "../invitation/invitation.module.js";
import { WeddingsController } from "./weddings.controller.js";
import { WeddingsService } from "./weddings.service.js";
let WeddingsModule = class WeddingsModule {
};
WeddingsModule = __decorate([
    Module({ imports: [InvitationModule, CommercialModule], controllers: [WeddingsController], providers: [WeddingsService] })
], WeddingsModule);
export { WeddingsModule };
//# sourceMappingURL=weddings.module.js.map