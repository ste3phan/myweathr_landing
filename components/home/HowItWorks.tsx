import type { Messages } from '../../lib/i18n'
import { Icon, SectionHead, tx, type IconName } from '../site/ui'

const ICONS: { name: IconName; color: string }[] = [
  { name: 'download', color: 'text-brand' },
  { name: 'route', color: 'text-brand' },
  { name: 'clock', color: 'text-premium' },
]

export default function HowItWorks({ t }: { t: Messages }) {
  return (
    <section id="how" className="border-y border-line bg-bg-alt py-12 sm:py-[clamp(64px,8vw,112px)]">
      <div className="wrap flex flex-col gap-6 sm:gap-12">
        <SectionHead eyebrow={t.how.eyebrow} title={t.how.title} className="max-w-[720px]" />
        <ol className="m-0 grid list-none gap-3 p-0 sm:gap-5 md:grid-cols-3">
          {t.how.steps.map((s, i) => (
            <li key={i} className="card flex gap-3.5 !rounded-2xl p-[18px] sm:flex-col sm:!rounded-[20px] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="pt-[3px] font-mono text-sm font-semibold text-brand-strong dark:text-brand sm:pt-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Icon name={ICONS[i].name} size={28} className={`hidden sm:block ${ICONS[i].color}`} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3.5">
                <h3 className="m-0 text-[19px] font-extrabold [font-stretch:106%] sm:text-[22px]">{s.title}</h3>
                <p className="m-0 text-base leading-[1.55] text-fg-2 sm:text-[17px]">{tx(s.text)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
