import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export type RelatedLink = { href: string; title: string; desc: string }

export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
        <Reveal>
          <h2 className="mb-6 font-serif text-2xl leading-tight md:text-3xl">כדאי לקרוא גם</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <Reveal key={link.href} delay={i * 90} className="h-full">
              <Link
                href={link.href}
                className="card-lift flex h-full flex-col gap-2 rounded-2xl bg-card p-6 shadow-elevated ring-1 ring-transparent hover:ring-gold/30"
              >
                <h3 className="font-serif text-lg leading-snug">{link.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{link.desc}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-3 font-semibold text-gold">
                  לקריאה
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
