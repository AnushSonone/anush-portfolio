# anush-portfolio — agent operations

Ralph and humans: run everything below from the **app root** `anush-portfolio-next/`, not the monorepo root, unless a task explicitly says otherwise.

## Prerequisites

- **Node.js**: LTS 20+ recommended (no `.nvmrc` in repo; use your usual version manager if needed).
- **Package manager**: `npm` (lockfile: `anush-portfolio-next/package-lock.json`).

## Install

```bash
cd anush-portfolio-next
npm ci
```

Use `npm install` if you do not need a clean reproducible install.

## Dev server

```bash
cd anush-portfolio-next
npm run dev
```

App: [http://localhost:3000](http://localhost:3000)

## Production run (after build)

```bash
cd anush-portfolio-next
npm run build
npm run start
```

## Validation (backpressure)

Run after changes; fix failures before committing.

| Step       | Command (from `anush-portfolio-next/`) |
| ---------- | -------------------------------------- |
| Lint       | `npm run lint`                         |
| Build      | `npm run build`                        |
| Typecheck  | Inferred by `next build` (TypeScript)  |
| Unit tests | **Not configured** — no `npm test` yet |

If you add a test runner (Jest, Vitest, Playwright, etc.), document the exact commands here in the same table format.

## Environment

- No required `.env` for the default template. If you add API keys or deployment config, list variable names and where they are loaded (e.g. Vercel env) here—never commit secrets.

## Code layout

- **Next.js 16** App Router: `anush-portfolio-next/src/app/` — global styles in `globals.css` (**plain CSS**; no Tailwind on the document surface, per `specs/minimal-surface.md`).
- **Shared UI/utilities**: prefer `anush-portfolio-next/src/lib/` and colocated components as the app grows; keep imports consistent with existing patterns.
- **Design rules**: `specs/minimal-surface.md` and `specs/personal-portfolio.md` (surface + content). Prompts in `PROMPT_build.md` include matching invariants.

## Git

- Commit from repo root or app dir; ensure only intentional files are staged.
- `loop.sh` / `loop.ps1` may offer `git push` unless disabled—see script comments.

## Operational notes

- Keep this file **short and command-focused**. Status, priorities, and narrative belong in `IMPLEMENTATION_PLAN.md`, not here.
