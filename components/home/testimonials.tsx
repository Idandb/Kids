import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'משפחת לוי, ראשון לציון',
    amount: 'מ-50% ל-100% + השלמה רטרואקטיבית',
    text: 'לבן שלנו עם ADHD אושרה קצבה של 50% בלבד. הצוות במגן זכויות פנה לרופא המטפל וביקש מכתב חדש, מנוסח בדיוק לפי טבלת הניקוד של ביטוח לאומי. תוך חודשיים הקצבה עלתה ל-100%, כולל השלמה רטרואקטיבית. גם קיבלנו נקודות זיכוי במס ששני ההורים לא ידעו שמגיעות להם.',
  },
  {
    name: 'מיכל ר., אמא לילדה על הרצף האוטיסטי',
    amount: 'מעל 40,000 ₪ תשלום רטרואקטיבי',
    text: 'הגשנו לבד וחיכינו חצי שנה — קיבלנו רק אישור חלקי בלי שהבנו למה. במגן זכויות בנו מחדש את התיק עם שני אבחונים מלאים, דאגו לרטרו המלא של 12 חודשים ולנקודות הזיכוי של שנינו בנפרד. קיבלנו יותר מ-40 אלף שקל בבת אחת.',
  },
  {
    name: 'משפחת אברהם, חדרה',
    amount: 'מכפיל 1.5 לשני הילדים + הנחת חשמל',
    text: 'יש לנו שני ילדים על הרצף. לא ידענו שמגיע לנו מכפיל 1.5 על הקצבה של כל ילד, וגם לא על הנחת החשמל שנפתחת כשיש עילת תלות. הצוות בדק הכל בבת אחת ותיקן את הפירוט מול ביטוח לאומי — בלי שנצטרך לרדוף אחרי אף אחד.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-secondary via-gold/8 to-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8">
        <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="kicker">ההצלחות שלנו</p>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
            הסיפורים שמאחורי המספרים
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="h-full">
              <figure className="card-lift flex h-full flex-col gap-4 rounded-2xl border border-transparent bg-card p-7 shadow-soft hover:border-gold/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold/5 ring-1 ring-gold/20">
                  <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
                </span>
                <div className="flex gap-0.5" aria-label="דירוג 5 כוכבים">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground">{t.text}</blockquote>
                <figcaption className="mt-auto border-t border-border pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm font-bold text-gold">{t.amount}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
