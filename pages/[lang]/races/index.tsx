import type { GetStaticPaths, GetStaticProps } from 'next'
import { getMessages, langPaths, sameForAll, type Lang } from '../../../lib/i18n'
import { getChrome, getRaces, type Chrome, type Race } from '../../../lib/content'
import Layout from '../../../components/site/Layout'
import Seo from '../../../components/site/Seo'
import CtaBand from '../../../components/site/CtaBand'
import RaceCard from '../../../components/site/RaceCard'
import { Breadcrumb } from '../../../components/site/PageBits'
import { tx } from '../../../components/site/ui'

type Props = { lang: Lang; chrome: Chrome; races: Race[] }

export default function RacesIndex({ lang, chrome, races }: Props) {
  const t = getMessages(lang)
  const alternates = sameForAll((l) => `/${l}/races/`)
  return (
    <Layout lang={lang} t={t} chrome={chrome} alternates={alternates} current="races">
      <Seo
        lang={lang}
        title={tx(t.meta.racesTitle)}
        description={t.meta.racesDescription}
        path={`/${lang}/races/`}
        alternates={alternates}
        image={races[0]?.image}
      />
      <section className="pb-12 pt-6 sm:pb-[clamp(56px,7vw,96px)] sm:pt-[clamp(32px,5vw,64px)]">
        <div className="wrap flex flex-col gap-8 sm:gap-10">
          <Breadcrumb label={t.useCase.breadcrumb} items={[{ href: `/${lang}/`, label: t.nav.home }, { label: t.nav.races }]} />
          <div className="flex max-w-[760px] flex-col gap-4">
            <span className="eyebrow">{t.races.eyebrow}</span>
            <h1 className="h1-page">{t.races.indexTitle}</h1>
            <p className="lead">{tx(t.races.indexIntro)}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {races.map((r) => (
              <RaceCard key={r.slug} race={r} lang={lang} t={t} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand t={t} title={t.cta.title} sub={t.cta.sub} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: langPaths(), fallback: false })

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const lang = params!.lang as Lang
  return { props: { lang, chrome: getChrome(lang), races: getRaces() } }
}
