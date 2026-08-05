ALTER TYPE "WeddingStatus" ADD VALUE IF NOT EXISTS 'READY_FOR_REVIEW';
ALTER TYPE "WeddingStatus" ADD VALUE IF NOT EXISTS 'EXPIRED';

CREATE TYPE "WeddingPermission" AS ENUM ('VIEW', 'EDIT');
CREATE TYPE "CollaborationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REVOKED', 'EXPIRED');

ALTER TABLE "Wedding"
  ADD COLUMN "mainDate" TIMESTAMP(3),
  ADD COLUMN "brideFatherName" TEXT,
  ADD COLUMN "brideMotherName" TEXT,
  ADD COLUMN "groomFatherName" TEXT,
  ADD COLUMN "groomMotherName" TEXT,
  ADD COLUMN "showBrideParents" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "showGroomParents" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "readyForReviewAt" TIMESTAMP(3),
  ADD COLUMN "suspendedAt" TIMESTAMP(3),
  ADD COLUMN "expiresAt" TIMESTAMP(3),
  ADD COLUMN "archivedAt" TIMESTAMP(3),
  ADD COLUMN "duplicatedFromId" TEXT;

ALTER TABLE "Event"
  ADD COLUMN "timezone" TEXT NOT NULL DEFAULT 'Asia/Ho_Chi_Minh',
  ADD COLUMN "note" TEXT,
  ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

CREATE TABLE "WeddingCollaborator" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "userId" TEXT,
  "invitedById" TEXT NOT NULL,
  "permission" "WeddingPermission" NOT NULL DEFAULT 'EDIT',
  "status" "CollaborationStatus" NOT NULL DEFAULT 'PENDING',
  "token" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "acceptedAt" TIMESTAMP(3),
  "revokedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "WeddingCollaborator_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Wedding_mainDate_idx" ON "Wedding"("mainDate");
CREATE INDEX "Event_weddingId_sortOrder_idx" ON "Event"("weddingId", "sortOrder");
CREATE UNIQUE INDEX "WeddingCollaborator_token_key" ON "WeddingCollaborator"("token");
CREATE UNIQUE INDEX "WeddingCollaborator_weddingId_email_key" ON "WeddingCollaborator"("weddingId", "email");
CREATE INDEX "WeddingCollaborator_userId_status_idx" ON "WeddingCollaborator"("userId", "status");
CREATE INDEX "WeddingCollaborator_email_status_idx" ON "WeddingCollaborator"("email", "status");
CREATE INDEX "WeddingCollaborator_weddingId_status_idx" ON "WeddingCollaborator"("weddingId", "status");

ALTER TABLE "WeddingCollaborator"
  ADD CONSTRAINT "WeddingCollaborator_weddingId_fkey"
  FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "WeddingCollaborator"
  ADD CONSTRAINT "WeddingCollaborator_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "WeddingCollaborator"
  ADD CONSTRAINT "WeddingCollaborator_invitedById_fkey"
  FOREIGN KEY ("invitedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
