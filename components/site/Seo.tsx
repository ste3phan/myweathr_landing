import Head from 'next/head'
import { site } from '../../site.config'
import { AVAILABLE_LANGS, DEFAULT_LANG, type Alternates, type Lang } from '../../lib/i18n'

type Props = {
  lang: Lang
  title: string
  description: string
  path: string
  alternates: Alternates
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  jsonLd?: object[]
}

const abs = (p: string) => (p.startsWith('http') ? p : site.url + p)

export default function Seo({ lang, title, description, path, alternates, image, imageAlt, type = 'website', jsonLd = [] }: Props) {
  const img = abs(image ?? site.ogImage)
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={abs(path)} />
      {AVAILABLE_LANGS.filter((l) => alternates[l]).map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={abs(alternates[l]!)} />
      ))}
      {alternates[DEFAULT_LANG] && <link rel="alternate" hrefLang="x-default" href={abs(alternates[DEFAULT_LANG]!)} />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={lang === 'de' ? 'de_DE' : 'en_GB'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={abs(path)} />
      <meta property="og:image" content={img} />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </Head>
  )
}
