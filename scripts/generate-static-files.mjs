// Writes public/sitemap.xml and public/llms.txt from the content folders. Runs before `next build`.
import fs from 'fs'
import path from 'path'

const SITE = 'https://myweathr.io'
const LANGS = ['en', 'de']
const root = process.cwd()
const json = (f) => JSON.parse(fs.readFileSync(f, 'utf8'))
const list = (dir) =>
  fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => json(path.join(dir, f))).sort((a, b) => a.order - b.order)

const races = list(path.join(root, 'content/races'))
const features = Object.fromEntries(LANGS.map((l) => [l, list(path.join(root, 'content/features', l))]))

/** groups: each entry = { [lang]: path } so hreflang alternates are listed per URL */
const groups = [
  Object.fromEntries(LANGS.map((l) => [l, `/${l}/`])),
  Object.fromEntries(LANGS.map((l) => [l, `/${l}/races/`])),
  Object.fromEntries(LANGS.map((l) => [l, `/${l}/changelog/`])),
  ...races.map((r) => Object.fromEntries(LANGS.map((l) => [l, `/${l}/races/${r.slug}/`]))),
  ...features.en.map((u) =>
    Object.fromEntries(
      LANGS.map((l) => [l, features[l].find((x) => x.id === u.id)]).filter(([, x]) => x).map(([l, x]) => [l, `/${l}/features/${x.slug}/`])
    )
  ),
]

const urls = groups.flatMap((g) =>
  Object.values(g).map((loc) => {
    const alts = Object.entries(g)
      .map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${p}"/>`)
      .concat(g.en ? [`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${g.en}"/>`] : [])
      .join('\n')
    return `  <url>\n    <loc>${SITE}${loc}</loc>\n${alts}\n  </url>`
  })
)
for (const p of ['/imprint/', '/terms/', '/privacy/']) urls.push(`  <url>\n    <loc>${SITE}${p}</loc>\n  </url>`)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), xml)
console.log(`sitemap.xml: ${urls.length} URLs`)

// ---------- llms.txt (https://llmstxt.org) ----------
const en = Object.fromEntries(features.en.map((u) => [u.id, u]))
const de = Object.fromEntries(features.de.map((u) => [u.id, u]))
const NAME = 'myweathr'
// Latest release = first entry in content/changelog.ts
const cl = fs.readFileSync(path.join(root, 'content/changelog.ts'), 'utf8')
const latest = cl.match(/version: '([^']+)',\s*date: \{ en: '([^']+)'/)
if (!latest) throw new Error('llms.txt: no version found in content/changelog.ts')
const fill = (s) => s.replace(/\{name\}/g, NAME)
const llms = `# ${NAME}

> ${NAME} is a route-based wind forecast for cyclists and triathletes (iPhone app and web app). It shows headwind, tailwind and crosswind on every segment of a route at the time the rider actually reaches it, plus a 0–100 Tailwind Score, Wind Cost in minutes, the best start time and Echelon Analysis (crosswind split risk).

Key facts:
- Platforms: iOS app (${'https://apps.apple.com/app/myweathr-io/id6755927323'}) and web app (https://app.myweathr.io). Android is not available yet.
- Route import: GPX, Strava (account connection, nightly sync with Premium), Komoot via GPX.
- Weather sources: Apple WeatherKit, DWD and Open-Meteo, picking the most reliable source per region; wind corrected from 10 m to rider height and for terrain (forest, town, open land).
- Free: wind along the route, Tailwind Score and route import for 3 plans per week, coarse route sections.
- Premium: unlimited plans, finer route sections, Wind Cost (bike type and riding position), best start time, Echelon Analysis (beta), coffee stop planner, nightly Strava sync. USD 4.99/month or 44.99/year; EUR 5.99/month or 49.99/year.
- Works for road cycling, gravel, MTB, triathlon and trail running (pace in min/km for runners); lap courses are split into laps, each with its own wind.
- Current app version: ${latest[1]} (${latest[2]}). App languages: English, German, French, Italian, Spanish, Dutch. Website languages: English (/en/) and German (/de/).

## Features

${features.en.map((u) => `- [${u.navTitle}](${SITE}/en/features/${u.slug}/): ${fill(u.description)}${de[u.id] ? ` German: ${SITE}/de/features/${de[u.id].slug}/` : ''}`).join('\n')}

## Race wind forecasts

${races.map((r) => `- [${r.name.en}](${SITE}/en/races/${r.slug}/): ${r.note.en} Tailwind Score ${r.tailwindScore}/100.`).join('\n')}

## Pages

- [Homepage](${SITE}/en/): overview, how it works, Free vs. Premium, FAQ
- [Startseite (Deutsch)](${SITE}/de/)
- [Changelog](${SITE}/en/changelog/): release history and roadmap

## Optional

- [Privacy policy](${SITE}/privacy/)
- [Terms](${SITE}/terms/)
- [Imprint](${SITE}/imprint/)
`
fs.writeFileSync(path.join(root, 'public/llms.txt'), llms)
console.log('llms.txt written')
