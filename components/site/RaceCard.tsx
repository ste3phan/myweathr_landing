import Link from 'next/link'
import type { Race } from '../../lib/content'
import { formatDate, type Lang, type Messages } from '../../lib/i18n'

export default function RaceCard({ race, lang, t, className = '' }: { race: Race; lang: Lang; t: Messages; className?: string }) {
  const date = formatDate(race.date, lang, { day: 'numeric', month: 'short' })
  return (
    <Link
      href={`/${lang}/races/${race.slug}/`}
      className={`flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface text-fg no-underline transition-colors hover:border-brand sm:rounded-[22px] ${className}`}
    >
      <img
        src={race.image}
        alt={race.imageAlt[lang]}
        width={race.imageWidth}
        height={race.imageHeight}
        loading="lazy"
        className="block aspect-[16/10] w-full bg-map object-cover"
      />
      <div className="flex flex-1 flex-col gap-2.5 p-4 sm:p-[22px]">
        <span className="label !text-[11px] sm:!text-xs">
          {race.series} · {date}
        </span>
        <span className="text-[19px] font-extrabold leading-[1.15] [font-stretch:106%] sm:text-[22px]">{race.cardTitle[lang]}</span>
        <span className="text-[15px] leading-[1.45] text-fg-2 sm:text-base">{race.note[lang]}</span>
        <span className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1.5 text-[15px] text-fg-2">
          <span>
            {t.races.score} <strong className="font-mono text-fg">{race.tailwindScore}</strong>
            <span className="font-mono text-muted">/100</span>
          </span>
          <span className="link font-bold">{t.races.cta} →</span>
        </span>
      </div>
    </Link>
  )
}
