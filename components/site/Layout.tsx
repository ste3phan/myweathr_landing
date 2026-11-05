import type { ReactNode } from 'react'
import type { Alternates, Lang, Messages } from '../../lib/i18n'
import type { Chrome } from '../../lib/content'
import Header from './Header'
import Footer from './Footer'

type Props = {
  lang: Lang
  t: Messages
  chrome: Chrome
  alternates: Alternates
  current?: 'features' | 'races'
  children: ReactNode
}

export default function Layout({ lang, t, chrome, alternates, current, children }: Props) {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-clip bg-bg text-fg">
      <Header lang={lang} t={t} useCases={chrome.useCases} alternates={alternates} current={current} />
      <main id="top" className="flex-1">
        {children}
      </main>
      <Footer lang={lang} t={t} useCases={chrome.useCases} raceLinks={chrome.raceLinks} alternates={alternates} />
    </div>
  )
}
