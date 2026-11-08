import type { GetStaticPaths, GetStaticProps } from 'next'
import { site } from '../../../site.config'
import { AVAILABLE_LANGS, getMessages, type Alternates, type Lang } from '../../../lib/i18n'
import { getChrome, getRaces, getUseCases, type Chrome, type UseCase } from '../../../lib/content'
import Layout from '../../../components/site/Layout'
import Seo from '../../../components/site/Seo'
import CtaBand from '../../../components/site/CtaBand'
import { AppStoreBadge, HeroVisual, Shot, TierPills, tx } from '../../../components/site/ui'
import { Breadcrumb, RelatedList } from '../../../components/site/PageBits'

type RelatedRace = { slug: string; shortName: string }
type Props = {
  lang: Lang
  chrome: Chrome
  page: UseCase
  alternates: Alternates
  related: { slug: string; navTitle: string }[]
  races: RelatedRace[]
}

export default function UseCasePage({ lang, chrome, page, alternates, related, races }: Props) {
  const t = getMessages(lang)
  const path = `/${lang}/features/${page.slug}/`
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: site.name, item: `${site.url}/${lang}/` },
        { '@type': 'ListItem', position: 2, name: page.title, item: site.url + path },
      ],
    },
  ]
  return (
    <Layout lang={lang} t={t} chrome={chrome} alternates={alternates} current="features">
      <Seo
        lang={lang}
        title={tx(page.metaTitle)}
        description={tx(page.description)}
        path={path}
        alternates={alternates}
        image={`/images/screens/light/${page.hero.main}.png`}
        imageAlt={page.hero.mainAlt}
        type="article"
        jsonLd={jsonLd}
      />

      <section className="pb-12 pt-6 sm:pb-[clamp(48px,6vw,88px)] sm:pt-[clamp(32px,5vw,64px)]">
        <div className="wrap flex flex-col gap-6 sm:gap-10">
          <Breadcrumb
            label={t.useCase.breadcrumb}
            items={[
              { href: `/${lang}/`, label: t.nav.home },
              { href: `/${lang}/#features`, label: t.nav.features },
              { label: page.navTitle },
            ]}
          />
          <div className="grid items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-2">
            <div className="flex flex-col gap-5 sm:gap-6">
              <TierPills tier={page.tier} beta={page.beta} t={t} />
              <h1 className="h1-page">{page.title}</h1>
              <p className="m-0 max-w-[42ch] text-lg leading-[1.55] text-fg-2 sm:text-xl">{tx(page.intro)}</p>
              <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
                <AppStoreBadge t={t} className="justify-center" />
                <a className="btn btn-ghost !min-h-[52px]" href={site.webAppUrl}>
                  {page.ctaLabel}
                </a>
              </div>
            </div>
            <HeroVisual main={page.hero.main} mainAlt={page.hero.mainAlt} overlay={page.hero.overlay} overlayAlt={page.hero.overlayAlt} />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-bg-alt py-12 sm:py-[clamp(56px,7vw,96px)]">
        <div className="wrap grid items-start gap-[clamp(36px,5vw,72px)] lg:grid-cols-2">
          <div className="flex flex-col gap-7">
            <h2 className="h2">{t.useCase.howTitle}</h2>
            {page.how.map((h) => (
              <div key={h.title} className="flex flex-col gap-1.5">
                <h3 className="m-0 text-xl font-extrabold">{h.title}</h3>
                <p className="m-0 text-[17px] leading-relaxed text-fg-2">{tx(h.text)}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Shot
              name={page.howImage}
              alt={page.howImageAlt}
              className="w-full"
              style={{ maxWidth: page.howImage === 'echelon' || page.howImage === 'wind-flow-map' ? 420 : 500 }}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-[clamp(56px,7vw,96px)]">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <RelatedList
            title={t.useCase.related}
            links={related.map((r) => ({ href: `/${lang}/features/${r.slug}/`, label: r.navTitle }))}
          />
          <RelatedList
            title={t.useCase.raceForecasts}
            links={races.map((r) => ({ href: `/${lang}/races/${r.slug}/`, label: `${t.useCase.windForecast} ${r.shortName}` }))}
          />
        </div>
      </section>

      <CtaBand t={t} title={page.ctaTitle} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: AVAILABLE_LANGS.flatMap((lang) => getUseCases(lang).map((u) => ({ params: { lang, slug: u.slug } }))),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const lang = params!.lang as Lang
  const all = getUseCases(lang)
  const page = all.find((u) => u.slug === params!.slug)!
  const alternates: Alternates = {}
  for (const l of AVAILABLE_LANGS) {
    const match = getUseCases(l).find((u) => u.id === page.id)
    if (match) alternates[l] = `/${l}/features/${match.slug}/`
  }
  const raceMap = new Map(getRaces().map((r) => [r.slug, r]))
  return {
    props: {
      lang,
      chrome: getChrome(lang),
      page,
      alternates,
      related: all.filter((u) => u.id !== page.id).map((u) => ({ slug: u.slug, navTitle: u.navTitle })),
      races: page.relatedRaces
        .map((s) => raceMap.get(s))
        .filter((r): r is NonNullable<typeof r> => !!r)
        .map((r) => ({ slug: r.slug, shortName: r.shortName[lang] })),
    },
  }
}
