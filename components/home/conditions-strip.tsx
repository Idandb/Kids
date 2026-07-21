import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const conditions = [
  { href: '/guides/benefit-amounts', label: 'סכומי הקצבה 2026' },
  { href: '/guides/hidden-benefits', label: 'הטבות נוספות — מעבר לקצבה' },
  { href: '/guides/turning-18', label: 'המעבר לגיל 18' },
  { href: '/guides/medical-committee', label: 'הכנה לוועדה רפואית' },
  { href: '/guides/appeal', label: 'ערר על החלטת ועדה' },
  { href: '/conditions', label: 'כל עילות הזכאות' },
]

export function ConditionsStrip() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 lg:px-8">
        <Reveal className="mx-auto mb-8 flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="kicker">מדריכים שכדאי להכיר</p>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
            כמה מגיע לכם, ואיך לא מפספסים
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {conditions.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="group flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-medium shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
                >
                  {c.label}
                  <ArrowLeft
                    className="h-4 w-4 text-gold transition-transform duration-200 group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
