import { site } from '../../site.config'
import type { Messages } from '../../lib/i18n'
import { AppStoreBadge } from './ui'

export default function CtaBand({ t, title, sub }: { t: Messages; title: string; sub?: string }) {
  return (
    <section className="pb-16 sm:pb-[clamp(64px,8vw,112px)]">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-[22px] bg-navy px-[22px] py-7 text-[#f1f5f9] sm:rounded-[28px] sm:p-[clamp(36px,6vw,72px)]">
          <div className="flex max-w-[560px] flex-col gap-3">
            <h2 className="m-0 text-[30px] font-extrabold leading-[1.05] tracking-[-0.03em] [font-stretch:108%] sm:text-[clamp(30px,3.4vw,46px)]">
              {title}
            </h2>
            {sub && <p className="m-0 text-base leading-normal text-[#b6c4d6] sm:text-lg">{sub}</p>}
          </div>
          <div className="grid w-full grid-cols-1 gap-3 min-[420px]:flex min-[420px]:w-auto min-[420px]:flex-wrap">
            <AppStoreBadge t={t} className="justify-center" />
            <a className="btn btn-white" href={site.webAppUrl}>
              {t.nav.openWebApp}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
