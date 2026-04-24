# Spec: Personal portfolio site

## Job to be done

Visitors (recruiters, collaborators, community) can **understand who Anush is**, **see relevant work**, and **reach out**—in under a few minutes, on mobile or desktop, without confusion.

## Topic scope

This spec covers the **public marketing surface** of the site: structure, content areas, and quality bar. Routing, deployment, and analytics are in scope only as they support these goals.

## Requirements

### Identity & narrative

- Clear **name and role** (or tagline) above the fold.
- Short **About** that reads human, not generic filler; may start as structured placeholders with TODO for copy.
- **Projects / work** presented as a scannable list or grid with title, one-line description, and link or detail affordance.

### Contact

- A visible **Contact** path (dedicated section or page): at minimum a professional email or vetted form. Do not expose unnecessary PII. If using a form, document backend or third-party requirements in `AGENTS.md` when introduced.

### Experience

- **Responsive** layout: readable at 320px width; no broken overflow on common breakpoints.
- **Keyboard**: all interactive elements reachable; visible focus.
- **Motion**: respect `prefers-reduced-motion` if animations are added.

### Non-functional

- **Performance**: use Next.js `Image` for raster assets when used; keep LCP candidate reasonable on the home view. **List-first, document-style** presentation for work—no requirement for a heavy “card grid” unless added later in specs.
- **Accessibility**: meaningful alt text, semantic landmarks (`main`, `nav`, `footer` where appropriate), sufficient contrast for body text in light and dark if both exist.
- **Maintainability**: shared UI and data live in `anush-portfolio-next/src/` with a consistent pattern; avoid one-off magic strings repeated across files when a small module or config object is clearer.

## Out of scope (unless promoted via new spec)

- Blog/CMS with many authors, comments, or moderation.
- Authentication and private dashboards.

## Open decisions

- Domain/hosting: document in `AGENTS.md` when a deploy target is chosen (e.g. Vercel) and any env vars are required.
- Add separate specs (new files) for major new topics (e.g. blog, i18n) per the **Topic Scope Test** in the Ralph playbook.
