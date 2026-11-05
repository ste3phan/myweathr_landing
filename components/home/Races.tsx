import Link from 'next/link'
import type { Race } from '../../lib/content'
import type { Lang, Messages } from '../../lib/i18n'
import RaceCard from '../site/RaceCard'
import { SectionHead } from '../site/ui'

export default function Races({ t, lang, races }: { t: Messages; lang: Lang; races: Race[] }) {
  return (
    <section id="races" className="py-12 sm:py-[clamp(64px,8vw,112px)]">
      <div className="wrap flex flex-col gap-[18px] sm:gap-10">
        <div className="flex flex-wrap items-end justify-between gap-x-5 gap-y-2">
          <SectionHead eyebrow={t.races.eyebrow} title={t.races.title} className="max-w-[680px]" />
          <Link href={`/${lang}/races/`} className="link inline-flex min-h-[44px] items-center text-[17px] font-bold">
            {t.races.all} →
          </Link>
        </div>
        {/* Mobile: horizontal scroll-snap row that bleeds to the screen edge */}
        <div className="no-scrollbar -mx-[clamp(16px,4vw,40px)] flex snap-x snap-mandatory gap-3 overflow-x-auto px-[clamp(16px,4vw,40px)] md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0">
          {races.map((r) => (
            <RaceCard key={r.slug} race={r} lang={lang} t={t} className="w-[280px] flex-none snap-start md:w-auto" />
          ))}
        </div>
      </div>
    </section>
  )
}
