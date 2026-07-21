import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { JsonLd } from '@/components/json-ld'

const faqs = [
  {
    q: 'כמה עולה השירות שלכם?',
    a: 'אנחנו עובדים על בסיס הצלחה בלבד: לא קיבלתם קצבה — לא שילמתם שקל. בדיקת הזכאות הראשונית לילד חינם וללא התחייבות, ושכר הטרחה נגבה רק אחרי שהקצבה מתקבלת בפועל, בכפוף למגבלות שכר הטרחה הקבועות בחוק.',
  },
  {
    q: 'כמה זמן לוקח התהליך?',
    a: 'תלוי בעילה. חלק מהעילות (שמיעה, ראייה, אונקולוגיה) מאושרות לרוב תוך חודשים ספורים על סמך מסמכים בלבד, בלי זימון לוועדה. תביעות שדורשות ועדה רפואית נמשכות בדרך כלל בין שלושה לתשעה חודשים. אנחנו מלווים בכל שלב ודואגים שהתיק לא "יירדם" באף שולחן.',
  },
  {
    q: 'אנחנו משתכרים טוב, והילד לומד בכיתה רגילה — זה פוסל אותנו?',
    a: 'לא. הקצבה לא תלויה בהכנסת ההורים בכלל, וגם לא במסגרת החינוכית. ילד שמשולב בכיתה רגילה עם ליווי, או שלומד במסגרת מיוחדת — שניהם יכולים להיות זכאים, לפי התפקוד והצרכים בפועל ולא לפי המסגרת.',
  },
  {
    q: 'כבר הגשנו לבד וקיבלנו רק 50%, או שנדחינו. יש טעם לנסות שוב?',
    a: 'כן, וזה קורה הרבה. דחייה או אישור חלקי אינם סוף הדרך — אפשר להגיש ערר, בקשה לבדיקה מחדש, ובאוטיזם אפילו בקשת כינוס ועדה תוך 45 יום אם לא זומנתם. תיק שנבנה מחדש עם ניסוח מדויק משנה לא פעם את התוצאה מקצה לקצה. נבדוק את התיק הקודם חינם ונגיד ביושר אם יש בסיס.',
  },
  {
    q: 'יש שירות חינמי של המדינה ("יד מכוונת") — למה בכלל לפנות אליכם?',
    a: '"יד מכוונת" הוא שירות חינמי וראוי, אך הוא מוגבל להכנה לוועדה הרפואית בלבד. ליווי מלא בוחן את כל התמונה במקביל: מיפוי כל העילות שהילד זכאי להן, ניסוח נכון של המסמכים מראש, ההטבות הנלוות (חשמל, ארנונה, נקודות זיכוי) וגם עררים אם התביעה נדחית. ההבדל בין עילה בודדת לתמונה מלאה יכול להסתכם במאות אלפי שקלים לאורך שנות הילדות — והתשלום אצלנו נגבה רק בהצלחה.',
  },
  {
    q: 'איך מתחילים?',
    a: 'משאירים פרטים בטופס או מחייגים 053-5455667. מומחה זכויות חוזר אליכם עוד היום לשיחה קצרה על הילד, ובסיומה תדעו בדיוק לאילו עילות הוא זכאי ובאיזה היקף כספי מדובר — בלי שום התחייבות.',
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
    <section className="relative mx-auto max-w-4xl overflow-hidden px-4 py-20 md:py-28 lg:px-8">
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/5 blur-[140px]"
        aria-hidden="true"
      />
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
