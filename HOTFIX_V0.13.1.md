# Ngày Đôi v0.13.1 — Planning date-format hotfix

## Fixed

The Planning page no longer crashes while formatting task deadlines. The previous implementation combined the `dateStyle` shortcut with explicit `hour` and `minute` options, which is invalid in some JavaScript runtimes.

The replacement uses explicit day, month, year, hour, and minute fields and safely handles malformed dates.

## Database

No schema change, no migration, and no seed change.
