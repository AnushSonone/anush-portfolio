# Ralph handoff (for the next agent or human)

Reference playbook: [how-to-ralph-wiggum](https://github.com/ghuntley/how-to-ralph-wiggum)

---

## 1. What “Ralph” is in one paragraph

Ralph is a workflow + file layout, not a special runtime. A dumb shell loop repeatedly runs the Claude Code CLI (`claude -p` …) and pipes in a fixed prompt file each time. Each run gets a new context; shared state lives on disk (`specs/`, `IMPLEMENTATION_PLAN.md`, `AGENTS.md`, and your app source, e.g. `anush-portfolio-next/src/` in this repo). One build iteration ≈ one task, validate, then git commit (as your prompt says). Planning iterations only update the plan (and maybe `specs/`), not implementation—if prompts are written that way.

Read the full mental model, templates, and options in the playbook README: **Workflow**, **Loop Mechanics**, **Files**.

---

## 2. Prerequisites the other agent must satisfy

1. **Repository with real application code** (e.g. `anush-portfolio-next/src/` in this project); Ralph files live at the **repo root**; implementation lives in the app directory as documented in `AGENTS.md`.
2. **Claude Code CLI** installed so `claude` is on `PATH` in the environment where the loop runs. The loop scripts assume this tool, not Cursor’s UI by itself. (The playbook uses `claude -p` with specific flags—see this repo’s `loop.sh` / `loop.ps1` and the upstream examples.)
3. **Auth** for that CLI completed (per Anthropic’s current install/login docs).
4. **Awareness of risk:** typical Ralph examples use `--dangerously-skip-permissions` so the loop doesn’t block on every tool call. That means the sandbox is your only safety boundary—use a dedicated machine/credentials, review diffs, know how to `git reset` / Ctrl+C.
5. **OS:**
   - **macOS / Linux / WSL / Git Bash:** use `loop.sh`.
   - **Windows PowerShell:** use `loop.ps1`.

   Same behavior, different shell.

---

## 3. Files to add (or mirror from a reference project)

| Path | Role |
|------|------|
| `PROMPT_plan.md` | Planning mode only: study `specs/*` + app source, gap analysis, output/update `IMPLEMENTATION_PLAN.md`. No implementation in the canonical template. Use wording from the playbook (e.g. “study”, “don’t assume not implemented”, “Ultrathink”). |
| `PROMPT_build.md` | Build mode: one priority task from the plan, search before assuming missing code, implement, run validation, update plan, git commit (and prompt may say git push). |
| `AGENTS.md` | Short, operational only: how to install, dev server, and exact validation commands (lint, test, build, typecheck). Not a changelog. ~60 lines target so every loop can load it whole. The generic prompt says “run tests”; `AGENTS.md` gives the real commands. |
| `specs/*.md` | Requirements—one file per topic of concern (see playbook “Topic Scope Test”). This is the source of truth for what to build. |
| `IMPLEMENTATION_PLAN.md` | Prioritized task list (gap between specs and code). Created/updated in plan mode; updated in build mode. Disposable—regenerate if wrong. |
| `loop.sh` | Bash: `chmod +x loop.sh` then e.g. `./loop.sh`, `./loop.sh 20`, `./loop.sh plan`, `./loop.sh plan 5`. |
| `loop.ps1` | PowerShell equivalent for Windows. |
| Optional: `.cursor/rules/…` | Points Cursor at `AGENTS.md` + `specs` so IDE and CLI loops align; not required for the loop itself. |

Templates for the two prompts are in the [playbook README (Prompts section)](https://github.com/ghuntley/how-to-ralph-wiggum#prompts) (`PROMPT_plan` / `PROMPT_build`). Adapt `[project-specific goal]`, and fix paths (e.g. this repo uses `anush-portfolio-next/src/*` rather than a root-level `src/*` only).

---

## 4. How the loop is executed (exact user actions)

**macOS / Linux / WSL / Git Bash** (from repo root):

```bash
chmod +x loop.sh
./loop.sh              # build mode, unbounded
./loop.sh 20           # build, max 20 outer iterations
./loop.sh plan         # plan mode only
./loop.sh plan 5        # plan, max 5 iterations
```

**Windows PowerShell** (from repo root):

```powershell
.\loop.ps1
.\loop.ps1 -MaxIterations 20
.\loop.ps1 -Plan
.\loop.ps1 -Plan -MaxIterations 5
```

Each **outer** iteration = one `claude` process with fresh context, prompt piped from `PROMPT_build.md` or `PROMPT_plan.md`. The script may loop forever until Ctrl+C or max iterations.

**Minimal mental model (from playbook):** `while :; do cat PROMPT.md | claude; done` — the plan file on disk is what links iterations.

---

## 5. Backpressure (“testing” and repo health)

- No separate “Ralph test server.” “Quality” is enforced by what you put in `AGENTS.md` + `PROMPT_build.md`: usually `npm run lint`, `npm run build`, and `npm test` if present.
- Set `AGENTS.md` to the real package scripts of the target repo (Node, Python, Go, etc.).
- If there are no tests yet, the prompt should still require build + lint (or project equivalent) and optionally say “add a test framework” as a planned task, not as silent failure.

For **this** repo, commands are relative to `anush-portfolio-next/`—see root `AGENTS.md`.

---

## 6. What the other agent should adapt per new repo

1. Root goal in `PROMPT_plan.md` and `PROMPT_build.md` (the “ULTIMATE GOAL” / project paragraph).
2. Source paths in prompts: e.g. `apps/web/src` or `anush-portfolio-next/src` instead of a generic `src/*` if the tree differs.
3. `AGENTS.md`: every command, package manager, env file pattern, and Node version if relevant.
4. Initial `specs/`: at least one spec describing the app’s Jobs to be Done and constraints.
5. Seed or empty `IMPLEMENTATION_PLAN.md`, then run plan mode once to fill it, or hand-write.
6. Git remote: loop may run `git push`—set `SKIP_GIT_PUSH=1` (bash) or `$env:SKIP_GIT_PUSH = "1"` (PowerShell) in this repo’s scripts, or adjust the scripts, if you don’t want automatic push.

---

## 7. Pitfalls the other agent must not ignore

- Do **not** run five full loops on the same branch at once; they will race on the same files and `IMPLEMENTATION_PLAN.md`. (Parallel subagents *inside* one claude run for reads is a different, playbook-style pattern.)
- Do **not** bloat `AGENTS.md` with status—use `IMPLEMENTATION_PLAN.md` for that.
- **Specs** are not auto-updated by Git hooks—humans or prompted planning/build runs write them when requirements change.
- Ralph in the original sense **assumes the claude CLI**; if only Cursor is available, the same `.md` files still help, but the automation needs `claude` on `PATH` or a manual “paste `PROMPT_build.md` into an agent” flow.

---

## 8. Optional: reference implementation

A concrete example of this file set for a Next.js app may exist in a repo like “new-website”: same file names, `AGENTS` lists `npm run dev`, `npm run lint`, `npm run build`, etc. Copy the structure and retarget all paths and commands.

---

## 9. Checklist (copyable)

- [ ] Read [how-to-ralph-wiggum](https://github.com/ghuntley/how-to-ralph-wiggum) README (Workflow, Files, Loop Mechanics).
- [ ] Add `PROMPT_plan.md`, `PROMPT_build.md` (from templates + project-specific edits).
- [ ] Add `AGENTS.md` with real install/run/validate commands.
- [ ] Add `specs/*.md` for real requirements.
- [ ] Add or seed `IMPLEMENTATION_PLAN.md`.
- [ ] Add `loop.sh` and `loop.ps1` (or one; document OS).
- [ ] Install claude CLI, verify `claude` on `PATH`, complete auth.
- [ ] Run plan once: `loop.sh plan` or `.\loop.ps1 -Plan -MaxIterations 1`.
- [ ] Run build: `loop.sh 1` or `.\loop.ps1 -MaxIterations 1` (or unbounded, with care).
- [ ] Review git diff and commits after each iteration.

---

## What this handoff is *for*

This document is **onboarding in a box** for anyone (you or another agent) who will run or maintain **Ralph-style** automation on this repository. It does **not** run anything by itself. It **does**:

- **Explains the model** so you know Ralph is *files + a dumb loop + the Claude CLI*, not a new framework.
- **Lists prerequisites and risks** (especially around `--dangerously-skip-permissions` and not parallelizing multiple outer loops on one branch).
- **Points to which files matter** and how plan vs build mode differ.
- **Gives exact commands** for Unix vs Windows so you don’t have to re-derive them from the playbook every time.
- **Provides a checklist** to verify the setup end-to-end.

Use it as the first thing you paste or attach when starting a new chat whose job is to operate or extend the Ralph setup in this repo; keep `AGENTS.md` and `specs/` as the *operational* source of truth for this codebase specifically.
