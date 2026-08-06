ALTER TABLE "InvitationDesign"
  ADD COLUMN "giftTitle" TEXT NOT NULL DEFAULT 'Gửi lời chúc đến đôi mình',
  ADD COLUMN "giftMessage" TEXT NOT NULL DEFAULT 'Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi thêm một lời chúc mừng, bạn có thể dùng thông tin bên dưới.',
  ADD COLUMN "giftAccounts" JSONB NOT NULL DEFAULT '[]',
  ADD COLUMN "showGift" BOOLEAN NOT NULL DEFAULT false;

UPDATE "InvitationDesign"
SET "sectionOrder" = array_cat(array_remove("sectionOrder", 'footer'), ARRAY['gift', 'footer'])
WHERE NOT ('gift' = ANY("sectionOrder"));
