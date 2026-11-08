import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { site } from '../../site.config'
import { ALL_LANGS, isLang, type Alternates, type Lang, type Messages } from '../../lib/i18n'
import type { UseCaseLink } from '../../lib/content'
import { Icon } from './ui'

type Props = { lang: Lang; t: Messages; useCases: UseCaseLink[]; alternates: Alternates; current?: 'features' | 'races' }

/**
 * Dropdowns and the mobile menu are <details> elements: they work without JS and
 * render statically. A small effect closes them on outside click, Escape and navigation.
 */
function useDisclosureDismiss(ref: React.RefObject<HTMLElement>) {
  const router = useRouter()
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const all = () => Array.from(root.querySelectorAll<HTMLDetailsElement>('details[data-dismiss]'))
    const onClick = (e: MouseEvent) => {
      all().forEach((d) => {
        if (d.open && !d.contains(e.target as Node)) d.open = false
      })
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      all().forEach((d) => {
        if (d.open) {
          d.open = false
          d.querySelector('summary')?.focus()
        }
      })
    }
    // Opening one dropdown closes the others.
    const onToggle = (e: Event) => {
      const t = e.target as HTMLDetailsElement
      if (t.open) all().forEach((d) => d !== t && (d.open = false))
    }
    const closeAll = () => all().forEach((d) => (d.open = false))
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    root.addEventListener('toggle', onToggle, true)
    router.events.on('routeChangeStart', closeAll)
    router.events.on('hashChangeStart', closeAll)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
      root.removeEventListener('toggle', onToggle, true)
      router.events.off('routeChangeStart', closeAll)
      router.events.off('hashChangeStart', closeAll)
    }
  }, [ref, router.events])
}

export function LangLinks({
  lang,
  alternates,
  t,
  className,
  itemClassName,
  short,
}: {
  lang: Lang
  alternates: Alternates
  t: Messages
  className?: string
  itemClassName?: string
  short?: boolean
}) {
  return (
    <ul className={className}>
      {ALL_LANGS.map((l) => {
        const label = short ? l.code.toUpperCase() : l.label
        const href = isLang(l.code) ? alternates[l.code] ?? `/${l.code}/` : null
        return (
          <li key={l.code}>
            {href ? (
              <a
                href={href}
                lang={l.code}
                hrefLang={l.code}
                aria-current={l.code === lang ? 'true' : undefined}
                className={`${itemClassName} ${l.code === lang ? 'font-bold text-fg' : ''}`}
              >
                {label}
              </a>
            ) : (
              <span lang={l.code} className={`${itemClassName} cursor-default text-muted`} title={t.nav.soon}>
                {label}
                {!short && <span className="ml-2 font-mono text-[11px] uppercase tracking-wider">{t.nav.soon}</span>}
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default function Header({ lang, t, useCases, alternates, current }: Props) {
  const ref = useRef<HTMLElement>(null)
  useDisclosureDismiss(ref)
  const home = `/${lang}/`
  const navLink = 'inline-flex min-h-[44px] items-center gap-1 whitespace-nowrap px-1 text-[15px] font-semibold text-fg-2 no-underline hover:text-fg'
  const anchors = [
    { href: `${home}#how`, label: t.nav.how },
    { href: `${home}#premium`, label: t.nav.premium },
    { href: `/${lang}/races/`, label: t.nav.races, key: 'races' },
    { href: `${home}#faq`, label: t.nav.faq },
  ]

  return (
    <header ref={ref} className="relative z-30 border-b border-line bg-bg">
      <div className="wrap flex h-16 items-center gap-5 lg:h-[76px] xl:gap-7">
        <Link href={home} className="flex flex-none items-center gap-2.5 text-fg no-underline">
          <img src={site.icon} alt="" width={34} height={34} className="h-[30px] w-[30px] rounded-[7px] lg:h-[34px] lg:w-[34px] lg:rounded-lg" />
          <span className="text-[19px] font-extrabold tracking-[-0.02em] [font-stretch:112%] lg:text-[21px]">{site.name}</span>
        </Link>

        {/* Desktop */}
        <nav aria-label={t.nav.main} className="hidden flex-1 items-center gap-[18px] min-[981px]:flex xl:gap-[22px]">
          <details data-dismiss className="relative">
            <summary className={`${navLink} ${current === 'features' ? '!text-fg' : ''}`}>
              {t.nav.features}
              <Icon name="chevron" size={16} className="chev" />
            </summary>
            <div className="absolute -left-3.5 top-[52px] w-[340px] rounded-2xl border border-line bg-surface p-2.5 shadow-card">
              {useCases.map((u) => (
                <Link
                  key={u.id}
                  href={`/${lang}/features/${u.slug}/`}
                  className="flex flex-col gap-0.5 rounded-[10px] px-3.5 py-3 text-fg no-underline hover:bg-surface-2"
                >
                  <strong className="text-[15px]">{u.navTitle}</strong>
                  <span className="text-sm text-muted">{u.navSub}</span>
                </Link>
              ))}
            </div>
          </details>
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className={`${navLink} ${a.key && a.key === current ? '!text-fg' : ''}`}
              aria-current={a.key && a.key === current ? 'page' : undefined}
            >
              {a.label}
            </a>
          ))}
          <span className="flex-1" />
          <details data-dismiss className="relative">
            <summary className={navLink} aria-label={t.nav.languageCurrent}>
              <Icon name="globe" />
              {lang.toUpperCase()}
              <Icon name="chevron" size={16} className="chev" />
            </summary>
            <div className="absolute -right-2.5 top-[52px] w-[220px] rounded-2xl border border-line bg-surface p-2.5 shadow-card">
              <LangLinks
                lang={lang}
                alternates={alternates}
                t={t}
                itemClassName="flex min-h-[44px] items-center justify-between rounded-[10px] px-3.5 text-[15px] font-semibold text-fg no-underline hover:bg-surface-2"
              />
            </div>
          </details>
          <a className="btn btn-ghost !min-h-[44px] max-[1199px]:!hidden" href={site.webAppUrl}>
            {t.nav.openWebApp}
          </a>
          <a className="btn btn-primary !min-h-[44px]" href={site.appStoreUrl}>
            <span className="hidden xl:inline">{t.nav.download}</span>
            <span className="xl:hidden">{t.nav.downloadShort}</span>
          </a>
        </nav>

        {/* Mobile */}
        <div className="ml-auto flex items-center gap-2 min-[981px]:hidden">
          <a className="btn btn-primary !min-h-[44px] !px-3.5 !text-[15px]" href={site.appStoreUrl}>
            {t.nav.downloadShort}
          </a>
          <details data-dismiss className="group">
            <summary
              aria-label={t.nav.openMenu}
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line text-fg"
            >
              <Icon name="menu" size={22} className="group-open:hidden" />
              <Icon name="close" size={22} className="hidden group-open:block" />
            </summary>
            <nav
              aria-label={t.nav.main}
              className="absolute inset-x-0 top-full max-h-[calc(100dvh-64px)] overflow-y-auto border-b border-line bg-bg px-4 pb-7 pt-3 shadow-card"
            >
              <div className="mx-auto flex max-w-[640px] flex-col gap-1">
                <span className="label pt-2">{t.nav.features}</span>
                {useCases.map((u) => (
                  <Link key={u.id} href={`/${lang}/features/${u.slug}/`} className="flex min-h-[48px] items-center text-lg font-bold text-fg no-underline">
                    {u.navTitle}
                  </Link>
                ))}
                <span className="my-2 h-px bg-line" />
                {anchors.map((a) => (
                  <a key={a.href} href={a.href} className="flex min-h-[48px] items-center text-lg font-bold text-fg no-underline">
                    {a.label}
                  </a>
                ))}
                <span className="my-2 h-px bg-line" />
                <span className="label">{t.nav.language}</span>
                <LangLinks
                  lang={lang}
                  alternates={alternates}
                  t={t}
                  className="grid grid-cols-2 gap-x-3"
                  itemClassName="flex min-h-[48px] items-center text-base font-semibold text-fg no-underline"
                />
                <a className="btn btn-ghost mt-3 w-full" href={site.webAppUrl}>
                  {t.nav.openWebApp}
                </a>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
