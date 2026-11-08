import type { Messages } from '../../lib/i18n'
import { Icon, SectionHead, tx } from '../site/ui'

/** No-JS accordion with <details>; FAQPage JSON-LD is emitted by the page. */
export default function Faq({ t }: { t: Messages }) {
  return (
    <section id="faq" className="py-12 sm:py-[clamp(64px,8vw,112px)]">
      <div className="wrap flex flex-wrap items-start gap-x-10 gap-y-5">
        <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} className="flex-[1_1_300px]" />
        <div className="min-w-0 flex-[2_1_560px] border-t border-line">
          {t.faq.items.map((f, i) => (
            <details key={i} className="border-b border-line" open={i === 0}>
              <summary className="flex min-h-[44px] items-center justify-between gap-4 py-[18px] text-[17px] font-bold leading-[1.35] text-fg [font-stretch:104%] sm:py-[22px] sm:text-[19px]">
                <h3 className="m-0 text-[inherit] font-[inherit]">{tx(f.q)}</h3>
                <Icon name="chevron" size={22} className="chev" />
              </summary>
              <p className="m-0 mb-[18px] max-w-[64ch] text-base leading-relaxed text-fg-2 sm:mb-6 sm:text-[17px]">{tx(f.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
