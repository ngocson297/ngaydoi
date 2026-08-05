# Phase 4 Build Hotfix — v0.4.1

## Fixed

`npm run build` previously failed with TypeScript error TS2783 because `weddingId` was explicitly declared before spreading a value typed as `InvitationDesignUncheckedCreateInput`.

The create payload now applies restored design data first and then applies the authoritative `weddingId`.

## Upgrade

No database migration, seed, Docker reset, or environment change is required. Stop API/Web, replace the source with v0.4.1, copy the existing `.env` files, run `npm install`, then `npm run build`.
