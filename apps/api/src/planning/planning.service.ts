import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
  type OnModuleDestroy,
  type OnModuleInit,
} from "@nestjs/common";
import {
  PlanningTaskCategory,
  PlanningTaskPriority,
  PlanningTaskSource,
  PlanningTaskStatus,
} from "../generated/prisma/client.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { MailService } from "../operations/mail.service.js";
import { PrismaService } from "../prisma/prisma.service.js";

interface TemplateTask {
  title: string;
  description: string;
  category: PlanningTaskCategory;
  priority: PlanningTaskPriority;
  offsetDays: number;
  assigneeName?: string;
}

const DAY = 86_400_000;
const INACTIVE_STATUSES: PlanningTaskStatus[] = [PlanningTaskStatus.DONE, PlanningTaskStatus.CANCELED];
const trim = (value: unknown, max: number): string => String(value ?? "").trim().slice(0, max);
const escapeHtml = (value: string): string => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ?? character);
const dateOrNull = (value: unknown): Date | null => {
  const raw = trim(value, 60);
  if (!raw) return null;
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) throw new BadRequestException("Ngày hoàn thành không hợp lệ");
  return parsed;
};
const enumValue = <T extends string>(value: unknown, allowed: readonly T[], fallback: T): T => {
  const normalized = trim(value, 40) as T;
  return allowed.includes(normalized) ? normalized : fallback;
};

const TEMPLATE_TASKS: TemplateTask[] = [
  { title: "Thống nhất ngân sách và quy mô ngày cưới", description: "Chốt ngân sách dự kiến, số lượng khách và những ưu tiên quan trọng nhất của hai bạn.", category: PlanningTaskCategory.FOUNDATION, priority: PlanningTaskPriority.HIGH, offsetDays: -300 },
  { title: "Chọn địa điểm tổ chức", description: "Khảo sát, giữ ngày và xác nhận các điều khoản với nhà hàng hoặc địa điểm tổ chức.", category: PlanningTaskCategory.VENUE, priority: PlanningTaskPriority.URGENT, offsetDays: -240 },
  { title: "Đặt các nhà cung cấp chính", description: "Ưu tiên photographer, trang trí, make-up, MC và ban nhạc theo nhu cầu.", category: PlanningTaskCategory.VENDORS, priority: PlanningTaskPriority.HIGH, offsetDays: -210 },
  { title: "Lập danh sách khách mời lần đầu", description: "Tổng hợp danh sách nhà trai, nhà gái và nhóm bạn bè để ước lượng số bàn.", category: PlanningTaskCategory.GUESTS, priority: PlanningTaskPriority.HIGH, offsetDays: -180 },
  { title: "Chọn phong cách thiệp cưới", description: "Chọn mẫu, màu sắc, font chữ và chuẩn bị ảnh dùng trong thiệp.", category: PlanningTaskCategory.INVITATION, priority: PlanningTaskPriority.NORMAL, offsetDays: -150 },
  { title: "Chuẩn bị giấy tờ và thủ tục", description: "Kiểm tra giấy tờ đăng ký kết hôn và các thủ tục gia đình cần hoàn tất.", category: PlanningTaskCategory.LEGAL, priority: PlanningTaskPriority.HIGH, offsetDays: -120 },
  { title: "Hoàn thiện nội dung thiệp", description: "Rà ngày giờ, địa điểm, tên phụ huynh, bản đồ và câu chuyện của hai bạn.", category: PlanningTaskCategory.INVITATION, priority: PlanningTaskPriority.HIGH, offsetDays: -90 },
  { title: "Gửi thiệp và mở RSVP", description: "Gửi link cá nhân hóa, kiểm tra phản hồi và nhắc những khách chưa xác nhận.", category: PlanningTaskCategory.GUESTS, priority: PlanningTaskPriority.HIGH, offsetDays: -60 },
  { title: "Chốt thực đơn và chương trình", description: "Xác nhận thực đơn, timeline nghi lễ, MC, âm thanh và các tiết mục.", category: PlanningTaskCategory.CEREMONY, priority: PlanningTaskPriority.HIGH, offsetDays: -45 },
  { title: "Rà soát ngân sách và thanh toán", description: "Cập nhật các khoản đã cọc, khoản còn lại và ngày cần thanh toán.", category: PlanningTaskCategory.FINANCE, priority: PlanningTaskPriority.NORMAL, offsetDays: -30 },
  { title: "Chốt RSVP và sơ đồ bàn", description: "Khóa danh sách tham dự, phân bàn và chuẩn bị danh sách check-in.", category: PlanningTaskCategory.GUESTS, priority: PlanningTaskPriority.URGENT, offsetDays: -14 },
  { title: "Xác nhận lần cuối với nhà cung cấp", description: "Gửi timeline cuối cùng và số điện thoại đầu mối cho tất cả nhà cung cấp.", category: PlanningTaskCategory.VENDORS, priority: PlanningTaskPriority.URGENT, offsetDays: -7 },
  { title: "Chuẩn bị vật dụng ngày cưới", description: "Nhẫn, giấy tờ, phong bì, quà cảm ơn, bộ sơ cứu và các vật dụng cá nhân.", category: PlanningTaskCategory.PERSONAL, priority: PlanningTaskPriority.URGENT, offsetDays: -2 },
  { title: "Kiểm tra trạm QR check-in", description: "Mở thử link trạm, quét QR mẫu và chuẩn bị phương án tìm khách thủ công.", category: PlanningTaskCategory.CEREMONY, priority: PlanningTaskPriority.HIGH, offsetDays: -1 },
  { title: "Duyệt album và gửi lời cảm ơn", description: "Duyệt ảnh khách gửi, mở album công khai và gửi lời cảm ơn sau ngày cưới.", category: PlanningTaskCategory.AFTER_WEDDING, priority: PlanningTaskPriority.NORMAL, offsetDays: 3 },
  { title: "Hoàn tất thanh toán và lưu hồ sơ", description: "Đối soát chi phí cuối, lưu hợp đồng, hóa đơn và các kỷ niệm quan trọng.", category: PlanningTaskCategory.AFTER_WEDDING, priority: PlanningTaskPriority.NORMAL, offsetDays: 14 },
];

@Injectable()
export class PlanningService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PlanningService.name);
  private timer?: NodeJS.Timeout;

  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
  ) {}

  onModuleInit(): void {
    if (process.env.JOB_RUNNER_ENABLED === "false") return;
    const interval = Math.max(15 * 60_000, Number(process.env.PLANNING_REMINDER_INTERVAL_MS ?? 60 * 60_000));
    this.timer = setInterval(() => void this.processReminders(), interval);
    this.timer.unref();
    setTimeout(() => void this.processReminders(), 5_000).unref();
  }

  onModuleDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private async access(weddingId: string, user: AuthenticatedUser, edit = false): Promise<{ access: "OWNER" | "EDIT" | "VIEW"; wedding: { id: string; title: string; mainDate: Date | null; ownerId: string } }> {
    const wedding = await this.prisma.wedding.findUnique({
      where: { id: weddingId },
      select: {
        id: true,
        title: true,
        mainDate: true,
        ownerId: true,
        collaborators: {
          where: { status: "ACCEPTED", OR: [{ userId: user.id }, { email: user.email.toLowerCase() }] },
          select: { permission: true },
          take: 1,
        },
      },
    });
    if (!wedding) throw new NotFoundException("Không tìm thấy đám cưới");
    const access = wedding.ownerId === user.id ? "OWNER" : wedding.collaborators[0]?.permission;
    if (!access) throw new NotFoundException("Không tìm thấy đám cưới");
    if (edit && access === "VIEW") throw new ForbiddenException("Bạn chỉ có quyền xem kế hoạch cưới");
    return { access, wedding };
  }

  async overview(weddingId: string, user: AuthenticatedUser): Promise<unknown> {
    const { access, wedding } = await this.access(weddingId, user);
    const tasks = await this.prisma.planningTask.findMany({
      where: { weddingId },
      orderBy: [{ status: "asc" }, { dueAt: "asc" }, { sortOrder: "asc" }, { createdAt: "asc" }],
    });
    const now = new Date();
    const dueSoonLimit = new Date(now.getTime() + 14 * DAY);
    const active = tasks.filter((task) => !INACTIVE_STATUSES.includes(task.status));
    const done = tasks.filter((task) => task.status === PlanningTaskStatus.DONE).length;
    const overdue = active.filter((task) => task.dueAt && task.dueAt < now).length;
    const dueSoon = active.filter((task) => task.dueAt && task.dueAt >= now && task.dueAt <= dueSoonLimit).length;
    const eligible = tasks.filter((task) => task.status !== PlanningTaskStatus.CANCELED);
    const progress = eligible.length ? Math.round((done / eligible.length) * 100) : 0;
    return {
      wedding,
      access,
      tasks,
      metrics: { total: tasks.length, done, active: active.length, overdue, dueSoon, progress },
      categories: Object.values(PlanningTaskCategory),
      priorities: Object.values(PlanningTaskPriority),
      statuses: Object.values(PlanningTaskStatus),
    };
  }

  async bootstrap(weddingId: string, user: AuthenticatedUser): Promise<{ created: number; skipped: number }> {
    const { wedding } = await this.access(weddingId, user, true);
    if (!wedding.mainDate) throw new BadRequestException("Hãy cập nhật ngày cưới trước khi tạo timeline tự động");
    const existing = await this.prisma.planningTask.findMany({ where: { weddingId, source: PlanningTaskSource.SYSTEM }, select: { title: true } });
    const existingTitles = new Set(existing.map((task) => task.title));
    const rows = TEMPLATE_TASKS.filter((task) => !existingTitles.has(task.title)).map((task, index) => ({
      weddingId,
      title: task.title,
      description: task.description,
      category: task.category,
      priority: task.priority,
      source: PlanningTaskSource.SYSTEM,
      dueAt: new Date(wedding.mainDate!.getTime() + task.offsetDays * DAY),
      assigneeName: task.assigneeName,
      sortOrder: index * 10,
      reminderEnabled: true,
      reminderDaysBefore: task.priority === PlanningTaskPriority.URGENT ? 7 : 3,
    }));
    if (rows.length) await this.prisma.planningTask.createMany({ data: rows });
    return { created: rows.length, skipped: TEMPLATE_TASKS.length - rows.length };
  }

  async create(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown> {
    await this.access(weddingId, user, true);
    const title = trim(body.title, 120);
    if (title.length < 3) throw new BadRequestException("Tên công việc cần ít nhất 3 ký tự");
    const dueAt = dateOrNull(body.dueAt);
    const category = enumValue(body.category, Object.values(PlanningTaskCategory), PlanningTaskCategory.OTHER);
    const priority = enumValue(body.priority, Object.values(PlanningTaskPriority), PlanningTaskPriority.NORMAL);
    const count = await this.prisma.planningTask.count({ where: { weddingId } });
    return this.prisma.planningTask.create({
      data: {
        weddingId,
        title,
        description: trim(body.description, 1000) || null,
        category,
        priority,
        dueAt,
        assigneeName: trim(body.assigneeName, 100) || null,
        sortOrder: count * 10,
        reminderEnabled: body.reminderEnabled === undefined ? true : Boolean(body.reminderEnabled),
        reminderDaysBefore: Math.min(30, Math.max(0, Number(body.reminderDaysBefore ?? 3) || 0)),
      },
    });
  }

  async update(weddingId: string, taskId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown> {
    await this.access(weddingId, user, true);
    const current = await this.prisma.planningTask.findFirst({ where: { id: taskId, weddingId } });
    if (!current) throw new NotFoundException("Không tìm thấy công việc");
    const status = body.status === undefined ? undefined : enumValue(body.status, Object.values(PlanningTaskStatus), current.status);
    const dueAt = body.dueAt === undefined ? undefined : dateOrNull(body.dueAt);
    const changedSchedule = body.dueAt !== undefined || body.reminderDaysBefore !== undefined || body.reminderEnabled !== undefined;
    return this.prisma.planningTask.update({
      where: { id: taskId },
      data: {
        title: body.title === undefined ? undefined : trim(body.title, 120) || current.title,
        description: body.description === undefined ? undefined : trim(body.description, 1000) || null,
        category: body.category === undefined ? undefined : enumValue(body.category, Object.values(PlanningTaskCategory), current.category),
        priority: body.priority === undefined ? undefined : enumValue(body.priority, Object.values(PlanningTaskPriority), current.priority),
        status,
        dueAt,
        assigneeName: body.assigneeName === undefined ? undefined : trim(body.assigneeName, 100) || null,
        reminderEnabled: body.reminderEnabled === undefined ? undefined : Boolean(body.reminderEnabled),
        reminderDaysBefore: body.reminderDaysBefore === undefined ? undefined : Math.min(30, Math.max(0, Number(body.reminderDaysBefore) || 0)),
        lastReminderAt: changedSchedule || (status && !INACTIVE_STATUSES.includes(status)) ? null : undefined,
        completedAt: status === PlanningTaskStatus.DONE ? new Date() : status ? null : undefined,
      },
    });
  }

  async remove(weddingId: string, taskId: string, user: AuthenticatedUser): Promise<{ deleted: true }> {
    await this.access(weddingId, user, true);
    const result = await this.prisma.planningTask.deleteMany({ where: { id: taskId, weddingId } });
    if (!result.count) throw new NotFoundException("Không tìm thấy công việc");
    return { deleted: true };
  }

  async processReminders(): Promise<{ processed: number }> {
    const now = new Date();
    const candidates = await this.prisma.planningTask.findMany({
      where: {
        reminderEnabled: true,
        lastReminderAt: null,
        status: { in: [PlanningTaskStatus.TODO, PlanningTaskStatus.IN_PROGRESS] },
        dueAt: { not: null, lte: new Date(now.getTime() + 30 * DAY) },
      },
      include: { wedding: { include: { owner: { select: { id: true, email: true, displayName: true } } } } },
      take: 100,
    });
    let processed = 0;
    for (const task of candidates) {
      if (!task.dueAt || task.dueAt.getTime() > now.getTime() + task.reminderDaysBefore * DAY) continue;
      const overdue = task.dueAt < now;
      const dueLabel = task.dueAt.toLocaleDateString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
      const title = overdue ? `Công việc đã quá hạn: ${task.title}` : `Sắp đến hạn: ${task.title}`;
      const message = overdue
        ? `Công việc trong kế hoạch “${task.wedding.title}” đã quá hạn từ ${dueLabel}.`
        : `Công việc trong kế hoạch “${task.wedding.title}” cần hoàn thành trước ${dueLabel}.`;
      try {
        await this.prisma.$transaction([
          this.prisma.notification.create({ data: { weddingId: task.weddingId, userId: task.wedding.owner.id, type: overdue ? "PLANNING_TASK_OVERDUE" : "PLANNING_TASK_DUE", title, message, metadata: { taskId: task.id, dueAt: task.dueAt.toISOString() } } }),
          this.prisma.planningTask.update({ where: { id: task.id }, data: { lastReminderAt: now } }),
        ]);
        const planningUrl = `${process.env.FRONTEND_URL ?? "http://localhost:3000"}/weddings/${task.weddingId}/planning`;
        await this.mail.queue({
          recipient: task.wedding.owner.email,
          subject: `[Ngày Đôi] ${title}`,
          textBody: `${message}\n\nMở kế hoạch cưới: ${planningUrl}`,
          htmlBody: `<h2>${escapeHtml(title)}</h2><p>${escapeHtml(message)}</p><p><a href="${escapeHtml(planningUrl)}">Mở kế hoạch cưới</a></p>`,
          templateKey: "planning-reminder",
          metadata: { taskId: task.id, weddingId: task.weddingId },
        });
        processed += 1;
      } catch (error) {
        this.logger.warn(`Unable to process planning reminder ${task.id}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    return { processed };
  }
}
