# v0.11.0 Validation Report

- TypeScript/TSX syntax parser: pass for 167 files.
- Duplicate object fields: 0.
- Relative imports: pass, excluding expected generated Prisma Client imports.
- Prisma schema braces: balanced.
- Phase 11 migration destructive statements: none.
- AppModule registration: present.
- Mobile breakpoints: 1000px and 700px; legacy 900px/620px retained.
- Print styles: present for QR cards.
- Sensitive values in QR: invitation token only; no name/email/phone.
- Full framework build was not executed in the artifact environment because its npm proxy returns 404 for `@nestjs/cli`. Run `npm install`, `npm run db:setup`, `npm run build`, and `npm run event-ops:smoke` on the target machine.
