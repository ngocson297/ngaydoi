import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { CommercialService } from "./commercial.service.js";
import { CreateOrderDto } from "./dto/create-order.dto.js";
import { SubmitPaymentDto } from "./dto/submit-payment.dto.js";

@Controller()
export class CommercialController {
  constructor(private readonly commercial: CommercialService) {}

  @Get("plans")
  getCatalog() {
    return this.commercial.getCatalog();
  }

  @Get("weddings/:id/entitlements")
  @UseGuards(JwtAuthGuard)
  getEntitlements(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.commercial.getEntitlements(id, user);
  }

  @Post("orders/quote")
  @UseGuards(JwtAuthGuard)
  quote(@Body() dto: CreateOrderDto, @CurrentUser() user: AuthenticatedUser) {
    return this.commercial.quote(dto, user);
  }

  @Post("orders")
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateOrderDto, @CurrentUser() user: AuthenticatedUser) {
    return this.commercial.createOrder(dto, user);
  }

  @Get("orders")
  @UseGuards(JwtAuthGuard)
  list(@CurrentUser() user: AuthenticatedUser) {
    return this.commercial.listOrders(user);
  }

  @Get("orders/:id")
  @UseGuards(JwtAuthGuard)
  detail(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.commercial.getOrder(id, user);
  }

  @Post("orders/:id/payment-reference")
  @UseGuards(JwtAuthGuard)
  submitPayment(@Param("id") id: string, @Body() dto: SubmitPaymentDto, @CurrentUser() user: AuthenticatedUser) {
    return this.commercial.submitPayment(id, dto, user);
  }

  @Post("orders/:id/sandbox-pay")
  @UseGuards(JwtAuthGuard)
  sandboxPay(@Param("id") id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.commercial.sandboxPay(id, user);
  }
}
