import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Baby, Brain, Dna, Droplets, Ear, HeartHandshake, HeartPulse, Puzzle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'כל עילות הזכאות לקצבת ילד נכה',
  description:
    'מדריך לכל עילות הזכאות לקצבת ילד נכה: הפרעות קשב וריכוז, אוטיזם, תסמונת דאון, עיכוב התפתחותי, תלות והשגחה, ליקויי שמיעה וראייה, מחלות כרוניות ועוד. בדיקת זכאות חינם.',
  keywords: ['עילות זכאות ילד נכה', 'מי זכאי לקצבת ילד נכה', 'מחלות וליקויים קצבת ילד נכה'],
}

const conditions = [
  {
    href: '/conditions/adhd',
    icon: Brain,
    title: 'הפרעות קשב וריכוז (ADHD)',
    text: 'טבלת ניקוד ברורה קובעת את הדרגה — 50% או 100%.',
    featured: true,
  },
  {
    href: '/conditions/autism',
    icon: Puzzle,
    title: 'ילדים על הרצף האוטיסטי',
    text: '100% קבוע, ללא קשר לרמת התפקוד.',
  },
  {
    href: '/conditions/down-syndrome',
    icon: Dna,
    title: 'תסמונת דאון וכרומוזומליות',
    text: 'מדרגות ברורות לפי גיל, כמעט בלי ועדה.',
  },
  {
    href: '/conditions/developmental-delay',
    icon: Baby,
    title: 'עיכוב התפתחותי',
    text: 'עד גיל 3. רטרו מוגבל ל-6 חודשים בלבד.',
  },
  {
    href: '/conditions/dependency',
    icon: HeartHandshake,
    title: 'תלות והשגחה',
    text: 'מגיל 3, עד 235% — לפי רמת התלות היומיומית.',
  },
  {
    href: '/conditions/hearing-vision',
    icon: Ear,
    title: 'ליקויי שמיעה, ראייה וגפיים',
    text: 'לרוב אישור מהיר, בלי זימון לוועדה.',
  },
  {
    href: '/conditions/cancer',
    icon: HeartPulse,
    title: 'ילדים במחלה אונקולוגית',
    text: '235% בתקופת הטיפולים — הדרגה הגבוהה ביותר.',
  },
  {
    href: '/conditions/diabetes',
    icon: Droplets,
    title: 'סוכרת נעורים',
    text: '100% עד גיל 6, ואפשר לצבור עוד עילה.',
  },
]

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'כל עילות הזכאות לקצבת ילד נכה',
  url: 'https://medical-rights-agency.vercel.app/conditions',
}

export default function ConditionsIndexPage() {
  return (
    <main>
      <JsonLd data={pageSchema} />
      <section className="relative overflow-hidden bg-background">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center md:py-24 lg:px-8">
          <Reveal className="flex flex-col items-center gap-4">
            <p className="kicker">כל עילות הזכאות</p>
            <h1 className="font-serif text-3xl leading-tight text-balance md:text-5xl">
              לאיזו עילה הילד שלכם מתאים?
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              התקנות לא בנויות לפי שם המחלה אלא לפי עומס טיפולי. גם אם לא מצאתם אבחנה מדויקת ברשימה —
              יש סיכוי טוב שהילד עדיין זכאי. שיחה קצרה איתנו תבהיר את זה תוך דקות.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((c, i) => (
            <Reveal key={c.href} delay={i * 60} className="relative h-full">
              {c.featured && (
                <span className="absolute -top-3 right-6 z-10 whitespace-nowrap rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground shadow-md">
                  הכי מבוקש
                </span>
              )}
              <Link
                href={c.href}
                className={`card-lift group relative flex h-full flex-col gap-3 rounded-2xl border bg-card p-6 shadow-soft hover:border-gold/50 ${
                  c.featured ? 'border-gold/50 ring-1 ring-gold/20' : 'border-border'
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 ring-1 ring-gold/20">
                  <c.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                </span>
                <h2 className="font-serif text-lg leading-snug transition-colors group-hover:text-accent">
                  {c.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-semibold text-foreground">
                  לפרטים
                  <ArrowLeft
                    className="h-4 w-4 text-gold transition-transform duration-300 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        heading="לא מצאתם את המצב הרפואי המדויק?"
        sub="שיחה קצרה איתנו תבהיר תוך דקות אם הילד זכאי, ולאיזו עילה. חינם וללא התחייבות."
      />
    </main>
  )
}
