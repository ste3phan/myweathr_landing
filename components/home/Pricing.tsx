import { useState } from 'react'
import { site } from '../../site.config'
import type { Messages } from '../../lib/i18n'
import { Icon, SectionHead } from '../site/ui'

function Cell({ v, premium, t }: { v: boolean | string; premium?: boolean; t: Messages }) {
  if (v === true)
    return (
      <Icon
        name="check"
        size={22}
        label={t.pricing.table.included}
        className={`mx-auto ${premium ? 'text-premium-fg' : 'text-tail'}`}
        style={{ strokeWidth: 2.4 }}
      />
    )
  if (v === false) return <Icon name="dash" size={22} label={t.pricing.table.notIncluded} className="mx-auto text-muted" />
  return <span className={premium ? 'font-semibold text-fg' : 'text-fg-2'}>{v}</span>
}

export default function Pricing({ t }: { t: Messages }) {
  // Both prices are in the static HTML; the toggle only switches visibility.
  const [yearly, setYearly] = useState(true)
  const p = t.pricing
  const plans = [
    { key: 'yearly', on: yearly, ...p.premium.yearly },
    { key: 'monthly', on: !yearly, ...p.premium.monthly },
  ]
  return (
    <section id="premium" className="border-t border-line bg-bg-alt py-12 sm:py-[clamp(64px,8vw,112px)]">
      <div className="wrap flex flex-col gap-[18px] sm:gap-10">
        <div className="flex flex-col gap-3.5 sm:items-center sm:text-center">
          <SectionHead eyebrow={p.eyebrow} title={p.title} className="sm:items-center [&_h2]:max-w-[18ch]" />
          <div role="group" aria-label={p.billing} className="mt-2.5 flex gap-1 rounded-[14px] bg-surface-2 p-1 sm:inline-flex">
            <button type="button" className="seg flex-1" aria-pressed={!yearly} onClick={() => setYearly(false)}>
              {p.monthly}
            </button>
            <button type="button" className="seg flex-1" aria-pressed={yearly} onClick={() => setYearly(true)}>
              {p.yearly} <span className="seg-badge font-mono text-xs font-semibold text-tail">{p.yearlyBadge}</span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[900px] gap-3 sm:gap-5 md:grid-cols-2">
          <div className="order-last flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-[22px] sm:gap-[18px] sm:rounded-3xl sm:p-8 md:order-first">
            <span className="pill pill-free self-start">{t.tiers.free}</span>
            <span className="font-mono text-[38px] font-semibold tracking-[-0.03em] sm:text-[44px]">{p.free.price}</span>
            <p className="m-0 text-base leading-normal text-fg-2 sm:text-[17px]">{p.free.text}</p>
            <a className="btn btn-ghost mt-auto !min-h-[52px] sm:!min-h-[48px]" href={site.webAppUrl}>
              {p.free.cta}
            </a>
          </div>
          <div className="flex flex-col gap-3 rounded-[20px] border-2 border-premium bg-surface p-[21px] sm:gap-[18px] sm:rounded-3xl sm:p-[31px]">
            <span className="pill pill-prem self-start">{t.tiers.premium}</span>
            {plans.map((pl) => (
              <div key={pl.key} className={`${pl.on ? 'flex' : 'hidden'} flex-col gap-3 sm:gap-[18px]`}>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-mono text-[38px] font-semibold tracking-[-0.03em] sm:text-[44px]">{pl.amount}</span>
                  <span className="text-base text-muted sm:text-[17px]">{pl.per}</span>
                </div>
                <p className="m-0 text-base leading-normal text-fg-2 sm:text-[17px]">{pl.note}</p>
              </div>
            ))}
            <a className="btn btn-premium mt-auto !min-h-[52px] sm:!min-h-[48px]" href={site.appStoreUrl}>
              {p.premium.cta}
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[900px] overflow-x-auto rounded-[18px] border border-line bg-surface sm:rounded-[20px]">
          <table className="cmp">
            <caption className="sr-only">{p.table.caption}</caption>
            <thead>
              <tr>
                <th scope="col">{p.table.feature}</th>
                <th scope="col" className="c">
                  {t.tiers.free}
                </th>
                <th scope="col" className="c p !text-premium-fg">
                  {t.tiers.premium}
                </th>
              </tr>
            </thead>
            <tbody>
              {p.table.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className="!font-sans !text-base !font-semibold !normal-case !tracking-normal !text-fg">
                    {r.label}
                  </th>
                  <td className="c">
                    <Cell v={r.free} t={t} />
                  </td>
                  <td className="c p">
                    <Cell v={r.premium} premium t={t} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
