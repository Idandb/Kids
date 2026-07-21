import Link from 'next/link'
import { ArrowLeft, Baby, Brain, Dna, Droplets, Ear, HeartHandshake, HeartPulse, PhoneCall, Puzzle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const tracks = [
  {
    href: '/conditions/adhd',
    icon: Brain,
    title: 'הפרעות קשב וריכוז (ADHD)',
    text: 'טבלת ניקוד ברורה קובעת את הדרגה. מכתב מנוסח נכון מהרופא יכול להעלות את הילד מ-50% ל-100%.',
    stat: '50%–100% לפי ניקוד + החזר מס עד 6 שנים',
    featured: true,
  },
  {
    href: '/conditions/autism',
    icon: Puzzle,
    title: 'ילדים על הרצף האוטיסטי',
    text: 'אבחנה על הרצף מזכה ב-100% קבוע, ללא קשר לרמת התפקוד — אם התיק מוגש נכון מהפעם הראשונה.',
    stat: '100% קבוע, לרוב עד גיל הבגרות',
  },
  {
    href: '/conditions/down-syndrome',
    icon: Dna,
    title: 'תסמונת דאון וכרומוזומליות',
    text: 'זכאות כמעט אוטומטית מלידה, במדרגות ברורות לפי גיל — ובגיל 6 יש לבדוק זכאות מחדש.',
    stat: '100% מגיל 91 יום ועד גיל 6',
  },
  {
    href: '/conditions/developmental-delay',
    icon: Baby,
    title: 'עיכוב התפתחותי',
    text: 'מגיל 91 יום עד גיל 3 בדיוק. הרטרו כאן מוגבל ל-6 חודשים בלבד — כל עיכוב בהגשה הוא כסף אבוד.',
    stat: 'רטרו מוגבל ל-6 חודשים — דחוף',
  },
  {
    href: '/conditions/dependency',
    icon: HeartHandshake,
    title: 'תלות והשגחה',
    text: 'מגיל 3 עד 18. ככל שהתלות בפעולות היומיום גבוהה יותר — הדרגה עולה, עד 235%.',
    stat: 'עד 9,126 ₪ בחודש + הנחת חשמל',
  },
  {
    href: '/conditions/hearing-vision',
    icon: Ear,
    title: 'ליקויי שמיעה, ראייה וגפיים',
    text: 'ליקויים שמתועדים באודיוגרמה, בדיקת עיניים או קריוטיפ — לרוב מאושרים ללא זימון לוועדה כלל.',
    stat: 'עד 100% — לרוב בלי ועדה',
  },
  {
    href: '/conditions/cancer',
    icon: HeartPulse,
    title: 'ילדים במחלה אונקולוגית',
    text: 'בתקופת הטיפולים הכימותרפיים או ההקרנות — הדרגה הגבוהה ביותר שקיימת בחוק.',
    stat: '235% בתקופת הטיפולים + חודש נוסף',
  },
  {
    href: '/conditions/diabetes',
    icon: Droplets,
    title: 'סוכרת נעורים',
    text: 'בשנה הראשונה למחלה ועד גיל 6 יש זכאות כמעט אוטומטית — ובהמשך לפי איזון ומעקב.',
    stat: '100% עד גיל 6',
  },
]

export function PremiumTracks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8">
      <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="kicker">עילות הזכאות שלנו</p>
        <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
          כל עילות הזכאות של הילד. מקום אחד, בדיקה אחת.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
          שמונה עילות מרכזיות — ולעיתים קרובות הזכאות האמיתית נמצאת דווקא בשילוב ביניהן.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, i) => (
          <Reveal key={track.href} delay={i * 60} className="h-full">
            <Link
              href={track.href}
              className={`card-lift group relative flex h-full flex-col gap-4 rounded-2xl border bg-card p-7 shadow-soft hover:border-gold/50 ${
                track.featured ? 'border-gold/50 ring-1 ring-gold/20' : 'border-border'
              }`}
            >
              {track.featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground shadow-md">
                  הכי מבוקש
                </span>
              )}
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
        <Reveal delay={8 * 60} className="h-full">
          <div className="relative flex h-full flex-col justify-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-[oklch(0.16_0.015_260)] p-7 text-navy-foreground">
            <div className="bg-dots absolute inset-0" aria-hidden="true" />
            <div
              className="absolute -top-20 -left-20 h-52 w-52 rounded-full bg-gold/15 blur-[90px]"
              aria-hidden="true"
            />
            <span className="relative flex h-13 w-13 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
              <PhoneCall className="h-7 w-7 text-gold" aria-hidden="true" />
            </span>
            <h3 className="relative font-serif text-xl leading-snug">לא בטוחים אילו עילות מתאימות לילד?</h3>
            <p className="relative text-sm leading-relaxed text-navy-foreground/80">
              בדיוק בשביל זה אנחנו כאן. שיחת אבחון אחת ממפה את כל העילות הרלוונטיות — חינם וללא התחייבות.
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
