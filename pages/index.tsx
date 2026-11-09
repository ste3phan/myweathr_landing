import Head from 'next/head'
import { site } from '../site.config'
import { AVAILABLE_LANGS, DEFAULT_LANG } from '../lib/i18n'

// Static redirect: / → /<browser language>/ (falls back to /en/ without JS via meta refresh).
const script = `(function(){try{var a=${JSON.stringify(AVAILABLE_LANGS)};var l=(navigator.languages||[navigator.language||''])
.map(function(x){return String(x).slice(0,2).toLowerCase()}).filter(function(x){return a.indexOf(x)>-1})[0]||'${DEFAULT_LANG}';
location.replace('/'+l+'/'+location.hash)}catch(e){location.replace('/${DEFAULT_LANG}/')}})()`

export default function RootRedirect() {
  return (
    <>
      <Head>
        <title>{site.name}</title>
        <meta httpEquiv="refresh" content={`1; url=/${DEFAULT_LANG}/`} />
        <link rel="canonical" href={`${site.url}/${DEFAULT_LANG}/`} />
        {AVAILABLE_LANGS.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`${site.url}/${l}/`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${site.url}/${DEFAULT_LANG}/`} />
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </Head>
      <p style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
        <a href={`/${DEFAULT_LANG}/`}>{site.name}</a>
      </p>
    </>
  )
}
