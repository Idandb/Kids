import type { Metadata } from 'next'
import { Mail, MessageCircle, Phone, ScrollText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'תקנון האתר',
  description: 'תנאי השימוש באתר מגן זכות: אופי השירות, אחריות, קניין רוחני ותנאי שכר טרחה.',
  robots: { index: true, follow: true },
}

const usageTerms = [
  'יש למסור בטופסי האתר פרטים נכונים ומדויקים בלבד',
  'אין לעשות באתר שימוש למטרה בלתי חוקית או כזו שעלולה לפגוע בפעילותו התקינה',
  'כל זכויות היוצרים בתוכן האתר, בעיצובו ובלוגו שייכות למגן זכות בע"מ, ואין להעתיקם ללא אישור מראש',
]

export default function TermsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="bg-dots absolute inset-0" aria-hidden="true" />
        <div
          className="anim-float absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-5 px-4 py-16 md:py-24 lg:px-8">
          <p className="anim-fade-up flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            <ScrollText className="h-4 w-4" aria-hidden="true" />
            תנאי שימוש
          </p>
          <h1 className="anim-fade-up font-serif text-3xl leading-tight [animation-delay:100ms] md:text-5xl">
            תקנון האתר
          </h1>
          <p className="anim-fade-up max-w-2xl text-lg leading-relaxed text-navy-foreground/85 [animation-delay:200ms]">
            שימוש באתר מגן זכות כפוף לתנאים המפורטים כאן. אנא קראו אותם לפני שאתם משאירים פרטים
            או פונים אלינו.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-16 md:py-24 lg:px-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">השירות שאנחנו מציעים</h2>
          <p className="leading-relaxed text-muted-foreground">
            מגן זכות מעניקה שירותי ליווי וסיוע מקצועי להורים במיצוי זכויות ילדים עם מוגבלות מול
            המוסד לביטוח לאומי ורשות המסים, לרבות קצבת ילד נכה, הטבות נלוות והפרעות קשב וריכוז.
            האתר משמש ליצירת קשר ראשוני ולבדיקת זכאות בלבד. המידע הכללי המוצג באתר אינו מהווה
            ייעוץ משפטי, רפואי או ייעוץ מס פרטני, ואין להסתמך עליו כתחליף לבדיקה מקצועית של נסיבות
            המקרה הפרטני.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">תנאי שימוש באתר</h2>
          <ul className="flex flex-col gap-3">
            {usageTerms.map((t) => (
              <li key={t} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">שכר טרחה</h2>
          <p className="leading-relaxed text-muted-foreground">
            שכר הטרחה עבור הליווי המקצועי נגבה על בסיס הצלחה בלבד, בכפוף ובהתאם למגבלות שכר
            הטרחה הקבועות בחוק. בדיקת הזכאות הראשונית ניתנת ללא עלות וללא כל התחייבות.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">הגבלת אחריות</h2>
          <p className="leading-relaxed text-muted-foreground">
            הסכומים והנתונים המוצגים באתר מעודכנים למועד פרסומם וכפופים לשינויים בהתאם להוראות
            הדין. תוצאות כל מקרה תלויות בנסיבותיו הפרטניות, ואין בתוכן האתר משום הבטחה לתוצאה
            כלשהי.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">שינויים בתקנון</h2>
          <p className="leading-relaxed text-muted-foreground">
            אנו רשאים לעדכן תקנון זה מעת לעת. הנוסח המחייב הוא הנוסח המפורסם באתר במועד השימוש.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">יצירת קשר</h2>
          <p className="leading-relaxed text-muted-foreground">לכל שאלה בנוגע לתקנון, ניתן לפנות אלינו:</p>
          <div className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-6 shadow-elevated">
            <a
              href="tel:0535455667"
              className="flex w-fit items-center gap-2 font-semibold text-gold transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span dir="ltr">053-5455667</span>
            </a>
            <a
              href="https://wa.me/972535455667"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 font-semibold text-gold transition-colors hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>
                וואטסאפ: <span dir="ltr">053-5455667</span>
              </span>
            </a>
            <a
              href="mailto:info@magen-zchuyot.co.il"
              className="flex w-fit items-center gap-2 font-semibold text-gold transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              info@magen-zchuyot.co.il
            </a>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">התקנון עודכן לאחרונה: יולי 2026.</p>
      </section>
    </main>
  )
}
