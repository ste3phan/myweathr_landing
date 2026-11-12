// Build-time content loaders (only call from getStaticProps / getStaticPaths).
import fs from 'fs'
import path from 'path'
import type { Lang } from './i18n'
import type { ScreenName } from './images'

type L = Record<Lang, string>

export type Race = {
  slug: string
  order: number
  type: 'road' | 'triathlon'
  series: string
  shortName: L
  name: L
  cardTitle: L
  breadcrumb: L
  date: string
  startTime: string
  /** Local UTC offset on race day, e.g. +02:00 (CEST) */
  utcOffset: string
  venue: { name: string; locality: string; region: string; country: string }
  organizer: { name: string; url: string }
  distances: { label: L; km: number }[]
  note: L
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt: L
  tailwindScore: number
  shares: { tail: number | null; cross: number | null; head: number | null }
  windDirection: string
  gustsKmh: number
  rainPct: number | null
  tempC: number | null
  echelonRisk: L | null
  weatherSource: string | null
  /** Optional: the Instagram post with this analysis */
  instagramUrl?: string
  sections: { leg: 'bike' | 'run'; fromKm: number; toKm: number; wind: 'tail' | 'cross' | 'head'; text: L }[]
  relatedFeatures: string[]
}

export type UseCase = {
  id: string
  order: number
  slug: string
  tier: 'free' | 'premium'
  beta: boolean
  navTitle: string
  navSub: string
  shortTitle: string
  title: string
  metaTitle: string
  description: string
  intro: string
  ctaLabel: string
  hero: { main: ScreenName; mainAlt: string; overlay: ScreenName | null; overlayAlt: string | null }
  howImage: ScreenName
  howImageAlt: string
  how: { title: string; text: string }[]
  ctaTitle: string
  relatedRaces: string[]
}

const root = process.cwd()
const readJson = <T,>(file: string): T => JSON.parse(fs.readFileSync(file, 'utf8'))

export function getRaces(): Race[] {
  const dir = path.join(root, 'content/races')
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => readJson<Race>(path.join(dir, f)))
    .sort((a, b) => a.order - b.order)
}

export function getUseCases(lang: Lang): UseCase[] {
  const dir = path.join(root, 'content/features', lang)
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => readJson<UseCase>(path.join(dir, f)))
    .sort((a, b) => a.order - b.order)
}

/** Slim link data for nav, footer and "Learn more" links. */
export type UseCaseLink = { id: string; slug: string; navTitle: string; navSub: string; shortTitle: string }
export const toLink = (u: UseCase): UseCaseLink => ({
  id: u.id,
  slug: u.slug,
  navTitle: u.navTitle,
  navSub: u.navSub,
  shortTitle: u.shortTitle,
})

export type RaceLink = { slug: string; shortName: string }
export const getRaceLinks = (lang: Lang): RaceLink[] =>
  getRaces().map((r) => ({ slug: r.slug, shortName: r.shortName[lang] }))

/** Data every page needs for header + footer. */
export function getChrome(lang: Lang) {
  return { useCases: getUseCases(lang).map(toLink), raceLinks: getRaceLinks(lang) }
}
export type Chrome = ReturnType<typeof getChrome>
