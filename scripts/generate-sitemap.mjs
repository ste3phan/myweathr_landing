// Writes public/sitemap.xml from the content folders. Runs before `next build`.
import fs from 'fs'
import path from 'path'

const SITE = 'https://myweathr.io'
const LANGS = ['en', 'de']
const root = process.cwd()
const json = (f) => JSON.parse(fs.readFileSync(f, 'utf8'))
const list = (dir) => fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => json(path.join(dir, f)))

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
