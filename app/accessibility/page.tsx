import type { Metadata } from 'next'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { AccessibilityIcon } from '@/components/accessibility-icon'

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description:
    'הצהרת הנגישות של אתר מגן זכות: התאמות הנגישות באתר, אמצעי הסיוע הזמינים ופרטי הקשר לפניות בנושא נגישות.',
  robots: { index: true, follow: true },
}

const features = [
  'תפריט נגישות צף הזמין בכל עמודי האתר: הגדלת טקסט, ניגודיות גבוהה, גווני אפור, הדגשת קישורים ועצירת אנימציות',
  'ניווט מלא באמצעות מקלדת בכל רכיבי האתר, כולל התפריט הראשי והטפסים',
  'תמיכה בקוראי מסך: מבנה כותרות תקין, תיאורי טקסט חלופיים לתמונות ותוויות ARIA',
  'כיבוד העדפת המערכת לצמצום תנועה (prefers-reduced-motion) — כל האנימציות מבוטלות אוטומטית',
  'ניגודיות צבעים העומדת בדרישות התקן בטקסטים ובאלמנטים אינטראקטיביים',
  'טפסים נגישים עם תוויות ברורות, הודעות סטטוס ותמיכה במילוי אוטומטי',
  'האתר מותאם לגלישה בכל גודל מסך ובהגדלת תצוגה של עד 200%',
]

export default function AccessibilityPage() {
  return (
    <main>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-4xl flex-col gap-5 px-4 py-14 md:py-20 lg:px-8">
          <p className="anim-fade-up flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            <AccessibilityIcon className="h-4 w-4" aria-hidden="true" />
            נגישות לכולם
          </p>
          <h1 className="anim-fade-up font-serif text-3xl leading-tight [animation-delay:100ms] md:text-5xl">
            הצהרת נגישות
          </h1>
          <p className="anim-fade-up max-w-2xl text-lg leading-relaxed text-navy-foreground/85 [animation-delay:200ms]">
            אתר מגן זכות נועד לשרת בדיוק את מי שזקוק לנגישות יותר מכולם — אנשים המתמודדים
            עם מצבים רפואיים ומוגבלויות. לכן הנגישות אצלנו היא לא סעיף בחוק, אלא לב השירות.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-12 md:py-16 lg:px-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">מחויבות לנגישות</h2>
          <p className="leading-relaxed text-muted-foreground">
            אנו פועלים להנגשת האתר בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות
            לשירות), התשע&quot;ג-2013, ולתקן הישראלי ת&quot;י 5568 המבוסס על הנחיות הנגישות הבינלאומיות
            WCAG 2.0 ברמה AA. האתר נבדק ומתוחזק באופן שוטף כדי לשמור על רמת הנגישות.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">התאמות הנגישות באתר</h2>
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                <span
                  className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-gold"
                  aria-hidden="true"
                />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl md:text-3xl">נתקלתם בבעיה? ספרו לנו</h2>
          <p className="leading-relaxed text-muted-foreground">
            אנו ממשיכים לשפר את נגישות האתר כל העת. אם נתקלתם ברכיב שאינו נגיש או בקושי כלשהו
            בגלישה, נשמח שתפנו אלינו ונטפל בכך בהקדם האפשרי:
          </p>
          <div className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-6 shadow-soft">
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

        <p className="text-sm text-muted-foreground">הצהרת הנגישות עודכנה לאחרונה: יולי 2026.</p>
      </section>
    </main>
  )
}
