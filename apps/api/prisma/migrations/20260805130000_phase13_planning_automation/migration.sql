CREATE TYPE "PlanningTaskStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'DONE', 'CANCELED');
CREATE TYPE "PlanningTaskPriority" AS ENUM ('LOW', 'NORMAL', 'HIGH', 'URGENT');
CREATE TYPE "PlanningTaskCategory" AS ENUM ('FOUNDATION', 'INVITATION', 'GUESTS', 'CEREMONY', 'VENUE', 'VENDORS', 'FINANCE', 'LEGAL', 'PERSONAL', 'AFTER_WEDDING', 'OTHER');
CREATE TYPE "PlanningTaskSource" AS ENUM ('SYSTEM', 'CUSTOM');

CREATE TABLE "PlanningTask" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "category" "PlanningTaskCategory" NOT NULL DEFAULT 'OTHER',
  "priority" "PlanningTaskPriority" NOT NULL DEFAULT 'NORMAL',
  "status" "PlanningTaskStatus" NOT NULL DEFAULT 'TODO',
  "source" "PlanningTaskSource" NOT NULL DEFAULT 'CUSTOM',
  "dueAt" TIMESTAMP(3),
  "assigneeName" TEXT,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "reminderEnabled" BOOLEAN NOT NULL DEFAULT true,
  "reminderDaysBefore" INTEGER NOT NULL DEFAULT 3,
  "lastReminderAt" TIMESTAMP(3),
  "completedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "PlanningTask_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "PlanningTask_weddingId_status_dueAt_idx" ON "PlanningTask"("weddingId", "status", "dueAt");
CREATE INDEX "PlanningTask_weddingId_category_sortOrder_idx" ON "PlanningTask"("weddingId", "category", "sortOrder");
CREATE INDEX "PlanningTask_reminderEnabled_status_dueAt_idx" ON "PlanningTask"("reminderEnabled", "status", "dueAt");

ALTER TABLE "PlanningTask" ADD CONSTRAINT "PlanningTask_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
