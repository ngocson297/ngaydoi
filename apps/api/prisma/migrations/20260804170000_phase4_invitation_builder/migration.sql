-- Phase 4: Invitation Builder
ALTER TABLE "MediaAsset"
  ADD COLUMN "mimeType" TEXT NOT NULL DEFAULT 'image/jpeg',
  ADD COLUMN "sizeBytes" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "width" INTEGER,
  ADD COLUMN "height" INTEGER,
  ADD COLUMN "isCover" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

CREATE INDEX "MediaAsset_weddingId_isCover_idx" ON "MediaAsset"("weddingId", "isCover");

CREATE TABLE "InvitationDesign" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "templateKey" TEXT NOT NULL DEFAULT 'classic-wine',
  "paletteKey" TEXT NOT NULL DEFAULT 'wine',
  "primaryColor" TEXT NOT NULL DEFAULT '#7C2D3B',
  "accentColor" TEXT NOT NULL DEFAULT '#B28A4A',
  "backgroundColor" TEXT NOT NULL DEFAULT '#FBF7F1',
  "surfaceColor" TEXT NOT NULL DEFAULT '#FFFDF9',
  "textColor" TEXT NOT NULL DEFAULT '#29231F',
  "headingFont" TEXT NOT NULL DEFAULT 'elegant-serif',
  "bodyFont" TEXT NOT NULL DEFAULT 'clean-sans',
  "heroEyebrow" TEXT NOT NULL DEFAULT 'Trân trọng báo tin vui',
  "greeting" TEXT NOT NULL DEFAULT 'Trân trọng kính mời bạn đến chung vui trong ngày trọng đại của chúng mình.',
  "storyTitle" TEXT NOT NULL DEFAULT 'Ngày mình chung đôi',
  "galleryTitle" TEXT NOT NULL DEFAULT 'Khoảnh khắc của chúng mình',
  "eventsTitle" TEXT NOT NULL DEFAULT 'Chương trình ngày cưới',
  "countdownTitle" TEXT NOT NULL DEFAULT 'Đếm ngược đến ngày chung đôi',
  "footerMessage" TEXT NOT NULL DEFAULT 'Cảm ơn bạn đã trở thành một phần trong ngày đặc biệt của chúng mình.',
  "showHero" BOOLEAN NOT NULL DEFAULT true,
  "showFamily" BOOLEAN NOT NULL DEFAULT true,
  "showStory" BOOLEAN NOT NULL DEFAULT true,
  "showGallery" BOOLEAN NOT NULL DEFAULT true,
  "showEvents" BOOLEAN NOT NULL DEFAULT true,
  "showCountdown" BOOLEAN NOT NULL DEFAULT true,
  "showFooter" BOOLEAN NOT NULL DEFAULT true,
  "musicEnabled" BOOLEAN NOT NULL DEFAULT false,
  "musicUrl" TEXT,
  "sectionOrder" TEXT[] NOT NULL DEFAULT ARRAY['hero','family','story','gallery','countdown','events','footer']::TEXT[],
  "revision" INTEGER NOT NULL DEFAULT 1,
  "autosavedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "InvitationDesign_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "InvitationDesign_weddingId_key" ON "InvitationDesign"("weddingId");
ALTER TABLE "InvitationDesign" ADD CONSTRAINT "InvitationDesign_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "InvitationVersion" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "versionNumber" INTEGER NOT NULL,
  "reason" TEXT NOT NULL DEFAULT 'MANUAL',
  "snapshot" JSONB NOT NULL,
  "createdById" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "InvitationVersion_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "InvitationVersion_weddingId_versionNumber_key" ON "InvitationVersion"("weddingId", "versionNumber");
CREATE INDEX "InvitationVersion_weddingId_createdAt_idx" ON "InvitationVersion"("weddingId", "createdAt");
ALTER TABLE "InvitationVersion" ADD CONSTRAINT "InvitationVersion_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "InvitationPreviewToken" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "token" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "revokedAt" TIMESTAMP(3),
  "createdById" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "InvitationPreviewToken_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "InvitationPreviewToken_token_key" ON "InvitationPreviewToken"("token");
CREATE INDEX "InvitationPreviewToken_weddingId_expiresAt_idx" ON "InvitationPreviewToken"("weddingId", "expiresAt");
ALTER TABLE "InvitationPreviewToken" ADD CONSTRAINT "InvitationPreviewToken_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Create default designs for weddings created in earlier phases.
INSERT INTO "InvitationDesign" ("id", "weddingId", "templateKey", "createdAt", "updatedAt", "autosavedAt")
SELECT 'design_' || "id", "id", COALESCE("templateKey", 'classic-wine'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
FROM "Wedding"
ON CONFLICT ("weddingId") DO NOTHING;
