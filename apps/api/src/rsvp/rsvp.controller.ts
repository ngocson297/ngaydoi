import { Body, Controller, Param, Post } from "@nestjs/common";
import { CreateRsvpDto } from "./create-rsvp.dto.js";
import { RsvpService } from "./rsvp.service.js";

@Controller("rsvp")
export class RsvpController {
  constructor(private readonly rsvpService: RsvpService) {}

  @Post(":token")
  submit(@Param("token") token: string, @Body() dto: CreateRsvpDto) {
    return this.rsvpService.submit(token, dto);
  }
}
