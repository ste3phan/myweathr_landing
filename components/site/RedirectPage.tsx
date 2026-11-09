import Head from 'next/head'
import { site } from '../../site.config'
import { AVAILABLE_LANGS, DEFAULT_LANG, LANG_STORAGE_KEY } from '../../lib/i18n'

/**
 * Static redirect for language-neutral URLs (/, /privacy/, …) → /<lang>/<path>.
 * Order: language the visitor last used on this site → browser language → English.
 * Without JS: meta refresh to the English page.
 */
export default function RedirectPage({ path = '' }: { path?: string }) {
  const target = (l: string) => `/${l}/${path}`
  const script = `(function(){var a=${JSON.stringify(AVAILABLE_LANGS)},l=null;
try{var s=localStorage.getItem('${LANG_STORAGE_KEY}');if(a.indexOf(s)>-1)l=s}catch(e){}
if(!l){var n=(navigator.languages||[navigator.language||'']).map(function(x){return String(x).slice(0,2).toLowerCase()});
for(var i=0;i<n.length;i++){if(a.indexOf(n[i])>-1){l=n[i];break}}}
location.replace('/'+(l||'${DEFAULT_LANG}')+'/${path}'+location.search+location.hash)})()`
  return (
    <>
      <Head>
        <title>{site.name}</title>
        <meta httpEquiv="refresh" content={`1; url=${target(DEFAULT_LANG)}`} />
        <link rel="canonical" href={`${site.url}${target(DEFAULT_LANG)}`} />
        {AVAILABLE_LANGS.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`${site.url}${target(l)}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${site.url}${target(DEFAULT_LANG)}`} />
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </Head>
      <p style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
        <a href={target(DEFAULT_LANG)}>{site.name}</a>
      </p>
    </>
  )
}
