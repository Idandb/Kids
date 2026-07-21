import type { ReactNode } from 'react'
import { CtaBand } from '@/components/cta-band'
import { LeadForm } from '@/components/lead-form'
import { CountUp } from '@/components/count-up'
import { Reveal } from '@/components/reveal'
import { JsonLd } from '@/components/json-ld'

const SITE_URL = 'https://medical-rights-agency.vercel.app'

export function ServiceJsonLd({
  name,
  description,
  slug,
  path,
}: {
  name: string
  description: string
  slug?: string
  path?: string
}) {
  const url = `${SITE_URL}${path ?? `/services/${slug}`}`
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            name,
            description,
            url,
            areaServed: { '@type': 'Country', name: 'Israel' },
            provider: {
              '@type': 'ProfessionalService',
              name: 'מגן זכויות',
              telephone: '+972-53-545-5667',
              url: SITE_URL,
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'דף הבית', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name, item: url },
            ],
          },
        ],
      }}
    />
  )
}

export function ServiceHero({
  badge,
  title,
  subtitle,
  formTitle,
}: {
  badge: string
  title: ReactNode
  subtitle: string
  formTitle: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        className="anim-float absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gold/12 blur-[130px]"
        aria-hidden="true"
      />
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="flex flex-col gap-5">
          <p className="anim-fade-up w-fit rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold backdrop-blur-sm">
            {badge}
          </p>
          <h1 className="anim-fade-up font-serif text-3xl leading-tight text-balance [animation-delay:100ms] md:text-5xl">
            {title}
          </h1>
          <p className="anim-fade-up max-w-xl text-lg leading-relaxed text-navy-foreground/85 text-pretty [animation-delay:200ms]">
            {subtitle}
          </p>
        </div>
        <div className="anim-scale-in [animation-delay:250ms]">
          <LeadForm variant="dark" title={formTitle} />
        </div>
      </div>
    </section>
  )
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-lift glass flex h-full flex-col gap-2 rounded-2xl border border-border p-6 text-center shadow-soft hover:border-gold/40">
      <span className="mx-auto h-1 w-10 rounded-full bg-gradient-to-l from-gold to-gold/30" aria-hidden="true" />
      <p className="font-serif text-3xl text-gold md:text-4xl">
        <CountUp text={value} />
      </p>
      <p className="text-sm leading-snug text-muted-foreground">{label}</p>
    </div>
  )
}

export function StatStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="border-y border-gold/15 bg-gold/8">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="h-full">
            <StatCard value={stat.value} label={stat.label} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export function Section({
  title,
  children,
  muted = false,
}: {
  title: string
  children: ReactNode
  muted?: boolean
}) {
  return (
    <section className={muted ? 'bg-secondary' : undefined}>
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 lg:px-8">
        <Reveal>
          <h2 className="mb-6 font-serif text-2xl leading-tight text-balance md:text-3xl">{title}</h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">{children}</div>
        </Reveal>
      </div>
    </section>
  )
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-bold text-gold ring-1 ring-gold/25"
            aria-hidden="true"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServiceCta({ heading, sub }: { heading: string; sub: string }) {
  return <CtaBand heading={heading} sub={sub} />
}
