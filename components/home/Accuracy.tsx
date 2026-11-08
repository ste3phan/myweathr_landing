import type { Messages } from '../../lib/i18n'
import { SectionHead } from '../site/ui'

function Figure({ kind, caption, alt, t }: { kind: 'free' | 'premium'; caption: string; alt: string; t: Messages }) {
  const prem = kind === 'premium'
  return (
    <figure
      className={`m-0 flex flex-col gap-2 rounded-2xl bg-surface sm:gap-3.5 sm:rounded-[22px] ${
        prem ? 'border-2 border-premium p-[7px] sm:p-[19px]' : 'border border-line p-2 sm:p-5'
      }`}
    >
      <figcaption className="order-last flex flex-col gap-1 sm:order-first sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <span className="text-sm font-bold sm:text-lg sm:font-extrabold">{caption}</span>
        <span className={`pill self-start sm:self-auto ${prem ? 'pill-prem' : 'pill-free'}`}>{t.tiers[kind]}</span>
      </figcaption>
      <picture>
        <source srcSet={`/images/accuracy/${kind}-dark.png`} media="(prefers-color-scheme: dark)" />
        <img
          src={`/images/accuracy/${kind}-light.png`}
          alt={alt}
          width={960}
          height={1200}
          loading="lazy"
          className="block h-auto w-full rounded-[10px] sm:rounded-[14px]"
        />
      </picture>
    </figure>
  )
}

export default function Accuracy({ t }: { t: Messages }) {
  return (
    <section className="border-y border-line bg-bg-alt py-12 sm:py-[clamp(64px,8vw,112px)]">
      <div className="wrap flex flex-col gap-[18px] sm:gap-10">
        <div className="flex max-w-[760px] flex-col gap-3.5">
          <SectionHead eyebrow={t.accuracy.eyebrow} title={t.accuracy.title} />
          <p className="lead">{t.accuracy.text}</p>
        </div>
        <div className="grid max-w-[1000px] grid-cols-2 gap-2.5 sm:gap-5">
          <Figure kind="free" caption={t.accuracy.free.caption} alt={t.accuracy.free.alt} t={t} />
          <Figure kind="premium" caption={t.accuracy.premium.caption} alt={t.accuracy.premium.alt} t={t} />
        </div>
      </div>
    </section>
  )
}
