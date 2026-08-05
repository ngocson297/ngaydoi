-- Phase 6 / Master Phase 7: Commercial MVP
CREATE TYPE "PlanCode" AS ENUM ('FREE', 'STARTER', 'STANDARD', 'PREMIUM');
CREATE TYPE "OrderStatus" AS ENUM ('AWAITING_PAYMENT', 'PAYMENT_REVIEW', 'PAID', 'FULFILLING', 'COMPLETED', 'CANCELED', 'REFUNDED');
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUBMITTED', 'CONFIRMED', 'REJECTED', 'REFUNDED');
CREATE TYPE "FulfillmentStatus" AS ENUM ('PENDING', 'ACTIVE', 'SUSPENDED', 'COMPLETED');
CREATE TYPE "PaymentMethod" AS ENUM ('MANUAL_BANK_TRANSFER', 'SANDBOX');
CREATE TYPE "DiscountType" AS ENUM ('FIXED', 'PERCENTAGE');
CREATE TYPE "PublishReviewStatus" AS ENUM ('NOT_REQUESTED', 'REQUESTED', 'IN_REVIEW', 'APPROVED', 'CHANGES_REQUESTED', 'REJECTED');

CREATE TABLE "Plan" (
  "id" TEXT NOT NULL,
  "code" "PlanCode" NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "priceAmount" INTEGER NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'VND',
  "guestLimit" INTEGER NOT NULL,
  "mediaLimit" INTEGER NOT NULL,
  "templateKeys" TEXT[] NOT NULL,
  "customDomain" BOOLEAN NOT NULL DEFAULT false,
  "prioritySupport" BOOLEAN NOT NULL DEFAULT false,
  "requiresPublishReview" BOOLEAN NOT NULL DEFAULT false,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Plan_code_key" ON "Plan"("code");
CREATE INDEX "Plan_active_sortOrder_idx" ON "Plan"("active", "sortOrder");

CREATE TABLE "AddOn" (
  "id" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "priceAmount" INTEGER NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'VND',
  "guestLimitBonus" INTEGER NOT NULL DEFAULT 0,
  "mediaLimitBonus" INTEGER NOT NULL DEFAULT 0,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "AddOn_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "AddOn_code_key" ON "AddOn"("code");
CREATE INDEX "AddOn_active_sortOrder_idx" ON "AddOn"("active", "sortOrder");

CREATE TABLE "Coupon" (
  "id" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "discountType" "DiscountType" NOT NULL,
  "discountValue" INTEGER NOT NULL,
  "startsAt" TIMESTAMP(3),
  "endsAt" TIMESTAMP(3),
  "usageLimit" INTEGER,
  "usedCount" INTEGER NOT NULL DEFAULT 0,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "planCodes" "PlanCode"[] NOT NULL DEFAULT ARRAY[]::"PlanCode"[],
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Coupon_code_key" ON "Coupon"("code");
CREATE INDEX "Coupon_active_startsAt_endsAt_idx" ON "Coupon"("active", "startsAt", "endsAt");

ALTER TABLE "Wedding"
  ADD COLUMN "activePlanId" TEXT,
  ADD COLUMN "publishReviewStatus" "PublishReviewStatus" NOT NULL DEFAULT 'NOT_REQUESTED',
  ADD COLUMN "publishRequestedAt" TIMESTAMP(3),
  ADD COLUMN "publishReviewedAt" TIMESTAMP(3);

CREATE TABLE "Order" (
  "id" TEXT NOT NULL,
  "orderNumber" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "planId" TEXT NOT NULL,
  "couponId" TEXT,
  "subtotalAmount" INTEGER NOT NULL,
  "discountAmount" INTEGER NOT NULL DEFAULT 0,
  "totalAmount" INTEGER NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'VND',
  "status" "OrderStatus" NOT NULL DEFAULT 'AWAITING_PAYMENT',
  "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
  "fulfillmentStatus" "FulfillmentStatus" NOT NULL DEFAULT 'PENDING',
  "customerNote" TEXT,
  "internalNote" TEXT,
  "assignedStaffId" TEXT,
  "revisionCount" INTEGER NOT NULL DEFAULT 0,
  "activatedAt" TIMESTAMP(3),
  "completedAt" TIMESTAMP(3),
  "canceledAt" TIMESTAMP(3),
  "refundedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");
CREATE INDEX "Order_userId_createdAt_idx" ON "Order"("userId", "createdAt");
CREATE INDEX "Order_weddingId_createdAt_idx" ON "Order"("weddingId", "createdAt");
CREATE INDEX "Order_status_paymentStatus_createdAt_idx" ON "Order"("status", "paymentStatus", "createdAt");

CREATE TABLE "OrderItem" (
  "id" TEXT NOT NULL,
  "orderId" TEXT NOT NULL,
  "itemType" TEXT NOT NULL,
  "planId" TEXT,
  "addOnId" TEXT,
  "name" TEXT NOT NULL,
  "quantity" INTEGER NOT NULL DEFAULT 1,
  "unitAmount" INTEGER NOT NULL,
  "totalAmount" INTEGER NOT NULL,
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "OrderItem_orderId_idx" ON "OrderItem"("orderId");

CREATE TABLE "Payment" (
  "id" TEXT NOT NULL,
  "orderId" TEXT NOT NULL,
  "method" "PaymentMethod" NOT NULL,
  "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
  "amount" INTEGER NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'VND',
  "reference" TEXT,
  "proofUrl" TEXT,
  "note" TEXT,
  "provider" TEXT NOT NULL DEFAULT 'MANUAL',
  "providerTransactionId" TEXT,
  "idempotencyKey" TEXT,
  "submittedAt" TIMESTAMP(3),
  "confirmedAt" TIMESTAMP(3),
  "rejectedAt" TIMESTAMP(3),
  "refundedAt" TIMESTAMP(3),
  "reviewedById" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Payment_providerTransactionId_key" ON "Payment"("providerTransactionId");
CREATE UNIQUE INDEX "Payment_idempotencyKey_key" ON "Payment"("idempotencyKey");
CREATE INDEX "Payment_orderId_status_idx" ON "Payment"("orderId", "status");
CREATE INDEX "Payment_status_submittedAt_idx" ON "Payment"("status", "submittedAt");

CREATE TABLE "OrderNote" (
  "id" TEXT NOT NULL,
  "orderId" TEXT NOT NULL,
  "authorId" TEXT,
  "visibility" TEXT NOT NULL DEFAULT 'INTERNAL',
  "body" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "OrderNote_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "OrderNote_orderId_createdAt_idx" ON "OrderNote"("orderId", "createdAt");

ALTER TABLE "Wedding" ADD CONSTRAINT "Wedding_activePlanId_fkey" FOREIGN KEY ("activePlanId") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Order" ADD CONSTRAINT "Order_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Order" ADD CONSTRAINT "Order_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Order" ADD CONSTRAINT "Order_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_addOnId_fkey" FOREIGN KEY ("addOnId") REFERENCES "AddOn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "OrderNote" ADD CONSTRAINT "OrderNote_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "OrderNote" ADD CONSTRAINT "OrderNote_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
