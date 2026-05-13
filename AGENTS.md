# course

Turborepo + pnpm monorepo. Node >=18, pnpm@9.

## Structure

- `apps/backend` — NestJS 11 + Prisma (PostgreSQL). Entry: `src/main.ts`, port 3001.
- `apps/frontend` — Nuxt 4 + Vue 3 (`app/` directory, **not** `pages/`). Entry: `app/app.vue`.
- `packages/eslint-config` — stale turborepo starter (Next.js configs, unused by this repo).
- `packages/typescript-config` — stale turborepo starter (Next.js/React configs, unused).

## Commands (run from root)

| Command | What |
|---|---|
| `pnpm dev` | `turbo run dev` — starts both apps in watch mode |
| `pnpm build` | `turbo run build` |
| `pnpm lint` | `turbo run lint` |
| `pnpm format` | Prettier across `*.{ts,tsx,md}` |
| `pnpm check-types` | `turbo run check-types` |

Filtered: `pnpm dev --filter=backend` or `--filter=frontend`.

## Backend specifics

- **Prisma** lives inside `apps/backend/prisma/`. Before building: `cd apps/backend && pnpm exec prisma generate`.
- **Migrations**: `cd apps/backend && pnpm exec prisma migrate dev`.
- **Requires** `DATABASE_URL` env pointing to a running PostgreSQL.
- **Test**: `cd apps/backend && pnpm test` (Jest, `*.spec.ts` in `src/`). E2E: `pnpm test:e2e`.
- ESLint config is `eslint.config.mjs` (flat config with typescript-eslint + prettier).

## Frontend specifics

- **Nuxt 4** uses `app/` directory (not `pages/`). `nuxt prepare` runs on `postinstall` to generate `.nuxt/` types.
- tsconfig references auto-generated files under `.nuxt/`. Do not edit manually.
- Fetches backend at `http://localhost:3001` (hardcoded in `app/app.vue`).

## Dead / stale code

- `apps/backend/src/app.controller.ts` — duplicates `CoursesController`. Likely dead.
- `turbo.json` outputs `"outputs": [".next/**"]` — wrong for Nuxt (no .next output).
- `README.md` — generic turborepo starter, references nonexistent apps (`docs`, `web`, `@repo/ui`).
- `packages/eslint-config` and `packages/typescript-config` — turborepo starter leftovers, unused.
