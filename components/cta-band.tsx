import { Phone } from 'lucide-react'
import { LeadForm } from '@/components/lead-form'
import { Reveal } from '@/components/reveal'

export function CtaBand({
  heading = 'אל תשאירו כסף אצל המדינה. בדקו זכאות עכשיו — חינם.',
  sub = 'שיחת אבחון ראשונית עם מומחה, ללא עלות וללא התחייבות. אם אין זכאות — נגיד לכם ביושר.',
}: {
  heading?: string
  sub?: string
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-[oklch(0.16_0.015_260)] text-navy-foreground">
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div
        className="anim-float absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-2 lg:px-8">
        <Reveal className="flex flex-col gap-5">
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">{heading}</h2>
          <p className="text-lg leading-relaxed text-navy-foreground/80 text-pretty">{sub}</p>
          <a
            href="tel:0535455667"
            className="flex w-fit items-center gap-3 rounded-full border-2 border-gold px-7 py-3.5 text-lg font-bold text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground hover:shadow-lg hover:shadow-gold/30 active:translate-y-0"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>חייגו: <span dir="ltr">053-5455667</span></span>
          </a>
        </Reveal>
        <Reveal delay={120}>
          <LeadForm variant="dark" />
        </Reveal>
      </div>
    </section>
  )
}
