CREATE TYPE "DeliveryStatus" AS ENUM ('PENDING', 'PROCESSING', 'DELIVERED', 'FAILED', 'DEAD_LETTER');

CREATE TABLE "EmailOutbox" (
  "id" TEXT NOT NULL,
  "recipient" TEXT NOT NULL,
  "subject" TEXT NOT NULL,
  "htmlBody" TEXT NOT NULL,
  "textBody" TEXT,
  "templateKey" TEXT,
  "metadata" JSONB,
  "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING',
  "provider" TEXT NOT NULL DEFAULT 'CONSOLE',
  "providerMessageId" TEXT,
  "attemptCount" INTEGER NOT NULL DEFAULT 0,
  "nextAttemptAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "sentAt" TIMESTAMP(3),
  "lastError" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "EmailOutbox_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "WebhookEndpoint" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "secretCiphertext" TEXT NOT NULL,
  "events" TEXT[] NOT NULL,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "failureCount" INTEGER NOT NULL DEFAULT 0,
  "lastDeliveredAt" TIMESTAMP(3),
  "lastFailedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "WebhookEndpoint_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "WebhookDelivery" (
  "id" TEXT NOT NULL,
  "endpointId" TEXT NOT NULL,
  "eventType" TEXT NOT NULL,
  "eventId" TEXT NOT NULL,
  "payload" JSONB NOT NULL,
  "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING',
  "attemptCount" INTEGER NOT NULL DEFAULT 0,
  "nextAttemptAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "responseStatus" INTEGER,
  "responseBody" TEXT,
  "lastError" TEXT,
  "deliveredAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "WebhookDelivery_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "EmailOutbox_status_nextAttemptAt_idx" ON "EmailOutbox"("status", "nextAttemptAt");
CREATE INDEX "EmailOutbox_recipient_createdAt_idx" ON "EmailOutbox"("recipient", "createdAt");
CREATE INDEX "WebhookEndpoint_active_idx" ON "WebhookEndpoint"("active");
CREATE UNIQUE INDEX "WebhookDelivery_endpointId_eventId_key" ON "WebhookDelivery"("endpointId", "eventId");
CREATE INDEX "WebhookDelivery_status_nextAttemptAt_idx" ON "WebhookDelivery"("status", "nextAttemptAt");
CREATE INDEX "WebhookDelivery_endpointId_createdAt_idx" ON "WebhookDelivery"("endpointId", "createdAt");
ALTER TABLE "WebhookDelivery" ADD CONSTRAINT "WebhookDelivery_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "WebhookEndpoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;
