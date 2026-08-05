-- Phase 5 / Master Phase 6: Guest Management & RSVP Core
ALTER TABLE "Guest" ADD COLUMN "tags" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Guest" ADD COLUMN "archivedAt" TIMESTAMP(3);
ALTER TABLE "Invitation" ADD COLUMN "greeting" TEXT;
ALTER TABLE "Invitation" ADD COLUMN "revokedAt" TIMESTAMP(3);

CREATE TABLE "InvitationEvent" (
  "id" TEXT NOT NULL,
  "invitationId" TEXT NOT NULL,
  "eventId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "InvitationEvent_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "RsvpEventSelection" (
  "id" TEXT NOT NULL,
  "rsvpId" TEXT NOT NULL,
  "eventId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "RsvpEventSelection_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "RsvpHistory" (
  "id" TEXT NOT NULL,
  "rsvpId" TEXT NOT NULL,
  "status" "RsvpStatus" NOT NULL,
  "adultCount" INTEGER NOT NULL,
  "childCount" INTEGER NOT NULL,
  "vegetarianCount" INTEGER NOT NULL,
  "needsTransport" BOOLEAN NOT NULL,
  "message" TEXT,
  "selectedEventIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "source" TEXT NOT NULL DEFAULT 'GUEST',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "RsvpHistory_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Notification" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "userId" TEXT,
  "type" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "metadata" JSONB,
  "readAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "InvitationEvent_invitationId_eventId_key" ON "InvitationEvent"("invitationId", "eventId");
CREATE INDEX "InvitationEvent_eventId_idx" ON "InvitationEvent"("eventId");
CREATE UNIQUE INDEX "RsvpEventSelection_rsvpId_eventId_key" ON "RsvpEventSelection"("rsvpId", "eventId");
CREATE INDEX "RsvpEventSelection_eventId_idx" ON "RsvpEventSelection"("eventId");
CREATE INDEX "RsvpHistory_rsvpId_createdAt_idx" ON "RsvpHistory"("rsvpId", "createdAt");
CREATE INDEX "Notification_weddingId_createdAt_idx" ON "Notification"("weddingId", "createdAt");
CREATE INDEX "Notification_userId_readAt_createdAt_idx" ON "Notification"("userId", "readAt", "createdAt");

ALTER TABLE "InvitationEvent" ADD CONSTRAINT "InvitationEvent_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "InvitationEvent" ADD CONSTRAINT "InvitationEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "RsvpEventSelection" ADD CONSTRAINT "RsvpEventSelection_rsvpId_fkey" FOREIGN KEY ("rsvpId") REFERENCES "Rsvp"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "RsvpEventSelection" ADD CONSTRAINT "RsvpEventSelection_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "RsvpHistory" ADD CONSTRAINT "RsvpHistory_rsvpId_fkey" FOREIGN KEY ("rsvpId") REFERENCES "Rsvp"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Preserve existing invitation behavior by allowing every event of the same wedding.
INSERT INTO "InvitationEvent" ("id", "invitationId", "eventId", "createdAt")
SELECT 'ie_' || md5(i."id" || e."id"), i."id", e."id", CURRENT_TIMESTAMP
FROM "Invitation" i
JOIN "Guest" g ON g."id" = i."guestId"
JOIN "Event" e ON e."weddingId" = g."weddingId"
ON CONFLICT ("invitationId", "eventId") DO NOTHING;
