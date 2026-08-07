var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { CommercialModule } from "../commercial/commercial.module.js";
import { PrismaModule } from "../prisma/prisma.module.js";
import { InvitationController } from "./invitation.controller.js";
import { InvitationService } from "./invitation.service.js";
let InvitationModule = class InvitationModule {
};
InvitationModule = __decorate([
    Module({
        imports: [PrismaModule, CommercialModule],
        controllers: [InvitationController],
        providers: [InvitationService],
        exports: [InvitationService],
    })
], InvitationModule);
export { InvitationModule };
//# sourceMappingURL=invitation.module.js.map