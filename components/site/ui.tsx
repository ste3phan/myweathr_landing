import type { ReactNode, SVGProps } from 'react'
import Link from 'next/link'
import { site } from '../../site.config'
import { SCREENS, type ScreenName } from '../../lib/images'
import type { Messages } from '../../lib/i18n'

/** Replace {name} / {webAppHost} placeholders in copy. */
export function tx(s: string): string {
  return s.replace(/\{name\}/g, site.name).replace(/\{webAppHost\}/g, site.webAppHost)
}

/* ---------- Icons (stroke icons from the design) ---------- */

const ICONS = {
  chevron: <path d="M6 9l6 6 6-6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  external: <path d="M7 17L17 7M9 7h8v8" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  download: <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />,
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  route: (
    <>
      <path d="M4 18c3-1 3-6 6-7s4 3 7 2 3-6 3-6" />
      <circle cx="4" cy="18" r="1.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l3 2M9 2h6" />
    </>
  ),
  coffee: <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 10h2a2 2 0 0 1 0 4h-2M8 3v3M12 3v3" />,
  sync: <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4" />,
  cloud: <path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" />,
  terrain: <path d="M3 20l6-10 4 6 3-4 5 8z" />,
  check: <path d="M5 12l5 5 9-10" />,
  dash: <path d="M7 12h10" />,
}
export type IconName = keyof typeof ICONS

export function Icon({
  name,
  size = 18,
  label,
  ...rest
}: { name: IconName; size?: number; label?: string } & Omit<SVGProps<SVGSVGElement>, 'name'>) {
  return (
    <svg
      className={`icon ${rest.className ?? ''}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
      style={rest.style}
    >
      {ICONS[name]}
    </svg>
  )
}

/* ---------- Pills ---------- */

export function TierPills({ tier, beta, t }: { tier: 'free' | 'premium'; beta?: boolean; t: Messages }) {
  return (
    <span className="flex flex-wrap gap-2">
      <span className={`pill ${tier === 'premium' ? 'pill-prem' : 'pill-free'}`}>{t.tiers[tier]}</span>
      {beta && <span className="pill pill-beta">{t.tiers.beta}</span>}
    </span>
  )
}

/* ---------- Screenshot with automatic light/dark switch (no JS) ---------- */

export function Screen({
  name,
  alt,
  eager,
  className = '',
}: {
  name: ScreenName
  alt: string
  eager?: boolean
  className?: string
}) {
  const { w, h } = SCREENS[name]
  return (
    <picture>
      <source srcSet={`/images/screens/dark/${name}.png`} media="(prefers-color-scheme: dark)" />
      <img
        src={`/images/screens/light/${name}.png`}
        alt={alt}
        width={w}
        height={h}
        loading={eager ? 'eager' : 'lazy'}
        decoding={eager ? 'sync' : 'async'}
        // React 18 warns on camelCase fetchPriority; lower-case passes through to the DOM.
        {...(eager ? ({ fetchpriority: 'high' } as Record<string, string>) : {})}
        className={className}
      />
    </picture>
  )
}

export function Shot({
  name,
  alt,
  eager,
  className = '',
  style,
}: {
  name: ScreenName
  alt: string
  eager?: boolean
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div className={`shot ${className}`} style={style}>
      <Screen name={name} alt={alt} eager={eager} />
    </div>
  )
}

/** Hero visual: large screenshot right, smaller one overlapping bottom-left. */
export function HeroVisual({
  main,
  mainAlt,
  overlay,
  overlayAlt,
}: {
  main: ScreenName
  mainAlt: string
  overlay?: ScreenName | null
  overlayAlt?: string | null
}) {
  if (!overlay) {
    const narrow = main === 'echelon'
    return (
      <div className={`w-full justify-self-center ${narrow ? 'max-w-[380px]' : 'max-w-[520px]'}`}>
        <Shot name={main} alt={mainAlt} eager />
      </div>
    )
  }
  return (
    <div className="relative w-full max-w-[560px] justify-self-center pb-[72px] sm:pb-10">
      <Shot name={main} alt={mainAlt} eager className="ml-auto w-[84%] !p-2 sm:w-[80%] sm:!p-3" />
      <Shot
        name={overlay}
        alt={overlayAlt ?? ''}
        eager
        className="absolute bottom-0 left-0 w-[64%] !rounded-[14px] !p-1.5 !shadow-[0_16px_40px_rgba(15,23,42,.18)] sm:w-[58%] sm:!rounded-[18px] sm:!p-2"
      />
    </div>
  )
}

/* ---------- App Store badge ----------
   Rendered in HTML so it localises with the page. To use Apple's official
   badge artwork instead, swap the contents of this one component. */

export function AppStoreBadge({ t, className = '' }: { t: Messages; className?: string }) {
  return (
    <a
      href={site.appStoreUrl}
      aria-label={t.appStore.aria}
      className={`inline-flex min-h-[52px] items-center gap-2.5 rounded-xl border border-[#3a3a3c] bg-black px-4 text-white no-underline transition-colors hover:bg-[#1c1c1e] ${className}`}
    >
      <svg width="22" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="-mt-0.5 flex-none">
        <path d="M17.04 12.8c-.02-3.08 2.5-4.5 2.61-4.55-1.43-2.09-3.65-2.35-4.45-2.37-1.81-.22-3.57 1.03-4.49 1.03-.95 0-2.35-1.01-3.88-.98-1.96.03-3.79 1.16-4.79 2.9-2.1 3.53-.5 8.75 1.52 11.8 1 1.5 2.17 3.18 3.71 3.11 1.5-.07 2.1-.94 3.92-.94 1.8 0 2.35.94 3.93.91 1.63-.03 2.63-1.52 3.59-3.03 1.17-1.7 1.64-3.37 1.66-3.45-.05-.02-3.3-1.32-3.33-4.43zM13.86 3.85c.8-.99 1.33-2.32 1.18-3.67-1.15.05-2.58.79-3.43 1.75-.75.86-1.4 2.24-1.22 3.54 1.3.1 2.65-.65 3.47-1.62z" />
      </svg>
      <span className="flex flex-col items-start leading-[1.1]">
        <span className="text-[11px] font-medium">{t.appStore.top}</span>
        <span className="text-[20px] font-bold tracking-[-0.01em]">{t.appStore.bottom}</span>
      </span>
    </a>
  )
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="link inline-flex min-h-[44px] items-center gap-1.5 self-start text-[17px] font-bold">
      {children}
      <Icon name="arrow" />
    </Link>
  )
}

export function SectionHead({
  eyebrow,
  title,
  center,
  className = '',
}: {
  eyebrow: string
  title: string
  center?: boolean
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-3.5 ${center ? 'items-center text-center' : ''} ${className}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2">{title}</h2>
    </div>
  )
}
