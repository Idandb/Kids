import Link from 'next/link'
import { ArrowLeft, Banknote, Building2, Droplet, HandCoins, PlaneTakeoff, Zap } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const big = [
  {
    icon: Zap,
    title: 'הנחה בחשמל',
    stat: '50% על 400 קוט"ש ראשונים',
    text: 'ההנחה ניתנת רק לילדים עם עילת תלות או טיפול רפואי מיוחד — לא לכל מקבל קצבה. משפחות רבות זכאיות ולא יודעות.',
  },
  {
    icon: Building2,
    title: 'הנחה בארנונה',
    stat: 'עד 90% מ-1.1.2026',
    text: 'החוק החדש: 33% לילד אחד, 66% לשניים, 90% לשלושה ילדים נכים ומעלה — במקום הנחה אחידה לבית אב.',
  },
]

const small = [
  { icon: Droplet, title: 'הנחה במים', stat: '+3.5 מ"ק בתעריף נמוך' },
  { icon: Banknote, title: 'נקודות זיכוי מס', stat: '2 לכל הורה + 6 שנים רטרו' },
  { icon: HandCoins, title: 'ימי היעדרות מעבודה', stat: '18 ימים + 52 שעות בשנה' },
  { icon: PlaneTakeoff, title: 'ניידות ותג חניה', stat: 'בתנאים מסוימים, גם ללא קצבת ניידות' },
]

export function HiddenBenefits() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8">
        <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="kicker">הכסף שמעבר לקצבה</p>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
            הטבות נוספות שרוב המשפחות מפספסות
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            הקצבה החודשית היא רק ההתחלה. חלק גדול מההטבות האלה לא ניתנות אוטומטית — צריך לבקש אותן בפירוש.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {big.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="h-full">
              <div className="card-lift flex h-full flex-col gap-3 rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/10 to-card p-7 shadow-elevated">
                <span className="flex h-13 w-13 items-center justify-center rounded-full bg-gold shadow-md shadow-gold/25">
                  <item.icon className="h-7 w-7 text-gold-foreground" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="text-sm font-bold text-gold">{item.stat}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {small.map((item, i) => (
            <Reveal key={item.title} delay={200 + i * 70} className="h-full">
              <div className="card-lift flex h-full flex-col gap-2.5 rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-gold/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 ring-1 ring-gold/20">
                  <item.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-base leading-snug">{item.title}</h3>
                <p className="text-sm font-bold text-gold">{item.stat}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500} className="mt-8 flex justify-center">
          <Link
            href="/guides/hidden-benefits"
            className="flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-accent"
          >
            כל ההטבות הנלוות במדריך המלא
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
