CREATE TYPE "MemoryAssetStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'ARCHIVED');
CREATE TYPE "MemoryAssetType" AS ENUM ('IMAGE', 'VIDEO');

CREATE TABLE "MemoryAlbum" (
    "id" TEXT NOT NULL,
    "weddingId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Khoảnh khắc cùng nhau',
    "description" TEXT NOT NULL DEFAULT 'Cùng góp những bức ảnh và video đáng nhớ trong ngày vui của chúng mình.',
    "thankYouTitle" TEXT NOT NULL DEFAULT 'Cảm ơn bạn đã chung vui',
    "thankYouMessage" TEXT NOT NULL DEFAULT 'Mỗi khoảnh khắc bạn chia sẻ đều là một món quà thật quý giá với chúng mình.',
    "uploadEnabled" BOOLEAN NOT NULL DEFAULT true,
    "publicEnabled" BOOLEAN NOT NULL DEFAULT true,
    "moderationRequired" BOOLEAN NOT NULL DEFAULT true,
    "showUploaderName" BOOLEAN NOT NULL DEFAULT true,
    "closesAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "MemoryAlbum_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "MemoryAsset" (
    "id" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,
    "invitationId" TEXT,
    "type" "MemoryAssetType" NOT NULL,
    "status" "MemoryAssetStatus" NOT NULL DEFAULT 'PENDING',
    "storageKey" TEXT NOT NULL,
    "publicUrl" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "sizeBytes" INTEGER NOT NULL,
    "originalName" TEXT NOT NULL,
    "uploaderName" TEXT,
    "uploaderMessage" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "rejectionReason" TEXT,
    "moderationNote" TEXT,
    "approvedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "MemoryAsset_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "MemoryAlbum_weddingId_key" ON "MemoryAlbum"("weddingId");
CREATE UNIQUE INDEX "MemoryAlbum_token_key" ON "MemoryAlbum"("token");
CREATE INDEX "MemoryAlbum_publicEnabled_uploadEnabled_idx" ON "MemoryAlbum"("publicEnabled", "uploadEnabled");
CREATE INDEX "MemoryAsset_albumId_status_createdAt_idx" ON "MemoryAsset"("albumId", "status", "createdAt");
CREATE INDEX "MemoryAsset_invitationId_createdAt_idx" ON "MemoryAsset"("invitationId", "createdAt");

ALTER TABLE "MemoryAlbum" ADD CONSTRAINT "MemoryAlbum_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "MemoryAsset" ADD CONSTRAINT "MemoryAsset_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "MemoryAlbum"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "MemoryAsset" ADD CONSTRAINT "MemoryAsset_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
