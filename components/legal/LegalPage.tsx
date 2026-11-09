import type { ReactNode } from 'react'
import { getMessages, sameForAll, type Lang } from '../../lib/i18n'
import type { Chrome } from '../../lib/content'
import Layout from '../site/Layout'
import Seo from '../site/Seo'
import { Breadcrumb } from '../site/PageBits'
import { tx } from '../site/ui'

export type LegalSlug = 'imprint' | 'terms' | 'privacy' | 'delete-account'

const KEYS: Record<LegalSlug, { title: 'imprint' | 'terms' | 'privacy' | 'deleteAccount'; desc: 'imprintDescription' | 'termsDescription' | 'privacyDescription' | 'deleteAccountDescription' }> = {
  imprint: { title: 'imprint', desc: 'imprintDescription' },
  terms: { title: 'terms', desc: 'termsDescription' },
  privacy: { title: 'privacy', desc: 'privacyDescription' },
  'delete-account': { title: 'deleteAccount', desc: 'deleteAccountDescription' },
}

/** Legal pages: English text inside the localised site chrome (header, footer, dark mode). */
export default function LegalPage({ lang, chrome, slug, children }: { lang: Lang; chrome: Chrome; slug: LegalSlug; children: ReactNode }) {
  const t = getMessages(lang)
  const k = KEYS[slug]
  const alternates = sameForAll((l) => `/${l}/${slug}/`)
  return (
    <Layout lang={lang} t={t} chrome={chrome} alternates={alternates}>
      <Seo
        lang={lang}
        title={`${t.legal[k.title]} – ${tx('{name}')}`}
        description={tx(t.legal[k.desc])}
        path={`/${lang}/${slug}/`}
        alternates={alternates}
      />
      <section className="pb-16 pt-6 sm:pb-[clamp(56px,7vw,96px)] sm:pt-[clamp(32px,5vw,56px)]">
        <div className="wrap flex flex-col gap-8">
          <Breadcrumb label={t.useCase.breadcrumb} items={[{ href: `/${lang}/`, label: t.nav.home }, { label: t.legal[k.title] }]} />
          {t.legal.englishOnly && (
            <p className="m-0 max-w-[820px] rounded-xl border border-line bg-surface-2 px-4 py-3 text-[15px] text-fg-2">{t.legal.englishOnly}</p>
          )}
          <article lang="en" className="max-w-[820px]">
            {children}
          </article>
        </div>
      </section>
    </Layout>
  )
}
