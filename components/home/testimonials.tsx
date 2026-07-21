import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'משפחת לוי, ראשון לציון',
    amount: 'מ-50% ל-100% + השלמה רטרואקטיבית',
    text: 'לבן שלנו יש ADHD, ובהתחלה אישרו לו רק 50%. פנינו למגן זכות, והם דאגו למכתב מפורט מהרופא המטפל — כתוב בדיוק לפי הסעיפים שהוועדה בודקת. תוך חודשיים הקצבה עלתה ל-100%, כולל תשלום השלמה על התקופה שכבר עברה. סוף סוף הרגשנו שמישהו יודע לדבר בשפה של ביטוח לאומי.',
  },
  {
    name: 'מיכל ר., אמא לילדה על הרצף האוטיסטי',
    amount: 'מעל 40,000 ₪ תשלום רטרואקטיבי',
    text: 'הגשנו תביעה לבד וחיכינו חצי שנה לתשובה — קיבלנו רק אישור חלקי, בלי שהבנו בכלל למה. במגן זכות בנו מחדש את כל התיק עם שני אבחונים מלאים, ודרשו את מלוא הרטרו שמגיע לנו. בסוף קיבלנו יותר מ-40 אלף שקל בבת אחת, על תקופה שכבר כמעט התייאשנו ממנה.',
  },
  {
    name: 'משפחת אברהם, חדרה',
    amount: 'מכפיל 1.5 + הנחת חשמל + נקודות זיכוי',
    text: 'יש לנו שני ילדים על הרצף, וגילינו שכמעט לא ידענו כלום על מה שבאמת מגיע לנו: מכפיל על הקצבה של שני הילדים ביחד, הנחה בחשבון החשמל, וגם נקודות זיכוי במס שאף אחד לא טרח לספר לנו עליהן. עברנו על הכל בשיחה אחת, ופתאום כל התמונה התבהרה.',
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
              <figure className="card-lift flex h-full flex-col gap-4 rounded-3xl bg-card p-7 shadow-elevated">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold shadow-md shadow-gold/25">
                  <Quote className="h-6 w-6 text-gold-foreground" aria-hidden="true" />
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
