import Link from 'next/link'
import { ArrowLeft, Banknote, Brain, HardHat, HeartHandshake, HeartPulse, PhoneCall } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const tracks = [
  {
    href: '/services/tax-exemption',
    icon: Banknote,
    title: 'פטור ממס הכנסה מטעמי בריאות',
    text: 'נכות רפואית משוקללת של 90% ומעלה עשויה לזכות אתכם בפטור מלא ממס — כולל החזר מזומן רטרואקטיבי.',
    stat: 'עד 445,200 ₪ בשנה + החזר 6 שנים אחורה',
  },
  {
    href: '/services/work-accidents',
    icon: HardHat,
    title: 'תאונות עבודה ומיקרו-טראומה',
    text: 'פגיעה חד-פעמית או שחיקה של שנים — ההבדל בין 19% ל-20% נכות הוא ההבדל בין מענק לקצבה לכל החיים.',
    stat: 'קצבה חודשית פטורה ממס — לכל החיים',
  },
  {
    href: '/services/disability',
    icon: HeartHandshake,
    title: 'נכות כללית ושירותים מיוחדים (שר"ם)',
    text: 'שתי קצבאות נפרדות שאפשר במקרים רבים לקבל במקביל — אם מגישים נכון, בסדר הנכון.',
    stat: 'שילוב קצבאות של 14,000+ ₪ בחודש',
  },
  {
    href: '/services/nursing',
    icon: HeartPulse,
    title: 'תביעות סיעוד',
    text: 'גמלת ביטוח לאומי לצד הביטוח הסיעודי של קופת החולים — רוב המשפחות לא יודעות שאפשר לתבוע את שניהם.',
    stat: 'עד 5,000 ₪ לחודש מהביטוח הפרטי — במקביל לגמלה',
  },
  {
    href: '/services/adhd',
    icon: Brain,
    title: 'הפרעות קשב וריכוז (ADHD)',
    text: 'להורים לילדים עם ADHD ולמבוגרים שחיים עם זה — הטבות מס וקצבאות שכמעט אף אחד לא ממצה.',
    stat: 'נקודות זיכוי + החזר רטרואקטיבי עד 6 שנים',
  },
]

export function PremiumTracks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8">
      <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="kicker">תחומי ההתמחות שלנו</p>
        <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
          כל הזכויות שלך. מקום אחד. בדיקה אחת.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
          חמישה מסלולי זכאות מרכזיים — ולעיתים קרובות הזכאות האמיתית נמצאת דווקא בשילוב ביניהם.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, i) => (
          <Reveal key={track.href} delay={i * 80} className="h-full">
            <Link
              href={track.href}
              className="card-lift group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-soft hover:border-gold/50"
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 ring-1 ring-gold/20">
                <track.icon className="h-7 w-7 text-gold" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl leading-snug transition-colors group-hover:text-accent">
                {track.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{track.text}</p>
              <p className="mt-auto border-t border-border pt-4 text-sm font-bold text-gold">{track.stat}</p>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                לפרטים ובדיקת זכאות
                <ArrowLeft
                  className="h-4 w-4 text-gold transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        ))}

        {/* Completing CTA card */}
        <Reveal delay={5 * 80} className="h-full">
          <div className="relative flex h-full flex-col justify-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-[oklch(0.16_0.015_260)] p-7 text-navy-foreground">
            <div className="bg-dots absolute inset-0" aria-hidden="true" />
            <div
              className="absolute -top-20 -left-20 h-52 w-52 rounded-full bg-gold/15 blur-[90px]"
              aria-hidden="true"
            />
            <span className="relative flex h-13 w-13 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
              <PhoneCall className="h-7 w-7 text-gold" aria-hidden="true" />
            </span>
            <h3 className="relative font-serif text-xl leading-snug">לא בטוחים איזה מסלול מתאים לכם?</h3>
            <p className="relative text-sm leading-relaxed text-navy-foreground/80">
              בדיוק בשביל זה אנחנו כאן. שיחת אבחון אחת ממפה את כל המסלולים הרלוונטיים עבורכם — חינם וללא התחייבות.
            </p>
            <Link
              href="/contact"
              className="btn-gold relative flex w-fit items-center gap-2 rounded-full px-6 py-3 font-bold text-gold-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              לבדיקה מקיפה — חינם
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
