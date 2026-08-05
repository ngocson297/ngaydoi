CREATE TYPE "UserRole" AS ENUM ('CUSTOMER', 'FAMILY_EDITOR', 'STAFF', 'ADMIN', 'PARTNER', 'CHECKIN_STAFF');
CREATE TYPE "UserStatus" AS ENUM ('PENDING_VERIFICATION', 'ACTIVE', 'DISABLED', 'DELETION_REQUESTED');
CREATE TYPE "WeddingStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'SUSPENDED', 'ARCHIVED');
CREATE TYPE "WeddingSide" AS ENUM ('SHARED', 'BRIDE', 'GROOM');
CREATE TYPE "EventType" AS ENUM ('ENGAGEMENT', 'ANCESTOR_CEREMONY', 'WEDDING_CEREMONY', 'RECEPTION', 'OTHER');
CREATE TYPE "InvitationStatus" AS ENUM ('CREATED', 'SENT', 'VIEWED', 'RESPONDED', 'REVOKED');
CREATE TYPE "RsvpStatus" AS ENUM ('ATTENDING', 'DECLINED', 'MAYBE');

CREATE TABLE "User" (
  "id" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "displayName" TEXT NOT NULL,
  "phone" TEXT,
  "avatarUrl" TEXT,
  "role" "UserRole" NOT NULL DEFAULT 'CUSTOMER',
  "status" "UserStatus" NOT NULL DEFAULT 'PENDING_VERIFICATION',
  "emailVerifiedAt" TIMESTAMP(3),
  "passwordChangedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "authVersion" INTEGER NOT NULL DEFAULT 0,
  "failedLoginAttempts" INTEGER NOT NULL DEFAULT 0,
  "lockedUntil" TIMESTAMP(3),
  "accountDeletionRequestedAt" TIMESTAMP(3),
  "deletedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "RefreshSession" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "tokenHash" TEXT NOT NULL,
  "familyId" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "lastUsedAt" TIMESTAMP(3),
  "revokedAt" TIMESTAMP(3),
  "revokeReason" TEXT,
  "replacedBySessionId" TEXT,
  "ipAddress" TEXT,
  "userAgent" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "RefreshSession_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "EmailVerificationToken" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "tokenHash" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "usedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "EmailVerificationToken_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PasswordResetToken" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "tokenHash" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "usedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "AuditLog" (
  "id" TEXT NOT NULL,
  "userId" TEXT,
  "action" TEXT NOT NULL,
  "success" BOOLEAN NOT NULL DEFAULT true,
  "ipAddress" TEXT,
  "userAgent" TEXT,
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Wedding" (
  "id" TEXT NOT NULL,
  "ownerId" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "brideName" TEXT NOT NULL,
  "groomName" TEXT NOT NULL,
  "story" TEXT,
  "coverImageUrl" TEXT,
  "musicUrl" TEXT,
  "templateKey" TEXT NOT NULL DEFAULT 'classic-wine',
  "status" "WeddingStatus" NOT NULL DEFAULT 'DRAFT',
  "timezone" TEXT NOT NULL DEFAULT 'Asia/Ho_Chi_Minh',
  "publishedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Wedding_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Event" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "type" "EventType" NOT NULL,
  "side" "WeddingSide" NOT NULL DEFAULT 'SHARED',
  "title" TEXT NOT NULL,
  "startsAt" TIMESTAMP(3) NOT NULL,
  "endsAt" TIMESTAMP(3),
  "venueName" TEXT NOT NULL,
  "address" TEXT NOT NULL,
  "mapUrl" TEXT,
  "dressCode" TEXT,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Guest" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "fullName" TEXT NOT NULL,
  "salutation" TEXT,
  "phone" TEXT,
  "email" TEXT,
  "groupName" TEXT,
  "side" "WeddingSide" NOT NULL DEFAULT 'SHARED',
  "invitedBy" TEXT,
  "tableName" TEXT,
  "maxAdultCount" INTEGER NOT NULL DEFAULT 1,
  "maxChildCount" INTEGER NOT NULL DEFAULT 0,
  "note" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Invitation" (
  "id" TEXT NOT NULL,
  "guestId" TEXT NOT NULL,
  "eventId" TEXT,
  "token" TEXT NOT NULL,
  "status" "InvitationStatus" NOT NULL DEFAULT 'CREATED',
  "sentAt" TIMESTAMP(3),
  "firstViewedAt" TIMESTAMP(3),
  "lastViewedAt" TIMESTAMP(3),
  "viewCount" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Rsvp" (
  "id" TEXT NOT NULL,
  "invitationId" TEXT NOT NULL,
  "eventId" TEXT,
  "status" "RsvpStatus" NOT NULL,
  "adultCount" INTEGER NOT NULL DEFAULT 1,
  "childCount" INTEGER NOT NULL DEFAULT 0,
  "vegetarianCount" INTEGER NOT NULL DEFAULT 0,
  "needsTransport" BOOLEAN NOT NULL DEFAULT false,
  "message" TEXT,
  "respondedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Rsvp_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "MediaAsset" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "storageKey" TEXT NOT NULL,
  "publicUrl" TEXT NOT NULL,
  "altText" TEXT,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "MediaAsset_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_status_idx" ON "User"("status");
CREATE INDEX "User_role_idx" ON "User"("role");
CREATE UNIQUE INDEX "RefreshSession_tokenHash_key" ON "RefreshSession"("tokenHash");
CREATE INDEX "RefreshSession_userId_revokedAt_idx" ON "RefreshSession"("userId", "revokedAt");
CREATE INDEX "RefreshSession_familyId_idx" ON "RefreshSession"("familyId");
CREATE INDEX "RefreshSession_expiresAt_idx" ON "RefreshSession"("expiresAt");
CREATE UNIQUE INDEX "EmailVerificationToken_tokenHash_key" ON "EmailVerificationToken"("tokenHash");
CREATE INDEX "EmailVerificationToken_userId_expiresAt_idx" ON "EmailVerificationToken"("userId", "expiresAt");
CREATE UNIQUE INDEX "PasswordResetToken_tokenHash_key" ON "PasswordResetToken"("tokenHash");
CREATE INDEX "PasswordResetToken_userId_expiresAt_idx" ON "PasswordResetToken"("userId", "expiresAt");
CREATE INDEX "AuditLog_userId_createdAt_idx" ON "AuditLog"("userId", "createdAt");
CREATE INDEX "AuditLog_action_createdAt_idx" ON "AuditLog"("action", "createdAt");
CREATE UNIQUE INDEX "Wedding_slug_key" ON "Wedding"("slug");
CREATE INDEX "Wedding_ownerId_idx" ON "Wedding"("ownerId");
CREATE INDEX "Wedding_status_idx" ON "Wedding"("status");
CREATE INDEX "Event_weddingId_startsAt_idx" ON "Event"("weddingId", "startsAt");
CREATE INDEX "Guest_weddingId_groupName_idx" ON "Guest"("weddingId", "groupName");
CREATE INDEX "Guest_weddingId_side_idx" ON "Guest"("weddingId", "side");
CREATE UNIQUE INDEX "Invitation_token_key" ON "Invitation"("token");
CREATE INDEX "Invitation_guestId_idx" ON "Invitation"("guestId");
CREATE INDEX "Invitation_eventId_idx" ON "Invitation"("eventId");
CREATE UNIQUE INDEX "Rsvp_invitationId_key" ON "Rsvp"("invitationId");
CREATE INDEX "Rsvp_eventId_status_idx" ON "Rsvp"("eventId", "status");
CREATE INDEX "MediaAsset_weddingId_sortOrder_idx" ON "MediaAsset"("weddingId", "sortOrder");

ALTER TABLE "RefreshSession" ADD CONSTRAINT "RefreshSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "EmailVerificationToken" ADD CONSTRAINT "EmailVerificationToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PasswordResetToken" ADD CONSTRAINT "PasswordResetToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Wedding" ADD CONSTRAINT "Wedding_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Event" ADD CONSTRAINT "Event_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Rsvp" ADD CONSTRAINT "Rsvp_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Rsvp" ADD CONSTRAINT "Rsvp_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "MediaAsset" ADD CONSTRAINT "MediaAsset_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
