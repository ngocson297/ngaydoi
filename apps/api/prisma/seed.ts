import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { hashPassword } from "../src/common/security/password.js";
import { PrismaClient } from "../src/generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is required");
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

async function main(): Promise<void> {
  const passwordHash = await hashPassword("Demo@12345");
  const owner = await prisma.user.upsert({
    where: { email: "demo@ngaydoi.vn" },
    update: {
      passwordHash,
      displayName: "Minh & Anh Demo",
      role: "CUSTOMER",
      status: "ACTIVE",
      emailVerifiedAt: new Date(),
      failedLoginAttempts: 0,
      lockedUntil: null,
    },
    create: {
      email: "demo@ngaydoi.vn",
      passwordHash,
      displayName: "Minh & Anh Demo",
      role: "CUSTOMER",
      status: "ACTIVE",
      emailVerifiedAt: new Date(),
    },
  });

  const familyEditor = await prisma.user.upsert({
    where: { email: "family@ngaydoi.vn" },
    update: {
      passwordHash,
      displayName: "Người thân Demo",
      role: "FAMILY_EDITOR",
      status: "ACTIVE",
      emailVerifiedAt: new Date(),
      failedLoginAttempts: 0,
      lockedUntil: null,
    },
    create: {
      email: "family@ngaydoi.vn",
      passwordHash,
      displayName: "Người thân Demo",
      role: "FAMILY_EDITOR",
      status: "ACTIVE",
      emailVerifiedAt: new Date(),
    },
  });

  const admin = await prisma.user.upsert({
    where: { email: "admin@ngaydoi.vn" },
    update: { passwordHash, displayName: "Ngày Đôi Admin", role: "ADMIN", status: "ACTIVE", emailVerifiedAt: new Date(), failedLoginAttempts: 0, lockedUntil: null },
    create: { email: "admin@ngaydoi.vn", passwordHash, displayName: "Ngày Đôi Admin", role: "ADMIN", status: "ACTIVE", emailVerifiedAt: new Date() },
  });

  const planDefinitions = [
    { code: "FREE" as const, name: "Khởi đầu", description: "Dùng thử công cụ và chuẩn bị nội dung trước khi xuất bản.", priceAmount: 0, guestLimit: 30, mediaLimit: 5, templateKeys: ["classic-wine", "garden-sage", "blush-romance"], customDomain: false, prioritySupport: false, requiresPublishReview: true, sortOrder: 0 },
    { code: "STARTER" as const, name: "Cơ bản", description: "12 mẫu thiệp đa dạng cho cặp đôi bắt đầu nhanh.", priceAmount: 199000, guestLimit: 100, mediaLimit: 20, templateKeys: ["classic-wine", "garden-sage", "blush-romance", "modern-noir", "ocean-minimal", "lotus-vietnamese", "imperial-red", "ivory-gold", "saigon-sunrise", "polaroid-memories", "han-river-blue", "rose-garden-frame"], customDomain: false, prioritySupport: false, requiresPublishReview: false, sortOrder: 1 },
    { code: "STANDARD" as const, name: "Tiêu chuẩn", description: "24 mẫu, RSVP, khách mời, album và QR mừng cưới.", priceAmount: 399000, guestLimit: 350, mediaLimit: 80, templateKeys: ["classic-wine", "garden-sage", "blush-romance", "modern-noir", "ocean-minimal", "lotus-vietnamese", "imperial-red", "ivory-gold", "saigon-sunrise", "polaroid-memories", "han-river-blue", "rose-garden-frame", "lavender-dream", "terracotta-sunset", "pearl-minimal", "midnight-blue", "tropical-palm", "cherry-blossom", "rustic-kraft", "art-deco-emerald", "cinematic-veil", "provence-blue", "newspaper-love", "sunset-film"], customDomain: false, prioritySupport: true, requiresPublishReview: true, sortOrder: 2 },
    { code: "PREMIUM" as const, name: "Cao cấp", description: "Toàn bộ 36 template, custom domain và hỗ trợ ưu tiên.", priceAmount: 699000, guestLimit: 1000, mediaLimit: 250, templateKeys: ["classic-wine", "garden-sage", "blush-romance", "modern-noir", "ocean-minimal", "lotus-vietnamese", "imperial-red", "ivory-gold", "saigon-sunrise", "polaroid-memories", "han-river-blue", "rose-garden-frame", "lavender-dream", "terracotta-sunset", "pearl-minimal", "midnight-blue", "tropical-palm", "cherry-blossom", "rustic-kraft", "art-deco-emerald", "cinematic-veil", "provence-blue", "newspaper-love", "sunset-film", "champagne-glow", "celestial-night", "coastal-sand", "tea-ceremony", "monochrome-editorial", "peach-bloom", "heritage-indigo", "botanical-white", "dragon-phoenix", "museum-ivory", "winter-silver", "cottage-floral"], customDomain: true, prioritySupport: true, requiresPublishReview: true, sortOrder: 3 },
  ];
  const plans = new Map<string, { id: string }>();
  for (const definition of planDefinitions) {
    const plan = await prisma.plan.upsert({ where: { code: definition.code }, update: definition, create: definition });
    plans.set(definition.code, plan);
  }

  const addOnDefinitions = [
    { code: "GUEST_100", name: "+100 khách mời", description: "Mở rộng thêm 100 khách cho wedding hiện tại.", priceAmount: 99000, guestLimitBonus: 100, mediaLimitBonus: 0, sortOrder: 1 },
    { code: "MEDIA_50", name: "+50 ảnh", description: "Mở rộng album thêm 50 ảnh tối ưu web.", priceAmount: 79000, guestLimitBonus: 0, mediaLimitBonus: 50, sortOrder: 2 },
  ];
  for (const definition of addOnDefinitions) await prisma.addOn.upsert({ where: { code: definition.code }, update: definition, create: definition });
  await prisma.coupon.upsert({
    where: { code: "WELCOME10" },
    update: { name: "Chào mừng khách hàng mới", discountType: "PERCENTAGE", discountValue: 10, active: true, usageLimit: 1000, planCodes: ["STARTER", "STANDARD", "PREMIUM"] },
    create: { code: "WELCOME10", name: "Chào mừng khách hàng mới", discountType: "PERCENTAGE", discountValue: 10, active: true, usageLimit: 1000, planCodes: ["STARTER", "STANDARD", "PREMIUM"] },
  });

  const wedding = await prisma.wedding.upsert({
    where: { slug: "minh-anh" },
    update: {
      ownerId: owner.id,
      activePlanId: plans.get("STANDARD")?.id,
      title: "Đám cưới Minh & Anh",
      brideName: "Anh",
      groomName: "Minh",
      mainDate: new Date("2026-10-18T00:00:00.000Z"),
      brideFatherName: "Ông Trần Văn Bình",
      brideMotherName: "Bà Nguyễn Thị Hạnh",
      groomFatherName: "Ông Nguyễn Văn Thành",
      groomMotherName: "Bà Lê Thị Mai",
      showBrideParents: true,
      showGroomParents: true,
      story: "Từ một cuộc gặp tình cờ đến ngày mình chung đôi.",
      status: "PUBLISHED",
      readyForReviewAt: new Date(),
      publishedAt: new Date(),
      timezone: "Asia/Ho_Chi_Minh",
    },
    create: {
      ownerId: owner.id,
      activePlanId: plans.get("STANDARD")?.id,
      slug: "minh-anh",
      title: "Đám cưới Minh & Anh",
      brideName: "Anh",
      groomName: "Minh",
      mainDate: new Date("2026-10-18T00:00:00.000Z"),
      brideFatherName: "Ông Trần Văn Bình",
      brideMotherName: "Bà Nguyễn Thị Hạnh",
      groomFatherName: "Ông Nguyễn Văn Thành",
      groomMotherName: "Bà Lê Thị Mai",
      story: "Từ một cuộc gặp tình cờ đến ngày mình chung đôi.",
      status: "PUBLISHED",
      readyForReviewAt: new Date(),
      publishedAt: new Date(),
      timezone: "Asia/Ho_Chi_Minh",
    },
  });

  await prisma.memoryAlbum.upsert({
    where: { weddingId: wedding.id },
    update: {
      title: "Khoảnh khắc của Minh & Anh",
      description: "Cùng góp những bức ảnh và video đáng nhớ trong ngày vui của Minh & Anh.",
      thankYouTitle: "Cảm ơn bạn đã chung vui",
      thankYouMessage: "Mỗi khoảnh khắc bạn chia sẻ đều là một món quà thật quý giá với chúng mình.",
      publicEnabled: true,
      uploadEnabled: true,
      moderationRequired: true,
      showUploaderName: true,
    },
    create: {
      weddingId: wedding.id,
      token: crypto.randomUUID().replaceAll("-", ""),
      title: "Khoảnh khắc của Minh & Anh",
      description: "Cùng góp những bức ảnh và video đáng nhớ trong ngày vui của Minh & Anh.",
      thankYouTitle: "Cảm ơn bạn đã chung vui",
      thankYouMessage: "Mỗi khoảnh khắc bạn chia sẻ đều là một món quà thật quý giá với chúng mình.",
    },
  });

  await prisma.invitationDesign.upsert({
    where: { weddingId: wedding.id },
    update: {
      templateKey: "garden-sage",
      paletteKey: "garden-sage",
      primaryColor: "#566B55",
      accentColor: "#A58354",
      backgroundColor: "#F4F5EF",
      surfaceColor: "#FFFEFA",
      textColor: "#263026",
      headingFont: "romantic-serif",
      bodyFont: "clean-sans",
      heroEyebrow: "Trân trọng báo tin vui",
      greeting: "Sau những tháng ngày đồng hành, chúng mình rất hạnh phúc được mời bạn đến chung vui trong ngày thành đôi.",
      storyTitle: "Từ gặp gỡ đến chung đôi",
      galleryTitle: "Những khoảnh khắc thương nhớ",
      eventsTitle: "Chương trình ngày cưới",
      countdownTitle: "Cùng đếm ngược đến ngày vui",
      footerMessage: "Sự hiện diện của bạn là món quà quý giá nhất dành cho chúng mình.",
      showHero: true,
      showFamily: true,
      showStory: true,
      showGallery: true,
      showEvents: true,
      showCountdown: true,
      showFooter: true,
    },
    create: {
      weddingId: wedding.id,
      templateKey: "garden-sage",
      paletteKey: "garden-sage",
      primaryColor: "#566B55",
      accentColor: "#A58354",
      backgroundColor: "#F4F5EF",
      surfaceColor: "#FFFEFA",
      textColor: "#263026",
      headingFont: "romantic-serif",
      greeting: "Sau những tháng ngày đồng hành, chúng mình rất hạnh phúc được mời bạn đến chung vui trong ngày thành đôi.",
    },
  });

  await prisma.weddingCollaborator.deleteMany({ where: { weddingId: wedding.id } });
  await prisma.weddingCollaborator.create({
    data: {
      weddingId: wedding.id,
      email: familyEditor.email,
      userId: familyEditor.id,
      invitedById: owner.id,
      permission: "EDIT",
      status: "ACCEPTED",
      token: crypto.randomUUID(),
      expiresAt: new Date("2027-01-01T00:00:00.000Z"),
      acceptedAt: new Date(),
    },
  });

  // Seed only records explicitly tagged as demo. User-created guests are preserved across upgrades.
  await prisma.guest.deleteMany({ where: { weddingId: wedding.id, tags: { has: "seed-demo" } } });

  const eventDefinitions = [
    {
      type: "ANCESTOR_CEREMONY" as const, side: "BRIDE" as const, title: "Lễ gia tiên nhà gái",
      startsAt: new Date("2026-10-18T01:00:00.000Z"), venueName: "Tư gia nhà gái", address: "Hải Châu, Đà Nẵng",
      dressCode: "Trang phục lịch sự", note: "Có mặt trước 15 phút.", sortOrder: 0,
    },
    {
      type: "WEDDING_CEREMONY" as const, side: "GROOM" as const, title: "Lễ thành hôn",
      startsAt: new Date("2026-10-18T03:30:00.000Z"), venueName: "Tư gia nhà trai", address: "Sơn Trà, Đà Nẵng",
      mapUrl: "https://maps.google.com", sortOrder: 1,
    },
    {
      type: "RECEPTION" as const, side: "SHARED" as const, title: "Tiệc cưới",
      startsAt: new Date("2026-10-18T10:30:00.000Z"), venueName: "Grand Ballroom, Trung tâm Hội nghị Biển Đông",
      address: "Đà Nẵng, Việt Nam", mapUrl: "https://maps.google.com", dressCode: "Formal · Tông màu trung tính", sortOrder: 2,
    },
  ];

  const events: Array<{ id: string }> = [];
  for (const definition of eventDefinitions) {
    const existing = await prisma.event.findFirst({ where: { weddingId: wedding.id, title: definition.title } });
    const event = existing
      ? await prisma.event.update({ where: { id: existing.id }, data: { ...definition, timezone: "Asia/Ho_Chi_Minh" } })
      : await prisma.event.create({ data: { weddingId: wedding.id, ...definition, timezone: "Asia/Ho_Chi_Minh" } });
    events.push(event);
  }

  const guestData = [
    { fullName: "Anh Nguyễn Hoàng", salutation: "Anh", groupName: "Bạn chú rể", side: "GROOM" as const, status: "ATTENDING" as const, adultCount: 2, childCount: 0 },
    { fullName: "Chị Trần Ngọc", salutation: "Chị", groupName: "Bạn cô dâu", side: "BRIDE" as const, status: "ATTENDING" as const, adultCount: 1, childCount: 0 },
    { fullName: "Gia đình cô Lan", salutation: "Gia đình", groupName: "Gia đình", side: "BRIDE" as const, status: "DECLINED" as const, adultCount: 0, childCount: 0 },
    { fullName: "Anh Phạm Quốc", salutation: "Anh", groupName: "Đồng nghiệp", side: "GROOM" as const, status: null, adultCount: 0, childCount: 0 },
  ];

  for (const [index, item] of guestData.entries()) {
    const guest = await prisma.guest.create({
      data: {
        weddingId: wedding.id, fullName: item.fullName, salutation: item.salutation, groupName: item.groupName, side: item.side,
        maxAdultCount: 4, maxChildCount: 2, tags: ["seed-demo", index < 2 ? "thân thiết" : "demo"],
      },
    });
    const invitation = await prisma.invitation.create({
      data: {
        guestId: guest.id, token: crypto.randomUUID(), greeting: `Trân trọng kính mời ${item.salutation} ${item.fullName}`,
        status: item.status ? "VIEWED" : "CREATED", firstViewedAt: item.status ? new Date() : null,
        lastViewedAt: item.status ? new Date() : null, viewCount: item.status ? 1 : 0,
        visibleEvents: { create: events.map((event) => ({ eventId: event.id })) },
      },
    });
    if (item.status) {
      const rsvp = await prisma.rsvp.create({
        data: {
          invitationId: invitation.id, eventId: item.status === "ATTENDING" ? events[2].id : null, status: item.status,
          adultCount: item.adultCount, childCount: item.childCount, vegetarianCount: 0, needsTransport: false,
          selectedEvents: item.status === "ATTENDING" ? { create: [{ eventId: events[2].id }] } : undefined,
        },
      });
      await prisma.rsvpHistory.create({
        data: {
          rsvpId: rsvp.id, status: item.status, adultCount: item.adultCount, childCount: item.childCount,
          vegetarianCount: 0, needsTransport: false, selectedEventIds: item.status === "ATTENDING" ? [events[2].id] : [], source: "SEED",
        },
      });
    }
  }

  const standardPlan = await prisma.plan.findUniqueOrThrow({ where: { code: "STANDARD" } });
  const demoOrder = await prisma.order.upsert({
    where: { orderNumber: "ND-DEMO-0001" },
    update: { userId: owner.id, weddingId: wedding.id, planId: standardPlan.id, subtotalAmount: standardPlan.priceAmount, totalAmount: standardPlan.priceAmount, status: "COMPLETED", paymentStatus: "CONFIRMED", fulfillmentStatus: "ACTIVE", activatedAt: new Date(), completedAt: new Date() },
    create: {
      orderNumber: "ND-DEMO-0001", userId: owner.id, weddingId: wedding.id, planId: standardPlan.id,
      subtotalAmount: standardPlan.priceAmount, totalAmount: standardPlan.priceAmount, status: "COMPLETED", paymentStatus: "CONFIRMED", fulfillmentStatus: "ACTIVE", activatedAt: new Date(), completedAt: new Date(),
      items: { create: [{ itemType: "PLAN", planId: standardPlan.id, name: standardPlan.name, quantity: 1, unitAmount: standardPlan.priceAmount, totalAmount: standardPlan.priceAmount }] },
      payments: { create: [{ method: "SANDBOX", status: "CONFIRMED", amount: standardPlan.priceAmount, provider: "SEED", providerTransactionId: "seed-demo-payment", confirmedAt: new Date(), reviewedById: admin.id }] },
    },
  });

  const pilotItems = [
    ["PILOT-001", "Infrastructure", "Domain và HTTPS hoạt động", "Xác nhận domain, TLS và redirect HTTPS.", 10],
    ["PILOT-002", "Infrastructure", "Readiness và health checks đạt", "API, database và storage đều READY.", 20],
    ["PILOT-003", "Data", "Backup production thành công", "Tạo backup có manifest và kiểm tra dump.", 30],
    ["PILOT-004", "Data", "Restore drill thành công", "Khôi phục vào môi trường thử nghiệm và đối chiếu dữ liệu.", 40],
    ["PILOT-005", "Product", "Luồng tạo thiệp E2E đạt", "Đăng ký, tạo wedding, thiết kế, publish và mở thiệp.", 50],
    ["PILOT-006", "Product", "Guest và RSVP E2E đạt", "Import khách, mở link cá nhân và gửi RSVP.", 60],
    ["PILOT-007", "Commercial", "Thanh toán pilot được đối soát", "Order, payment review và entitlement chính xác.", 70],
    ["PILOT-008", "Operations", "Email production gửi được", "Verify email, reset password và thông báo vận hành.", 80],
    ["PILOT-009", "Operations", "Cảnh báo và runbook được kiểm thử", "Thực hiện giả lập sự cố và ghi nhận thời gian phản hồi.", 90],
    ["PILOT-010", "UAT", "UAT sign-off", "Không còn issue Critical/High mở trước go-live.", 100],
  ] as const;
  for (const [code, category, title, description, sortOrder] of pilotItems) {
    await prisma.pilotChecklistItem.upsert({ where: { code }, update: { category, title, description, sortOrder }, create: { code, category, title, description, sortOrder } });
  }

  const partnerUser = await prisma.user.upsert({
    where: { email: "partner@ngaydoi.vn" },
    update: { passwordHash, displayName: "Studio Hoa Hồng", role: "PARTNER", status: "ACTIVE", emailVerifiedAt: new Date(), failedLoginAttempts: 0, lockedUntil: null },
    create: { email: "partner@ngaydoi.vn", passwordHash, displayName: "Studio Hoa Hồng", role: "PARTNER", status: "ACTIVE", emailVerifiedAt: new Date() },
  });
  const partner = await prisma.partnerOrganization.upsert({
    where: { slug: "studio-hoa-hong" },
    update: { name: "Studio Hoa Hồng", status: "ACTIVE", contactEmail: partnerUser.email, brandName: "Hoa Hồng Wedding", primaryColor: "#9B4961", commissionRateBps: 1200, approvedAt: new Date(), approvedById: admin.id },
    create: { name: "Studio Hoa Hồng", slug: "studio-hoa-hong", status: "ACTIVE", contactEmail: partnerUser.email, brandName: "Hoa Hồng Wedding", primaryColor: "#9B4961", commissionRateBps: 1200, approvedAt: new Date(), approvedById: admin.id },
  });
  await prisma.partnerMember.upsert({
    where: { partnerId_userId: { partnerId: partner.id, userId: partnerUser.id } },
    update: { role: "OWNER", active: true, joinedAt: new Date() },
    create: { partnerId: partner.id, userId: partnerUser.id, role: "OWNER", active: true, joinedAt: new Date() },
  });
  const partnerClient = await prisma.partnerClient.findFirst({ where: { partnerId: partner.id, customerId: owner.id, weddingId: wedding.id } });
  if (!partnerClient) await prisma.partnerClient.create({ data: { partnerId: partner.id, customerId: owner.id, weddingId: wedding.id, externalRef: "DEMO-CLIENT-001", notes: "Khách hàng demo từ studio" } });
  const existingCommission = await prisma.partnerCommission.findFirst({ where: { partnerId: partner.id, orderId: demoOrder.id } });
  const commissionData = { customerId: owner.id, weddingId: wedding.id, description: "Hoa hồng gói Tiêu chuẩn", baseAmount: demoOrder.totalAmount, rateBps: 1200, commissionAmount: Math.round(demoOrder.totalAmount * 0.12), status: "APPROVED" as const, availableAt: new Date(), approvedAt: new Date() };
  if (existingCommission) await prisma.partnerCommission.update({ where: { id: existingCommission.id }, data: commissionData });
  else await prisma.partnerCommission.create({ data: { partnerId: partner.id, orderId: demoOrder.id, ...commissionData } });

  // Phase 11 demo: seating and check-in station for the reception.
  const receptionEvent = events[2];
  const eventKey = `EVENT:${receptionEvent.id}`;
  const demoTables = [
    { code: "A01", name: "Bàn Hoa Hồng", capacity: 10, zone: "Sảnh A", sortOrder: 10 },
    { code: "A02", name: "Bàn Mẫu Đơn", capacity: 10, zone: "Sảnh A", sortOrder: 20 },
    { code: "VIP01", name: "Bàn Gia Đình", capacity: 12, zone: "Gần sân khấu", sortOrder: 5 },
  ];
  const seededTables: Array<{ id: string; code: string }> = [];
  for (const item of demoTables) {
    const table = await prisma.seatingTable.upsert({
      where: { weddingId_eventKey_code: { weddingId: wedding.id, eventKey, code: item.code } },
      update: { name: item.name, capacity: item.capacity, zone: item.zone, eventId: receptionEvent.id, sortOrder: item.sortOrder },
      create: { weddingId: wedding.id, eventId: receptionEvent.id, eventKey, ...item },
    });
    seededTables.push(table);
  }
  const attendingGuests = await prisma.guest.findMany({
    where: { weddingId: wedding.id, tags: { has: "seed-demo" }, invitations: { some: { rsvp: { status: "ATTENDING" } } } },
    include: { invitations: { where: { rsvp: { status: "ATTENDING" } }, include: { rsvp: true }, take: 1 } },
    orderBy: { createdAt: "asc" },
  });
  for (const [index, guest] of attendingGuests.entries()) {
    const rsvp = guest.invitations[0]?.rsvp;
    const table = seededTables[index % seededTables.length];
    await prisma.seatAssignment.upsert({
      where: { guestId_eventKey: { guestId: guest.id, eventKey } },
      update: { tableId: table.id, seatCount: Math.max(1, (rsvp?.adultCount ?? 1) + (rsvp?.childCount ?? 0)), eventId: receptionEvent.id, weddingId: wedding.id },
      create: { weddingId: wedding.id, eventId: receptionEvent.id, eventKey, tableId: table.id, guestId: guest.id, seatCount: Math.max(1, (rsvp?.adultCount ?? 1) + (rsvp?.childCount ?? 0)) },
    });
  }
  const existingStation = await prisma.checkinStation.findFirst({ where: { weddingId: wedding.id, eventKey, name: "Bàn đón khách chính" } });
  const checkinStation = existingStation ?? await prisma.checkinStation.create({ data: { weddingId: wedding.id, eventId: receptionEvent.id, eventKey, name: "Bàn đón khách chính", token: crypto.randomUUID().replaceAll("-", "") } });

  // Phase 13 demo: a concise planning timeline for the demo wedding.
  const planningSeeds = [
    { title: "Hoàn thiện nội dung thiệp", description: "Rà ngày giờ, địa điểm và thông tin phụ huynh.", category: "INVITATION" as const, priority: "HIGH" as const, status: "DONE" as const, dueAt: new Date("2026-07-20T03:15:27.418Z"), completedAt: new Date("2026-07-18T08:42:13.617Z"), sortOrder: 10 },
    { title: "Gửi thiệp và theo dõi RSVP", description: "Gửi link cá nhân hóa và nhắc những khách chưa phản hồi.", category: "GUESTS" as const, priority: "HIGH" as const, status: "IN_PROGRESS" as const, dueAt: new Date("2026-08-20T06:30:41.519Z"), completedAt: null, sortOrder: 20 },
    { title: "Chốt sơ đồ bàn", description: "Khóa danh sách tham dự và phân bàn theo nhóm khách.", category: "GUESTS" as const, priority: "URGENT" as const, status: "TODO" as const, dueAt: new Date("2026-10-04T09:20:33.713Z"), completedAt: null, sortOrder: 30 },
    { title: "Kiểm tra trạm QR check-in", description: "Mở thử trạm, quét mã mẫu và chuẩn bị phương án tìm kiếm thủ công.", category: "CEREMONY" as const, priority: "HIGH" as const, status: "TODO" as const, dueAt: new Date("2026-10-17T04:45:26.311Z"), completedAt: null, sortOrder: 40 },
    { title: "Duyệt album và gửi lời cảm ơn", description: "Duyệt ảnh khách gửi và chia sẻ album sau cưới.", category: "AFTER_WEDDING" as const, priority: "NORMAL" as const, status: "TODO" as const, dueAt: new Date("2026-10-21T07:10:18.419Z"), completedAt: null, sortOrder: 50 },
  ];
  for (const item of planningSeeds) {
    const existingTask = await prisma.planningTask.findFirst({ where: { weddingId: wedding.id, title: item.title } });
    const data = { ...item, weddingId: wedding.id, source: "SYSTEM" as const, reminderEnabled: true, reminderDaysBefore: item.priority === "URGENT" ? 7 : 3 };
    if (existingTask) await prisma.planningTask.update({ where: { id: existingTask.id }, data });
    else await prisma.planningTask.create({ data });
  }

  console.log({
    weddingId: wedding.id,
    publicSlug: wedding.slug,
    ownerLogin: { email: "demo@ngaydoi.vn", password: "Demo@12345" },
    collaboratorLogin: { email: "family@ngaydoi.vn", password: "Demo@12345" },
    adminLogin: { email: "admin@ngaydoi.vn", password: "Demo@12345" },
    partnerLogin: { email: "partner@ngaydoi.vn", password: "Demo@12345" },
    demoOrder: demoOrder.orderNumber,
    checkinStation: { name: checkinStation.name, token: checkinStation.token },
  });
}

main().finally(async () => prisma.$disconnect());
