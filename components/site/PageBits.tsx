import Link from 'next/link'

export function Breadcrumb({ label, items }: { label: string; items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label={label}>
      <ol className="m-0 flex list-none flex-wrap gap-2 p-0 text-[15px] text-muted">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.href ? (
              <Link href={it.href} className="link">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-fg-2">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function RelatedList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  if (!links.length) return null
  return (
    <div className="flex flex-col gap-4">
      <span className="eyebrow">{title}</span>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="related-link">
              {l.label}
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
