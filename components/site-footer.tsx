'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { trackConversion } from '@/lib/track'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div
        className="anim-float absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-gold/8 blur-[140px]"
        aria-hidden="true"
      />
      <div className="relative h-px bg-gradient-to-l from-transparent via-gold/50 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-2xl bg-white px-4 py-2.5 shadow-lg shadow-black/20">
            <Image
              src="/images/logo.png"
              alt="מגן זכות — מיצוי זכויות לילד נכה"
              width={704}
              height={333}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-navy-foreground/80">
            צוות מומחי מיצוי זכויות להורים לילדים עם מוגבלות, הפועל בשיתוף רופאים
            מומחים, יועצי מס ועורכי דין — ומוביל עבורכם את מלוא הזכויות מול
            ביטוח לאומי ומס הכנסה, מהתביעה הראשונה ועד שהכסף בחשבון.
          </p>
        </div>

        <nav className="flex flex-col gap-2.5" aria-label="עילות זכאות">
          <h3 className="mb-1 font-serif text-base text-gold">עילות זכאות</h3>
          <Link href="/conditions/adhd" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            הפרעות קשב וריכוז (ADHD)
          </Link>
          <Link href="/conditions/autism" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            ילדים על הרצף האוטיסטי
          </Link>
          <Link href="/conditions/down-syndrome" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            תסמונת דאון וכרומוזומליות
          </Link>
          <Link href="/conditions/developmental-delay" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            עיכוב התפתחותי
          </Link>
          <Link href="/conditions/dependency" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            תלות והשגחה
          </Link>
          <Link href="/conditions/hearing-vision" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            ליקויי שמיעה, ראייה וגפיים
          </Link>
          <Link href="/conditions/cancer" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            ילדים במחלה אונקולוגית
          </Link>
          <Link href="/conditions/diabetes" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            סוכרת נעורים
          </Link>
        </nav>

        <nav className="flex flex-col gap-2.5" aria-label="מדריכים ומידע">
          <h3 className="mb-1 font-serif text-base text-gold">מדריכים ומידע</h3>
          <Link href="/guides/benefit-amounts" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            סכומי הקצבה 2026
          </Link>
          <Link href="/guides/hidden-benefits" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            הטבות נלוות — מעבר לקצבה
          </Link>
          <Link href="/guides/turning-18" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            המעבר לגיל 18
          </Link>
          <Link href="/guides/medical-committee" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            הכנה לוועדה רפואית
          </Link>
          <Link href="/guides/appeal" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            ערר על החלטת ועדה
          </Link>
          <h3 className="mt-3 mb-1 font-serif text-base text-gold">יצירת קשר</h3>
          <a
            href="tel:0535455667"
            onClick={() => trackConversion('phone_click', { source: 'footer' })}
            className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span dir="ltr">053-5455667</span>
          </a>
          <a
            href="https://wa.me/972535455667"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion('whatsapp_click', { source: 'footer' })}
            className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors hover:text-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>
              וואטסאפ: <span dir="ltr">053-5455667</span>
            </span>
          </a>
        </nav>

        <div className="flex flex-col gap-2.5">
          <h3 className="mb-1 font-serif text-base text-gold">יצירת קשר במייל</h3>
          <a
            href="mailto:info@magen-zchuyot.co.il"
            onClick={() => trackConversion('email_click', { source: 'footer' })}
            className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            info@magen-zchuyot.co.il
          </a>
          <h3 className="mt-3 mb-1 font-serif text-base text-gold">שעות פעילות</h3>
          <p className="text-sm text-navy-foreground/80">ימים א&apos;-ה&apos;: 08:00-19:00</p>
          <p className="text-sm text-navy-foreground/80">יום ו&apos;: 08:00-13:00</p>
          <p className="mt-2 text-sm font-semibold text-gold">בדיקת זכאות ראשונית — חינם וללא התחייבות</p>
        </div>
      </div>

      <div className="relative border-t border-navy-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <p className="text-xs leading-relaxed text-navy-foreground/60">
            הבהרה משפטית: חברת מגן זכות מעניקה שירותי סיוע מקצועיים להורים במיצוי זכויות ילדים עם מוגבלות מול
            המוסד לביטוח לאומי ורשות המסים, לרבות קצבת ילד נכה, הטבות נלוות והפרעות קשב וריכוז. המידע המופיע באתר
            זה הינו מידע כללי בלבד, אינו מהווה ייעוץ משפטי, רפואי או ייעוץ מס פרטני, ואין להסתמך עליו כתחליף לבדיקה
            מקצועית של נסיבות המקרה הפרטני. הסכומים והנתונים המוצגים באתר מעודכנים לשנת 2026 וכפופים לשינויים
            בהתאם להוראות הדין. שכר הטרחה נגבה על בסיס הצלחה בלבד, בכפוף ובהתאם למגבלות שכר הטרחה הקבועות בחוק.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-navy-foreground/60">
            <span>© {new Date().getFullYear()} מגן זכות בע&quot;מ. כל הזכויות שמורות.</span>
            <span aria-hidden="true">·</span>
            <Link
              href="/accessibility"
              className="underline-offset-2 transition-colors hover:text-gold hover:underline"
            >
              הצהרת נגישות
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/privacy-policy"
              className="underline-offset-2 transition-colors hover:text-gold hover:underline"
            >
              מדיניות פרטיות
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/terms"
              className="underline-offset-2 transition-colors hover:text-gold hover:underline"
            >
              תקנון האתר
            </Link>
            <span aria-hidden="true">·</span>
            <span>
              נבנה על ידי{' '}
              <a
                href="tel:0526240774"
                className="font-semibold text-navy-foreground/80 transition-colors hover:text-gold"
              >
                עידן בניית אתרים · <span dir="ltr">052-6240774</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
