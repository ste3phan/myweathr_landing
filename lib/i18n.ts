import en from '../locales/en'
import de from '../locales/de'

/** All languages the UI lists. Only `AVAILABLE_LANGS` have pages today. */
export const ALL_LANGS = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'es', label: 'Español' },
  { code: 'nl', label: 'Nederlands' },
] as const

export const AVAILABLE_LANGS = ['en', 'de'] as const
export type Lang = (typeof AVAILABLE_LANGS)[number]
export const DEFAULT_LANG: Lang = 'en'

export function isLang(x: unknown): x is Lang {
  return typeof x === 'string' && (AVAILABLE_LANGS as readonly string[]).includes(x)
}

const MESSAGES = { en, de }
export type Messages = typeof en

export function getMessages(lang: Lang): Messages {
  return MESSAGES[lang]
}

export const langPaths = () => AVAILABLE_LANGS.map((lang) => ({ params: { lang } }))

/** Paths for one page in every available language – used for hreflang + language switch. */
export type Alternates = Partial<Record<Lang, string>>

export function sameForAll(build: (lang: Lang) => string): Alternates {
  return Object.fromEntries(AVAILABLE_LANGS.map((l) => [l, build(l)])) as Alternates
}

export function formatDate(iso: string, lang: Lang, opts: Intl.DateTimeFormatOptions) {
  // Dates are race-local calendar days; format in UTC so the build machine's TZ never shifts them.
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-GB', { ...opts, timeZone: 'UTC' }).format(
    new Date(iso + 'T12:00:00Z')
  )
}

export function formatNumber(n: number, lang: Lang) {
  return new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-GB').format(n)
}
