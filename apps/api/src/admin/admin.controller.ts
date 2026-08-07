import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/current-user.decorator.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import { AdminService } from "./admin.service.js";
import { AddOrderNoteDto } from "./dto/add-order-note.dto.js";
import { PublishReviewDto } from "./dto/publish-review.dto.js";
import { ReviewPaymentDto } from "./dto/review-payment.dto.js";
import { UpsertCouponDto } from "./dto/upsert-coupon.dto.js";

@Controller("admin")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles("ADMIN", "STAFF")
export class AdminController {
  constructor(private readonly admin: AdminService) {}

  @Get("overview")
  overview() { return this.admin.overview(); }

  @Get("orders")
  listOrders(@Query() query: Record<string, string | undefined>) { return this.admin.listOrders(query); }

  @Get("orders/:id")
  getOrder(@Param("id") id: string) { return this.admin.getOrder(id); }

  @Post("orders/:id/confirm-payment")
  confirm(@Param("id") id: string, @Body() dto: ReviewPaymentDto, @CurrentUser() user: AuthenticatedUser) {
    return this.admin.confirmPayment(id, dto, user);
  }

  @Post("orders/:id/reject-payment")
  reject(@Param("id") id: string, @Body() dto: ReviewPaymentDto, @CurrentUser() user: AuthenticatedUser) {
    return this.admin.rejectPayment(id, dto, user);
  }

  @Post("orders/:id/refund")
  refund(@Param("id") id: string, @Body() dto: ReviewPaymentDto, @CurrentUser() user: AuthenticatedUser) {
    return this.admin.refund(id, dto, user);
  }

  @Post("orders/:id/notes")
  addNote(@Param("id") id: string, @Body() dto: AddOrderNoteDto, @CurrentUser() user: AuthenticatedUser) {
    return this.admin.addNote(id, dto, user);
  }

  @Post("weddings/:id/publish-review")
  reviewPublish(@Param("id") id: string, @Body() dto: PublishReviewDto, @CurrentUser() user: AuthenticatedUser) {
    return this.admin.reviewPublish(id, dto, user);
  }


  @Get("coupons")
  coupons() { return this.admin.listCoupons(); }

  @Post("coupons")
  @Roles("ADMIN")
  createCoupon(@Body() dto: UpsertCouponDto, @CurrentUser() user: AuthenticatedUser) { return this.admin.createCoupon(dto, user); }

  @Patch("coupons/:id")
  @Roles("ADMIN")
  updateCoupon(@Param("id") id: string, @Body() dto: UpsertCouponDto, @CurrentUser() user: AuthenticatedUser) { return this.admin.updateCoupon(id, dto, user); }

  @Get("users")
  users(@Query("search") search?: string) { return this.admin.searchUsers(search); }

  @Get("weddings")
  weddings(@Query("search") search?: string) { return this.admin.searchWeddings(search); }
}
