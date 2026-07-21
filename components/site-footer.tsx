import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="h-px bg-gradient-to-l from-transparent via-gold/50 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-2xl bg-white px-4 py-2.5 shadow-lg shadow-black/20">
            <Image
              src="/images/logo.png"
              alt="מגן זכות — מיצוי זכויות רפואיות"
              width={704}
              height={333}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-navy-foreground/80">
            צוות מומחי מיצוי זכויות, הפועל בשיתוף רופאים מומחים, יועצי מס ועורכי דין,
            ומוביל עבורכם את תהליך מיצוי הזכויות מול ביטוח לאומי, מס הכנסה וחברות
            הביטוח — מא&apos; ועד ת&apos;.
          </p>
        </div>

        <nav className="flex flex-col gap-2.5" aria-label="תחומי התמחות">
          <h3 className="mb-1 font-serif text-base text-gold">תחומי התמחות</h3>
          <Link href="/services/tax-exemption" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            פטור ממס הכנסה מטעמי בריאות
          </Link>
          <Link href="/services/work-accidents" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            תאונות עבודה ומיקרו-טראומה
          </Link>
          <Link href="/services/disability" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            נכות כללית וקצבת שירותים מיוחדים
          </Link>
          <Link href="/services/nursing" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            תביעות סיעוד
          </Link>
          <Link href="/services/adhd" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            הפרעות קשב וריכוז (ADHD)
          </Link>
          <h3 className="mt-3 mb-1 font-serif text-base text-gold">מדריכים ומידע</h3>
          <Link href="/guides/medical-committee" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            הכנה לוועדה רפואית
          </Link>
          <Link href="/guides/appeal" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            ערר על החלטת ועדה
          </Link>
          <Link href="/conditions/diabetes" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            זכויות חולי סוכרת
          </Link>
          <Link href="/conditions/cancer" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            זכויות חולי סרטן
          </Link>
          <Link href="/conditions/stroke" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            זכויות אחרי אירוע מוחי
          </Link>
          <Link href="/conditions/autism" className="text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            ילדים על הרצף האוטיסטי
          </Link>
        </nav>

        <div className="flex flex-col gap-2.5">
          <h3 className="mb-1 font-serif text-base text-gold">יצירת קשר</h3>
          <a href="tel:0535455667" className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors hover:text-gold">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span dir="ltr">053-5455667</span>
          </a>
          <a
            href="https://wa.me/972535455667"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors hover:text-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>
              וואטסאפ: <span dir="ltr">053-5455667</span>
            </span>
          </a>
          <a
            href="mailto:info@magen-zchuyot.co.il"
            className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            info@magen-zchuyot.co.il
          </a>
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="mb-1 font-serif text-base text-gold">שעות פעילות</h3>
          <p className="text-sm text-navy-foreground/80">ימים א&apos;-ה&apos;: 08:00-19:00</p>
          <p className="text-sm text-navy-foreground/80">יום ו&apos;: 08:00-13:00</p>
          <p className="mt-2 text-sm font-semibold text-gold">בדיקת זכאות ראשונית — חינם וללא התחייבות</p>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <p className="text-xs leading-relaxed text-navy-foreground/60">
            הבהרה משפטית: חברת מגן זכויות מעניקה שירותי סיוע מקצועיים במיצוי זכויות רפואיות מול המוסד לביטוח לאומי,
            רשות המסים וחברות הביטוח. המידע המופיע באתר זה הינו מידע כללי בלבד, אינו מהווה ייעוץ משפטי, רפואי או
            ייעוץ מס פרטני, ואין להסתמך עליו כתחליף לבדיקה מקצועית של נסיבות המקרה הפרטני. הסכומים והנתונים
            המוצגים באתר מעודכנים לשנת 2026 וכפופים לשינויים בהתאם להוראות הדין. שכר הטרחה נגבה על בסיס הצלחה בלבד,
            בכפוף ובהתאם למגבלות שכר הטרחה הקבועות בחוק. החברה פועלת בהתאם לדין הישראלי ולכללי האתיקה המקצועית.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-navy-foreground/60">
            <span>© {new Date().getFullYear()} מגן זכויות בע&quot;מ. כל הזכויות שמורות.</span>
            <span aria-hidden="true">·</span>
            <Link
              href="/accessibility"
              className="underline-offset-2 transition-colors hover:text-gold hover:underline"
            >
              הצהרת נגישות
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
