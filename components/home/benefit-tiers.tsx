import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'

const tiers = [
  {
    pct: '50%',
    amount: '1,943 ₪',
    desc: 'עילות חלקיות: השגחה חלקית, ADHD (10–18 נק׳), אלרגיה, כבדות שמיעה',
  },
  {
    pct: '100%',
    amount: '3,820 ₪',
    desc: 'השגחה מלאה, אוטיזם, חרשות, ליקוי ראייה, תסמונת דאון',
    featured: true,
  },
  {
    pct: '112%',
    amount: '4,501 ₪',
    desc: '8–9 נקודות תלות, או שתי עילות נפרדות של 100% יחד',
  },
  {
    pct: '188%',
    amount: '7,181 ₪',
    desc: 'תלות מלאה (10–12 נקודות), או שלוש עילות של 100% יחד',
  },
  {
    pct: '235%',
    amount: '9,126 ₪',
    desc: 'תלות מוחלטת במיוחד (13+ נקודות) — הדרגה הגבוהה ביותר',
  },
]

export function BenefitTiers() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-20 md:py-28 lg:px-8">
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gold/8 blur-[130px]"
        aria-hidden="true"
      />
      <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="kicker">סכומי הקצבה ל-2026</p>
        <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
          כמה מגיע לילד שלכם בחודש?
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
          הקצבה נקבעת לפי דרגה, לא לפי אחוזי נכות. חמש הדרגות הקיימות בחוק, וכמה מגיע בכל אחת — מעודכן ל-1.1.2026.
        </p>
      </Reveal>

      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
        {tiers.map((tier, i) => (
          <Reveal
            key={tier.pct}
            delay={i * 70}
            className="relative h-full w-[72%] shrink-0 snap-center sm:w-auto sm:shrink"
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold text-gold-foreground shadow-md sm:px-3 sm:text-xs">
                הכי נפוץ
              </span>
            )}
            <div
              className={`card-lift relative flex h-full flex-col items-center gap-1.5 rounded-2xl p-3 text-center sm:gap-3 sm:p-6 ${
                tier.featured
                  ? 'border border-gold/40 bg-gradient-to-b from-gold/12 to-card shadow-elevated ring-1 ring-gold/20 lg:-translate-y-2'
                  : 'border border-border bg-card shadow-soft hover:border-gold/50'
              }`}
            >
              <p className="font-serif text-2xl text-gold sm:text-3xl md:text-4xl">{tier.pct}</p>
              <p className="font-serif text-base sm:text-xl">
                <CountUp text={tier.amount} />
                <span className="mr-1 text-xs font-sans font-normal text-muted-foreground sm:text-sm">בחודש</span>
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{tier.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={350} className="mt-8 flex justify-center">
        <Link
          href="/guides/benefit-amounts"
          className="flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-accent"
        >
          לטבלה המלאה, כולל תוספת מונשם ו-2 מטפלים
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  )
}
