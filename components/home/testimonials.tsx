import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'יעקב ל., 58, מנכ"ל חברת תוכנה',
    amount: '312,000 ₪ החזר מס רטרואקטיבי',
    text: 'אחרי שאובחנתי עם מחלה אונקולוגית, המשכתי לשלם מס מלא במשך שנתיים כי אף אחד לא אמר לי שמגיע לי פטור. הצוות של מגן זכויות בנה תיק רפואי מדויק, ליווה אותי בוועדה — ותוך ארבעה חודשים קיבלתי החזר של יותר מ-300 אלף שקל. הלוואי שהייתי מגיע אליהם ביום האבחנה.',
  },
  {
    name: 'רונית ש., 51, אחות במערכת הבריאות',
    amount: 'קצבה חודשית לכל החיים',
    text: 'הגשתי לבד תביעת מיקרו-טראומה על פגיעה בגב אחרי 25 שנות עבודה — ונדחיתי. הייתי בטוחה שזה אבוד. במגן זכויות ניסחו את התיק מחדש, קשרו כל אבחנה לסעיף הליקוי הנכון, והכינו אותי לוועדה שאלה-שאלה. התוצאה: 24% נכות וקצבה חודשית קבועה. ההבדל הוא כל החיים שלי.',
  },
  {
    name: 'משפחת אברהמי, בני ברק',
    amount: 'מעל 9,000 ₪ בחודש לאמא',
    text: 'כשאמא שלנו הידרדרה, טבענו בטפסים של ביטוח לאומי וקופת החולים במקביל. הצוות לקח הכל: תביעת הסיעוד, קצבת השירותים המיוחדים והביטוח הפרטי. היום אמא מקבלת מעל 9,000 שקל בחודש, ואנחנו קיבלנו את השקט הנפשי בחזרה. שילמנו רק אחרי שהכסף נכנס.',
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
