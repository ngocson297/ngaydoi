CREATE TYPE "SocialContentStatus" AS ENUM ('PENDING', 'APPROVED', 'HIDDEN');
CREATE TYPE "MemoryReactionType" AS ENUM ('HEART');

ALTER TABLE "Rsvp" ADD COLUMN "publishWish" BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE "MemoryAlbum"
  ADD COLUMN "reactionsEnabled" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "commentsEnabled" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "commentModerationRequired" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "downloadsEnabled" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "guestbookEnabled" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "guestbookModerationRequired" BOOLEAN NOT NULL DEFAULT true;

CREATE UNIQUE INDEX "MemoryAsset_storageKey_key" ON "MemoryAsset"("storageKey");

CREATE TABLE "MemoryReaction" (
  "id" TEXT NOT NULL,
  "assetId" TEXT NOT NULL,
  "actorHash" TEXT NOT NULL,
  "type" "MemoryReactionType" NOT NULL DEFAULT 'HEART',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "MemoryReaction_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "MemoryComment" (
  "id" TEXT NOT NULL,
  "assetId" TEXT NOT NULL,
  "invitationId" TEXT,
  "authorName" TEXT NOT NULL,
  "actorHash" TEXT NOT NULL,
  "body" TEXT NOT NULL,
  "status" "SocialContentStatus" NOT NULL DEFAULT 'PENDING',
  "approvedAt" TIMESTAMP(3),
  "hiddenAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "MemoryComment_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GuestbookEntry" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "invitationId" TEXT,
  "authorName" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "status" "SocialContentStatus" NOT NULL DEFAULT 'PENDING',
  "approvedAt" TIMESTAMP(3),
  "hiddenAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GuestbookEntry_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "MemoryReaction_assetId_actorHash_type_key" ON "MemoryReaction"("assetId", "actorHash", "type");
CREATE INDEX "MemoryReaction_assetId_type_createdAt_idx" ON "MemoryReaction"("assetId", "type", "createdAt");
CREATE INDEX "MemoryComment_assetId_status_createdAt_idx" ON "MemoryComment"("assetId", "status", "createdAt");
CREATE INDEX "MemoryComment_invitationId_createdAt_idx" ON "MemoryComment"("invitationId", "createdAt");
CREATE UNIQUE INDEX "GuestbookEntry_invitationId_key" ON "GuestbookEntry"("invitationId");
CREATE INDEX "GuestbookEntry_weddingId_status_createdAt_idx" ON "GuestbookEntry"("weddingId", "status", "createdAt");

ALTER TABLE "MemoryReaction" ADD CONSTRAINT "MemoryReaction_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MemoryAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "MemoryComment" ADD CONSTRAINT "MemoryComment_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MemoryAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "MemoryComment" ADD CONSTRAINT "MemoryComment_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "GuestbookEntry" ADD CONSTRAINT "GuestbookEntry_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GuestbookEntry" ADD CONSTRAINT "GuestbookEntry_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
