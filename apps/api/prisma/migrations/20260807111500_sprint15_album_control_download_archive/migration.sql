-- Sprint 15.14: comments are instant by default while moderation stays opt-in.
ALTER TABLE "MemoryAlbum" ALTER COLUMN "commentModerationRequired" SET DEFAULT false;

-- Existing albums move to instant comments. Owners can re-enable pre-moderation in settings.
UPDATE "MemoryAlbum" SET "commentModerationRequired" = false WHERE "commentModerationRequired" = true;
