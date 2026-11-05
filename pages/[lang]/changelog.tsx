import type { GetStaticPaths, GetStaticProps } from 'next'
import { getMessages, langPaths, sameForAll, type Lang } from '../../lib/i18n'
import { getChrome, type Chrome } from '../../lib/content'
import { roadmap, versions } from '../../content/changelog'
import Layout from '../../components/site/Layout'
import Seo from '../../components/site/Seo'
import { Breadcrumb } from '../../components/site/PageBits'
import { Icon, tx } from '../../components/site/ui'

type Props = { lang: Lang; chrome: Chrome }

export default function Changelog({ lang, chrome }: Props) {
  const t = getMessages(lang)
  const alternates = sameForAll((l) => `/${l}/changelog/`)
  return (
    <Layout lang={lang} t={t} chrome={chrome} alternates={alternates}>
      <Seo
        lang={lang}
        title={tx(t.meta.changelogTitle)}
        description={tx(t.meta.changelogDescription)}
        path={`/${lang}/changelog/`}
        alternates={alternates}
      />
      <section className="pb-12 pt-6 sm:pb-[clamp(56px,7vw,96px)] sm:pt-[clamp(32px,5vw,64px)]">
        <div className="wrap flex flex-col gap-8 sm:gap-10">
          <Breadcrumb label={t.useCase.breadcrumb} items={[{ href: `/${lang}/`, label: t.nav.home }, { label: t.footer.changelog }]} />
          <div className="flex max-w-[760px] flex-col gap-4">
            <span className="eyebrow">{t.changelog.eyebrow}</span>
            <h1 className="h1-page">{tx(t.changelog.title)}</h1>
            <p className="lead">{t.changelog.intro}</p>
          </div>
          <div className="max-w-[820px] border-t border-line">
            {versions.map((v, i) => (
              <details key={v.version} open={i === 0} className="border-b border-line">
                <summary className="flex min-h-[44px] items-center justify-between gap-4 py-5">
                  <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="m-0 text-[22px] font-extrabold [font-stretch:106%]">
                      {t.changelog.version} {v.version}
                    </h2>
                    <span className="font-mono text-sm text-muted">{v.date[lang]}</span>
                  </span>
                  <Icon name="chevron" size={22} className="chev" />
                </summary>
                <ul className="m-0 mb-6 flex list-none flex-col gap-2.5 p-0">
                  {v.items.map((it, j) => (
                    <li key={j} className="flex gap-2.5 text-[17px] leading-normal text-fg-2">
                      <Icon name="check" size={20} className="mt-0.5 flex-none text-tail" />
                      {it[lang]}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-bg-alt py-12 sm:py-[clamp(56px,7vw,96px)]">
        <div className="wrap flex flex-col gap-8">
          <div className="flex max-w-[760px] flex-col gap-3.5">
            <h2 className="h2">{t.changelog.roadmapTitle}</h2>
            <p className="lead">{tx(t.changelog.roadmapIntro)}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {roadmap.map((r) => (
              <div key={r.title.en} className="card flex flex-col gap-2 p-6">
                <h3 className="m-0 text-[19px] font-extrabold">{r.title[lang]}</h3>
                <p className="m-0 text-base leading-normal text-fg-2">{r.text[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: langPaths(), fallback: false })

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const lang = params!.lang as Lang
  return { props: { lang, chrome: getChrome(lang) } }
}
