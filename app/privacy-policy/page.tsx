import type { Metadata } from 'next'
import { Mail, MessageCircle, Phone, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות',
  description:
    'מדיניות הפרטיות של אתר מגן זכות: אילו נתונים נאספים בטופס בדיקת הזכאות, למה הם משמשים, עם מי משותפים וכיצד ניתן לפנות בנושאי פרטיות.',
  robots: { index: true, follow: true },
}

const collected = [
  'שם מלא ומספר טלפון, כפי שהוזנו בטופס בדיקת הזכאות',
  'פרטים כלליים על המצב הרפואי/תפקודי של הילד/ה (למשל עילת הזכאות הרלוונטית וגיל) — לצורך התאמת הליווי',
  'נתוני שימוש בסיסיים באתר (עמודים שנצפו, מכשיר, אזור גאוגרפי כללי) באמצעות כלי אנליטיקס',
]

const usage = [
  'יצירת קשר טלפוני/בהודעה לצורך בדיקת זכאות חינם וללא התחייבות',
  'התאמת הליווי המקצועי לעילת הזכאות והשלב המתאים מול ביטוח לאומי',
  'שיפור האתר והשירות, ומדידת יעילות של פעילות שיווקית (למשל קמפיינים ממומנים)',
]

const sharing = [
  'הצוות המקצועי של מגן זכות בלבד — לצורך מתן השירות עצמו',
  'שירותי צד ג׳ טכניים המשמשים להעברת הפנייה אלינו (כגון שירות משלוח טפסים) ולניתוח שימוש באתר (Vercel Analytics, ובעתיד ייתכן גם Google Ads/GA4 למדידת יעילות פרסום)',
  'המידע אינו נמכר ואינו משותף עם צדדים שלישיים למטרות שיווק חיצוניות',
]

const rights = [
  'לעיין במידע שנשמר עליכם ולבקש תיקון פרטים שגויים',
  'לבקש מחיקה מלאה של המידע בכל שלב — פנייה טלפונית או בהודעה מספיקה',
  'להתנגד לשימוש במידע לצורך פניות נוספות מעבר לבדיקת הזכאות המקורית',
]

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            פרטיות ואבטחת מידע
          </p>
          <h1 className="anim-fade-up font-serif text-3xl leading-tight [animation-delay:100ms] md:text-5xl">
            מדיניות הפרטיות שלנו
          </h1>
          <p className="anim-fade-up max-w-2xl text-lg leading-relaxed text-navy-foreground/85 [animation-delay:200ms]">
            אתם משתפים אותנו בפרטים רגישים על הילד שלכם כדי שנוכל לעזור. המסמך הזה מסביר בשפה
            פשוטה אילו נתונים אנחנו אוספים, למה, ומה הזכויות שלכם לגביהם.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-16 md:py-24 lg:px-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">איזה מידע אנחנו אוספים</h2>
          <ul className="flex flex-col gap-3">
            {collected.map((f) => (
              <li key={f} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">למה אנחנו משתמשים במידע</h2>
          <ul className="flex flex-col gap-3">
            {usage.map((f) => (
              <li key={f} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">עם מי המידע משותף</h2>
          <ul className="flex flex-col gap-3">
            {sharing.map((f) => (
              <li key={f} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">כמה זמן נשמר המידע</h2>
          <p className="leading-relaxed text-muted-foreground">
            אנו שומרים את המידע רק לפרק הזמן הדרוש למתן השירות או לעמידה בדרישות הדין, ולא מעבר
            לכך. תוכלו לבקש מחיקה מוקדמת יותר בכל עת, כמפורט מטה.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">הזכויות שלכם</h2>
          <ul className="flex flex-col gap-3">
            {rights.map((f) => (
              <li key={f} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">עוגיות וכלי אנליטיקס</h2>
          <p className="leading-relaxed text-muted-foreground">
            האתר משתמש בכלי אנליטיקס בסיסיים כדי להבין אילו עמודים שימושיים ולשפר את החוויה, וייתכן
            שבעתיד יופעל גם תג מדידה לפעילות פרסומית (כגון Google Ads). כלים אלו אינם אוספים מידע
            מזהה מעבר לנדרש למדידת שימוש כללי באתר.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">נתקלתם בשאלה? פנו אלינו</h2>
          <p className="leading-relaxed text-muted-foreground">
            לכל שאלה או בקשה בנושא פרטיות המידע שלכם, אפשר לפנות אלינו ישירות:
          </p>
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

        <p className="text-sm text-muted-foreground">מדיניות הפרטיות עודכנה לאחרונה: יולי 2026.</p>
      </section>
    </main>
  )
}
