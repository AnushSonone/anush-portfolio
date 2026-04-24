# Spec: Minimal document-style surface (Next as implementation)

## Intent

The site should read like a **lean HTML document in the browser**: semantic structure first, **tiny authored CSS**, **no client-side framework feel**. Next.js and React are build-time and server-rendering tools; default to **Server Components** (this app has no `"use client"` unless a future feature needs it).

## Layout & semantics

- Use **landmarks**: one `<main>` for the home view; add `header`/`nav`/`footer` when the site gains multiple sections or pages.
- **Heading hierarchy** must be logical (`h1` then `h2` if needed, etc.).

## Styling (option A)

- **Plain CSS in `anush-portfolio-next/src/app/globals.css`** (no Tailwind utility layers on the main surface).
- System font stack; **max-width** for line length; **`:focus-visible`** for interactive elements.
- **Color:** respect `prefers-color-scheme` with simple background/foreground contrast.
- **Motion:** if animations are added later, respect `prefers-reduced-motion`.

## Client JavaScript

- **No** `"use client"` for static content. Add a client module only for real interactivity (e.g. form), and document in `IMPLEMENTATION_PLAN.md` when you do.

## Images

- Use `next/image` where images exist; provide meaningful `alt` text (decorative images may use empty `alt` only if truly decorative).

## Dependencies

- Avoid UI kits and animation libraries unless this spec is updated with a design reason.
