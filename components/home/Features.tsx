import type { ReactNode } from 'react'
import type { Lang, Messages } from '../../lib/i18n'
import type { UseCaseLink } from '../../lib/content'
import type { ScreenName } from '../../lib/images'
import { ArrowLink, Icon, Shot, TierPills, tx, type IconName } from '../site/ui'

type BlockProps = {
  tier: 'free' | 'premium'
  beta?: boolean
  title: string
  text: string
  more: string
  href: string
  shot: ScreenName
  alt: string
  shotMax: string
  flip?: boolean
  t: Messages
  children?: ReactNode
}

function Block({ tier, beta, title, text, more, href, shot, alt, shotMax, flip, t, children }: BlockProps) {
  return (
    <div className="wrap grid items-center gap-4 sm:gap-[clamp(36px,5vw,80px)] lg:grid-cols-2">
      <div className="flex flex-col gap-4 sm:gap-[22px]">
        <TierPills tier={tier} beta={beta} t={t} />
        <h2 className="h2-feature">{title}</h2>
        <p className="lead max-w-[46ch]">{text}</p>
        {children}
        <span className="hidden lg:block">
          <ArrowLink href={href}>{more}</ArrowLink>
        </span>
      </div>
      <div className={`flex w-full justify-center ${flip ? 'lg:order-first' : ''}`}>
        <Shot name={shot} alt={alt} className="w-full" style={{ maxWidth: shotMax }} />
      </div>
      <span className="lg:hidden">
        <ArrowLink href={href}>{more}</ArrowLink>
      </span>
    </div>
  )
}

function Chips({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="label">{label}</span>
      <div className="flex flex-wrap gap-2">
        {items.map((x) => (
          <span key={x} className="pill pill-free !px-3 !py-[7px] !text-[13px]">
            {x}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Features({ t, lang, useCases }: { t: Messages; lang: Lang; useCases: UseCaseLink[] }) {
  const uc = (id: string) => {
    const u = useCases.find((x) => x.id === id)
    return u ? `/${lang}/features/${u.slug}/` : `/${lang}/`
  }
  const f = t.features
  return (
    <section id="features" className="flex flex-col gap-16 py-14 sm:gap-[clamp(72px,9vw,128px)] sm:py-[clamp(64px,8vw,120px)]">
      <Block
        t={t}
        tier="premium"
        title={f.windCost.title}
        text={f.windCost.text}
        more={f.windCost.more}
        href={uc('best-start-time')}
        shot="wind-cost"
        alt={f.windCost.alt}
        shotMax="520px"
      >
        <div className="flex flex-col gap-2">
          <Chips label={f.windCost.bikeLabel} items={f.windCost.bikes} />
          <div className="mt-1.5">
            <Chips label={f.windCost.positionLabel} items={f.windCost.positions} />
          </div>
        </div>
      </Block>
      <Block
        t={t}
        flip
        tier="premium"
        title={f.startTime.title}
        text={tx(f.startTime.text)}
        more={f.startTime.more}
        href={uc('best-start-time')}
        shot="best-start-time"
        alt={f.startTime.alt}
        shotMax="500px"
      />
      <Block
        t={t}
        tier="free"
        title={f.tailwind.title}
        text={f.tailwind.text}
        more={f.tailwind.more}
        href={uc('plan-ride')}
        shot="tailwind-score"
        alt={f.tailwind.alt}
        shotMax="520px"
      >
        <div className="flex max-w-[420px] flex-col gap-2">
          <div className="tw-bar" />
          <div className="flex justify-between font-mono text-xs text-muted sm:text-[13px]">
            <span>{f.tailwind.scaleLow}</span>
            <span>{f.tailwind.scaleHigh}</span>
          </div>
        </div>
      </Block>
      <Block
        t={t}
        flip
        tier="premium"
        beta
        title={f.echelon.title}
        text={f.echelon.text}
        more={f.echelon.more}
        href={uc('crosswind-echelons')}
        shot="echelon"
        alt={f.echelon.alt}
        shotMax="400px"
      />

      <div className="wrap">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {f.tiles.map((tile) => (
            <div key={tile.title} className="flex flex-col gap-1.5 rounded-[14px] border border-line p-3.5 sm:gap-2.5 sm:rounded-[18px] sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Icon name={tile.icon as IconName} size={26} className="hidden text-brand sm:block" />
                <TierPills tier={tile.tier as 'free' | 'premium'} t={t} />
              </div>
              <h3 className="m-0 text-base font-extrabold sm:text-[19px]">{tile.title}</h3>
              <p className="m-0 text-sm leading-[1.45] text-fg-2 sm:text-base sm:leading-normal">{tile.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
