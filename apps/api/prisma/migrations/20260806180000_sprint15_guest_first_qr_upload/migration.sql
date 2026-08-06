CREATE TABLE "GiftQrAsset" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "storageKey" TEXT NOT NULL,
  "publicUrl" TEXT NOT NULL,
  "mimeType" TEXT NOT NULL,
  "sizeBytes" INTEGER NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "GiftQrAsset_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "GiftQrAsset_storageKey_key" ON "GiftQrAsset"("storageKey");
CREATE INDEX "GiftQrAsset_weddingId_createdAt_idx" ON "GiftQrAsset"("weddingId", "createdAt");
ALTER TABLE "GiftQrAsset" ADD CONSTRAINT "GiftQrAsset_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
