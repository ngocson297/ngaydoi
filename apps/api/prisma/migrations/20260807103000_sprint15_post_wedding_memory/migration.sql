ALTER TABLE "MemoryAlbum"
  ADD COLUMN "memoryModeEnabled" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN "thankYouSignature" TEXT,
  ADD COLUMN "showCouplePhoto" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "showWeddingDate" BOOLEAN NOT NULL DEFAULT true;

ALTER TABLE "MemoryAsset"
  ADD COLUMN "featuredOrder" INTEGER,
  ADD COLUMN "featuredAt" TIMESTAMP(3);

CREATE INDEX "MemoryAsset_albumId_status_featuredOrder_idx" ON "MemoryAsset"("albumId", "status", "featuredOrder");
