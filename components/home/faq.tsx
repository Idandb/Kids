import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { JsonLd } from '@/components/json-ld'

const faqs = [
  {
    q: 'כמה עולה השירות שלכם?',
    a: 'אנחנו עובדים על בסיס הצלחה בלבד: לא קיבלתם כסף — לא שילמתם שקל. בדיקת הזכאות הראשונית חינם וללא התחייבות, ושכר הטרחה נגבה רק לאחר שהזכויות מתקבלות בפועל, בכפוף למגבלות הקבועות בחוק.',
  },
  {
    q: 'כמה זמן לוקח התהליך?',
    a: 'תלוי במסלול: החזרי מס מתקבלים לרוב תוך מספר חודשים מהגשה מסודרת, ותביעות מול ביטוח לאומי נמשכות בדרך כלל בין שלושה לתשעה חודשים, כולל ועדות. אנחנו מלווים אתכם בכל שלב ודואגים שהתיק לא "יירדם" באף שולחן.',
  },
  {
    q: 'אני עובד ומשתכר יפה — זה לא פוסל אותי?',
    a: 'ממש לא, ולפעמים להפך: פטור ממס הכנסה לפי סעיף 9(5) שווה יותר דווקא למשתכרים גבוה, וקצבאות מסוימות (כמו נכות מעבודה) אינן תלויות בהמשך העבודה. חלק גדול מהלקוחות שלנו עובדים במשרה מלאה.',
  },
  {
    q: 'כבר הגשתי לבד ונדחיתי. יש טעם לנסות שוב?',
    a: 'כן. דחייה אינה סוף הדרך — ברוב המקרים אפשר להגיש ערר, תביעה חוזרת או החמרת מצב. תיק שנבנה מחדש עם תיעוד נכון והכנה לוועדה משנה לא פעם את התוצאה מקצה לקצה. נבדוק את התיק הקודם חינם ונגיד ביושר אם יש בסיס.',
  },
  {
    q: 'יש סיוע חינמי של המדינה ("יד מכוונת") — למה בכלל לפנות אליכם?',
    a: 'שירות "יד מכוונת" הוא שירות חינמי וראוי, אך הוא מוגבל לסיוע בהכנה לוועדות רפואיות של ביטוח לאומי בלבד. ליווי מקצועי מלא בוחן את התמונה כולה במקביל: פטור ממס הכנסה מול רשות המסים, אובדן כושר עבודה מול חברות הביטוח, פנסיית נכות מקרן הפנסיה — וגם עררים וערעורים אם התביעה נדחית. ההבדל בין מסלול אחד לתמונה מלאה יכול להסתכם במאות אלפי שקלים, והתשלום אצלנו נגבה רק בהצלחה.',
  },
  {
    q: 'איך מתחילים?',
    a: 'משאירים פרטים בטופס או מחייגים 053-5455667. מומחה זכויות חוזר אליכם עוד היום לשיחת אבחון קצרה, ובסיומה תדעו בדיוק אילו זכויות רלוונטיות ובאיזה היקף כספי מדובר — בלי שום התחייבות.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export function Faq() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 md:py-28 lg:px-8">
      <JsonLd data={faqSchema} />
      <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="kicker">שאלות נפוצות</p>
        <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
          כל מה שרציתם לשאול — לפני שמרימים טלפון
        </h2>
      </Reveal>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <Reveal key={faq.q} delay={i * 70}>
            <details className="group rounded-2xl border border-border bg-card shadow-soft transition-colors open:border-gold/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-lg leading-snug">{faq.q}</h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/25 transition-transform duration-300 group-open:rotate-45">
                  <Plus className="h-5 w-5 text-gold" aria-hidden="true" />
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
