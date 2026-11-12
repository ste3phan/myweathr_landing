import type { GetStaticPaths, GetStaticProps } from 'next'
import { site } from '../../site.config'
import { getMessages, langPaths, sameForAll, type Lang } from '../../lib/i18n'
import { getChrome, getRaces, type Chrome, type Race } from '../../lib/content'
import Layout from '../../components/site/Layout'
import Seo from '../../components/site/Seo'
import CtaBand from '../../components/site/CtaBand'
import { tx } from '../../components/site/ui'
import Hero from '../../components/home/Hero'
import HowItWorks from '../../components/home/HowItWorks'
import Features from '../../components/home/Features'
import Accuracy from '../../components/home/Accuracy'
import Races from '../../components/home/Races'
import Pricing from '../../components/home/Pricing'
import Faq from '../../components/home/Faq'

type Props = { lang: Lang; chrome: Chrome; races: Race[] }

export default function Home({ lang, chrome, races }: Props) {
  const t = getMessages(lang)
  const alternates = sameForAll((l) => `/${l}/`)
  const description = tx(t.meta.homeDescription)
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: site.name,
      operatingSystem: 'iOS, Web',
      applicationCategory: 'SportsApplication',
      description,
      url: `${site.url}/${lang}/`,
      downloadUrl: site.appStoreUrl,
      offers: { '@type': 'Offer', price: '0', priceCurrency: lang === 'de' ? 'EUR' : 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.items.map((f) => ({
        '@type': 'Question',
        name: tx(f.q),
        acceptedAnswer: { '@type': 'Answer', text: tx(f.a) },
      })),
    },
  ]
  return (
    <Layout lang={lang} t={t} chrome={chrome} alternates={alternates}>
      <Seo lang={lang} title={tx(t.meta.homeTitle)} description={description} path={`/${lang}/`} alternates={alternates} jsonLd={jsonLd} />
      <Hero t={t} />
      <HowItWorks t={t} />
      <Features t={t} lang={lang} useCases={chrome.useCases} />
      <Accuracy t={t} />
      <Races t={t} lang={lang} races={races} />
      <Pricing t={t} />
      <Faq t={t} />
      <CtaBand t={t} title={t.cta.title} sub={t.cta.sub} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: langPaths(), fallback: false })

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const lang = params!.lang as Lang
  return { props: { lang, chrome: getChrome(lang), races: getRaces().slice(0, 3) } }
}
