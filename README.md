# myweathr.io – marketing site

Static Next.js 14 site (pages router, Tailwind, TypeScript) for myweathr.io.
`next build` exports plain HTML to `out/` – no Node server needed.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000/en/
npm run build      # writes public/sitemap.xml, then exports to out/
npm run typecheck
```

## Structure

| Path | What |
|---|---|
| `site.config.ts` | Product name, domain, App Store / web app / Instagram links, icon. Rename the product here only. |
| `locales/en.ts`, `locales/de.ts` | All UI copy. `{name}` is replaced with `site.name`. |
| `lib/i18n.ts` | Languages (`ALL_LANGS` shown in the UI, `AVAILABLE_LANGS` built), date/number formatting. |
| `content/features/<lang>/*.json` | Use-case pages (`/[lang]/features/[slug]/`). Same `id` across languages links the translations (hreflang). |
| `content/races/*.json` | Race forecast pages (`/[lang]/races/[slug]/`). New race = new file. `sections` holds per-km takeaways (optional). |
| `content/changelog.ts` | Version history + roadmap (`/[lang]/changelog/`). |
| `components/site/` | Header, footer, SEO head, shared UI (screenshots with light/dark `<picture>`, pills, App Store badge). |
| `components/home/` | Homepage sections. |
| `styles/globals.css` | Design tokens (light/dark via `prefers-color-scheme`) and component classes. |

`/` is a static redirect to `/en/` or `/de/` (browser language). Legal pages (`/imprint/`, `/terms/`, `/privacy/`, `/delete-account/`) stay at the root, English only.

## Adding a language

1. `locales/<code>.ts` (typed against `en`), register it in `lib/i18n.ts` (`AVAILABLE_LANGS`, `MESSAGES`).
2. `content/features/<code>/*.json` with the same `id`s.
3. Add localised fields to each race JSON and the language to `scripts/generate-sitemap.mjs`.

## SEO files

`npm run build` regenerates `public/sitemap.xml` and `public/llms.txt` from `content/` (`scripts/generate-static-files.mjs`).
`public/robots.txt` and `public/.htaccess` (404 page, www → apex, caching) are static.

## Deploy (Uberspace)

On the server: `cd ~/myweathr_landing && ./deploy/uberspace.sh main`. One-time switch from the old Node setup: see `UBERSPACE_DEPLOY.md`.
