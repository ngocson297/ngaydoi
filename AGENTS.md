# Ngày Đôi repository instructions

Current version: **v0.15.15 — Sprint 15.16 Release Candidate & End-to-End Hardening**.

## Stack

- Next.js, React and TypeScript in `apps/web`
- NestJS, Prisma and PostgreSQL in `apps/api`
- npm workspaces and Docker Compose

## Safety rules

1. Preserve existing data and backward compatibility.
2. Never run `db:clean`, `db:reset` or destructive SQL unless the user explicitly requests data deletion.
3. Prisma migrations must be additive. Review migrations for `DROP`, `TRUNCATE` and broad `DELETE` statements.
4. After a Prisma schema change, run `npm run db:generate`, then `npm run db:deploy`, then `npm run db:seed`.
5. Run `npm run build` and the relevant smoke test before completing work.
6. Keep UI responsive at 390px, 768px and 1440px.
7. Forms need visible labels, friendly validation, large controls and accessible focus states.
8. Respect `prefers-reduced-motion` for animation.
9. Do not commit `.env`, secrets, generated Prisma Client, `.next`, `dist` or `node_modules`.

## Daily commands

```bash
npm run db:up
npm run dev:api
npm run dev:web
```

## Phase 14 verification

```bash
npm run db:generate
npm run db:deploy
npm run db:seed
npm run build
npm run template:smoke
npm run invitation:smoke
npm run planning:smoke
```
