import Link from 'next/link'
import { site } from '../../site.config'
import type { Alternates, Lang, Messages } from '../../lib/i18n'
import type { RaceLink, UseCaseLink } from '../../lib/content'
import { LangLinks } from './Header'
import { Icon } from './ui'

type Props = { lang: Lang; t: Messages; useCases: UseCaseLink[]; raceLinks: RaceLink[]; alternates: Alternates }

export default function Footer({ lang, t, useCases, raceLinks, alternates }: Props) {
  const col = 'flex flex-col gap-2.5 text-[15px]'
  const a = 'link inline-flex min-h-[32px] items-center'
  return (
    <footer className="border-t border-line bg-bg-alt pb-10 pt-10 sm:pt-14">
      <div className="wrap flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex flex-col gap-3.5 md:col-span-1">
            <span className="flex items-center gap-2.5">
              <img src={site.icon} alt="" width={30} height={30} className="rounded-[7px]" loading="lazy" />
              <span className="text-[19px] font-extrabold [font-stretch:112%]">{site.name}</span>
            </span>
            <p className="m-0 max-w-[32ch] text-[15px] leading-normal text-muted">{t.footer.tagline}</p>
            <a href={site.instagramUrl} className="link inline-flex min-h-[44px] items-center gap-1.5 self-start font-bold">
              Instagram
              <Icon name="external" size={16} />
            </a>
          </div>
          <nav aria-label={t.footer.features} className={col}>
            <span className="label">{t.footer.features}</span>
            {useCases.map((u) => (
              <Link key={u.id} href={`/${lang}/features/${u.slug}/`} className={a}>
                {u.shortTitle}
              </Link>
            ))}
          </nav>
          <nav aria-label={t.footer.races} className={col}>
            <span className="label">{t.footer.races}</span>
            {raceLinks.map((r) => (
              <Link key={r.slug} href={`/${lang}/races/${r.slug}/`} className={a}>
                {r.shortName}
              </Link>
            ))}
          </nav>
          <nav aria-label={site.name} className={col}>
            <span className="label">{site.name}</span>
            <Link href={`/${lang}/changelog/`} className={a}>
              {t.footer.changelog}
            </Link>
            {/* Legal pages exist once (English) at the site root. */}
            <a href="/imprint/" className={a}>
              {t.footer.imprint}
            </a>
            <a href="/terms/" className={a}>
              {t.footer.terms}
            </a>
            <a href="/privacy/" className={a}>
              {t.footer.privacy}
            </a>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6">
          <nav aria-label={t.footer.language}>
            <LangLinks
              lang={lang}
              alternates={alternates}
              t={t}
              className="flex flex-wrap gap-x-3.5 gap-y-1 text-[15px]"
              itemClassName="link inline-flex min-h-[40px] items-center"
            />
          </nav>
          <span className="text-sm text-muted">© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  )
}
