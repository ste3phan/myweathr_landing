import type { GetStaticPaths, GetStaticProps } from 'next'
import { site } from '../../../site.config'
import { AVAILABLE_LANGS, formatDate, formatNumber, getMessages, sameForAll, type Lang, type Messages } from '../../../lib/i18n'
import { getChrome, getRaces, getUseCases, type Chrome, type Race } from '../../../lib/content'
import Layout from '../../../components/site/Layout'
import Seo from '../../../components/site/Seo'
import { Breadcrumb, RelatedList } from '../../../components/site/PageBits'

type Props = {
  lang: Lang
  chrome: Chrome
  race: Race
  others: { slug: string; shortName: string }[]
  features: { slug: string; navTitle: string }[]
}

const WIND_VAR = { tail: 'var(--tail)', cross: 'var(--cross)', head: 'var(--head)' } as const

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="label !text-[11px]">{label}</span>
      <span className="font-semibold">{children}</span>
    </div>
  )
}

function Takeaways({ title, items, lang, t }: { title: string; items: Race['sections']; lang: Lang; t: Messages }) {
  const kind = { tail: t.event.tailwind, cross: t.event.crosswind, head: t.event.headwind }
  return (
    <div className="flex flex-col gap-2">
      <h2 className="m-0 mb-3 text-[clamp(28px,3vw,40px)] font-extrabold leading-[1.05] tracking-[-0.03em] [font-stretch:108%]">{title}</h2>
      <ul className="m-0 list-none border-t border-line p-0">
        {items.map((s, i) => (
          <li key={i} className="grid grid-cols-[96px_minmax(0,1fr)] items-start gap-x-5 gap-y-2 border-b border-line py-[18px] sm:grid-cols-[120px_minmax(0,1fr)]">
            <span className="pt-0.5 font-mono text-sm font-semibold text-fg-2">
              km {formatNumber(s.fromKm, lang)}–{formatNumber(s.toKm, lang)}
            </span>
            <div className="flex flex-col gap-1">
              <span className="inline-flex items-center gap-2 text-[15px] font-bold">
                <span className="h-3 w-3 flex-none rounded-full" style={{ background: WIND_VAR[s.wind] }} />
                {kind[s.wind]}
              </span>
              <span className="text-base leading-normal text-fg-2">{s.text[lang]}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function RacePage({ lang, chrome, race, others, features }: Props) {
  const t = getMessages(lang)
  const path = `/${lang}/races/${race.slug}/`
  const alternates = sameForAll((l) => `/${l}/races/${race.slug}/`)
  const tri = race.type === 'triathlon'
  const dateLong = formatDate(race.date, lang, { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })
  const h1 = `${t.useCase.windForecast} ${race.shortName[lang]}`
  const kicker = [
    tri ? t.event.triathlon : t.event.road,
    dateLong,
    `${t.event.start} ${race.startTime}`,
    ...race.distances.map((d) => `${d.label[lang]} ${formatNumber(d.km, lang)} km`),
  ].join(' · ')
  const pct = (v: number | null) => (v == null ? '–' : `${formatNumber(v, lang)} %`)
  const bike = race.sections.filter((s) => s.leg === 'bike')
  const run = race.sections.filter((s) => s.leg === 'run')
  const description = `${race.name[lang]}: ${race.note[lang]} ${t.races.score} ${race.tailwindScore}/100.`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: race.name[lang],
      startDate: `${race.date}T${race.startTime}:00${race.utcOffset}`,
      endDate: race.date,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: race.venue.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: race.venue.locality,
          addressRegion: race.venue.region,
          addressCountry: race.venue.country,
        },
      },
      organizer: { '@type': 'Organization', name: race.organizer.name, url: race.organizer.url },
      sport: tri ? 'Triathlon' : 'Cycling',
      image: site.url + race.image,
      description,
      url: site.url + path,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: site.name, item: `${site.url}/${lang}/` },
        { '@type': 'ListItem', position: 2, name: t.nav.races, item: `${site.url}/${lang}/races/` },
        { '@type': 'ListItem', position: 3, name: race.name[lang], item: site.url + path },
      ],
    },
  ]

  return (
    <Layout lang={lang} t={t} chrome={chrome} alternates={alternates} current="races">
      <Seo
        lang={lang}
        title={`${h1} – ${race.name[lang]} | ${site.name}`}
        description={description}
        path={path}
        alternates={alternates}
        image={race.image}
        imageAlt={race.imageAlt[lang]}
        type="article"
        jsonLd={jsonLd}
      />

      <section className="pb-10 pt-6 sm:pb-[clamp(40px,5vw,72px)] sm:pt-[clamp(32px,5vw,56px)]">
        <div className="wrap flex flex-col gap-6 sm:gap-8">
          <Breadcrumb
            label={t.useCase.breadcrumb}
            items={[
              { href: `/${lang}/`, label: t.nav.home },
              { href: `/${lang}/races/`, label: t.nav.races },
              { label: race.breadcrumb[lang] },
            ]}
          />
          <div className="flex max-w-[900px] flex-col gap-4">
            <span className="eyebrow">{kicker}</span>
            <h1 className="h1-page">{h1}</h1>
            <p className="m-0 text-lg font-bold text-fg-2 sm:text-xl">{race.name[lang]}</p>
            <p className="m-0 max-w-[52ch] text-lg leading-[1.55] text-fg-2 sm:text-xl">{t.event.intro}</p>
            {race.weatherSource && (
              <span className="text-sm text-muted">
                {t.event.weatherData}: {race.weatherSource}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-5">
            <div className="relative min-w-0 flex-[999_1_560px] overflow-hidden rounded-[18px] border border-line bg-map sm:rounded-3xl">
              <img
                src={race.image}
                alt={race.imageAlt[lang]}
                width={race.imageWidth}
                height={race.imageHeight}
                {...({ fetchpriority: "high" } as Record<string, string>)}
                className="block h-full min-h-[240px] w-full object-cover sm:min-h-[360px]"
              />
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-x-3.5 gap-y-1 rounded-xl border border-line bg-surface px-3.5 py-2 text-[13px] font-semibold text-fg-2">
                {(['tail', 'cross', 'head'] as const).map((k) => (
                  <span key={k} className="inline-flex items-center gap-1.5">
                    <span className="h-[5px] w-[18px] rounded-[3px]" style={{ background: WIND_VAR[k] }} />
                    {t.event[`${k}wind` as 'tailwind']}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-[1_1_300px] flex-col gap-4">
              <div className="flex flex-col gap-3.5 rounded-3xl border border-line bg-surface p-[22px] sm:p-[26px]">
                <span className="eyebrow">{tri ? t.event.scoreBike : t.event.score}</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[56px] font-semibold leading-none tracking-[-0.04em]">{race.tailwindScore}</span>
                  <span className="text-lg text-muted">/ 100</span>
                </div>
                <div className="tw-bar" />
                <div className="grid grid-cols-3 gap-2 text-sm">
                  {(['tail', 'cross', 'head'] as const).map((k) => (
                    <div key={k} className="flex flex-col gap-0.5">
                      <span className="inline-flex items-center gap-2 text-[13px] font-bold">
                        <span className="h-3 w-3 rounded-full" style={{ background: WIND_VAR[k] }} />
                        {t.event[k]}
                      </span>
                      <span className="font-mono font-semibold">{pct(race.shares[k])}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-3 border-t border-line pt-3.5 text-sm">
                  <Stat label={t.event.wind}>
                    {race.windDirection} · {t.event.gusts} {formatNumber(race.gustsKmh, lang)} km/h
                  </Stat>
                  {race.rainPct != null && (
                    <Stat label={t.event.rain}>
                      <span className="font-mono">{pct(race.rainPct)}</span>
                    </Stat>
                  )}
                  {race.tempC != null && (
                    <Stat label={t.event.tempStart}>
                      <span className="font-mono">{formatNumber(race.tempC, lang)} °C</span>
                    </Stat>
                  )}
                  {race.echelonRisk && <Stat label={t.event.echelonRisk}>{race.echelonRisk[lang]}</Stat>}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3.5 rounded-3xl bg-navy p-[22px] text-[#f1f5f9] sm:p-[26px]">
                <span className="text-[22px] font-extrabold leading-[1.15] [font-stretch:106%]">{t.event.trainingTitle}</span>
                <span className="text-base leading-normal text-[#b6c4d6]">{t.event.trainingText}</span>
                <a className="btn btn-white mt-auto" href={site.webAppUrl}>
                  {t.event.trainingCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-bg-alt py-12 sm:py-[clamp(48px,6vw,88px)]">
        <div className="wrap grid gap-[clamp(36px,5vw,72px)] lg:grid-cols-2">
          {race.sections.length > 0 ? (
            <>
              {bike.length > 0 && <Takeaways title={tri ? t.event.bikeTakeaways : t.event.keyTakeaways} items={bike} lang={lang} t={t} />}
              {run.length > 0 && <Takeaways title={t.event.runTakeaways} items={run} lang={lang} t={t} />}
            </>
          ) : (
            <div className="flex flex-col gap-4">
              <h2 className="h2">{t.event.keyTakeaways}</h2>
              <p className="lead">{race.note[lang]}</p>
            </div>
          )}
          <p className="m-0 self-end text-sm leading-normal text-muted lg:col-span-2">{t.event.disclaimer}</p>
        </div>
      </section>

      <section className="py-12 sm:py-[clamp(48px,6vw,88px)]">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <RelatedList
            title={t.event.moreRaces}
            links={others.map((r) => ({ href: `/${lang}/races/${r.slug}/`, label: `${t.useCase.windForecast} ${r.shortName}` }))}
          />
          <RelatedList title={t.event.learnMore} links={features.map((f) => ({ href: `/${lang}/features/${f.slug}/`, label: f.navTitle }))} />
        </div>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: AVAILABLE_LANGS.flatMap((lang) => getRaces().map((r) => ({ params: { lang, slug: r.slug } }))),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const lang = params!.lang as Lang
  const races = getRaces()
  const race = races.find((r) => r.slug === params!.slug)!
  const useCases = getUseCases(lang)
  return {
    props: {
      lang,
      chrome: getChrome(lang),
      race,
      others: races.filter((r) => r.slug !== race.slug).map((r) => ({ slug: r.slug, shortName: r.shortName[lang] })),
      features: race.relatedFeatures
        .map((id) => useCases.find((u) => u.id === id))
        .filter((u): u is NonNullable<typeof u> => !!u)
        .map((u) => ({ slug: u.slug, navTitle: u.navTitle })),
    },
  }
}
