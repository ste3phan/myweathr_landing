import { site } from '../../site.config'
import type { Messages } from '../../lib/i18n'
import { AppStoreBadge, HeroVisual, Icon, tx } from '../site/ui'

export default function Hero({ t }: { t: Messages }) {
  return (
    <section className="bg-bg pb-10 pt-7 sm:pb-[clamp(56px,7vw,104px)] sm:pt-[clamp(40px,6vw,88px)]">
      <div className="wrap grid items-center gap-[clamp(28px,5vw,72px)] lg:grid-cols-2">
        <div className="flex flex-col gap-[18px] sm:gap-7">
          <span className="eyebrow !text-brand-strong dark:!text-brand">{t.hero.eyebrow}</span>
          <h1 className="h1">{t.hero.title}</h1>
          <p className="m-0 max-w-[34ch] text-lg leading-normal text-fg-2 sm:text-[clamp(19px,1.6vw,22px)]">{t.hero.sub}</p>
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
            <AppStoreBadge t={t} className="justify-center sm:justify-start" />
            <a className="btn btn-ghost !min-h-[52px] !px-3 sm:!px-5" href={site.webAppUrl}>
              {t.nav.openWebApp}
              <Icon name="arrow" className="hidden sm:block" />
            </a>
          </div>
          <div className="hidden flex-wrap gap-x-5 gap-y-2 text-[15px] text-muted sm:flex">
            <span className="inline-flex items-center gap-2">
              <Icon name="download" />
              {t.hero.metaImport}
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="phone" />
              {t.hero.metaPlatforms}
            </span>
          </div>
        </div>
        <HeroVisual main="wind-flow-map" mainAlt={tx(t.hero.mapAlt)} overlay="tailwind-score" overlayAlt={t.hero.tailwindAlt} />
        <p className="m-0 text-sm text-muted sm:hidden">
          {t.hero.metaImport} · {t.hero.metaPlatforms}
        </p>
      </div>
    </section>
  )
}
