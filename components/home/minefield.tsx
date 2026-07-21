import Image from 'next/image'
import { FileWarning, Gavel, PercentCircle, ScrollText } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const risks = [
  {
    icon: PercentCircle,
    title: 'עד 70% מהתביעות העצמאיות נדחות',
    text: 'המוסד לביטוח לאומי פועל לפי סעיפי ליקוי רפואיים יבשים ונוקשים. תביעה שמוגשת ללא התאמה מדויקת לסעיפים — נדחית, גם כשהזכאות אמיתית.',
  },
  {
    icon: FileWarning,
    title: 'מילה אחת שגויה = תביעה אבודה',
    text: 'ניסוח לא מדויק בטופס, מסמך רפואי חסר או אבחנה שלא קושרה לסעיף הליקוי הנכון — עלולים למחוק תביעה בשווי מאות אלפי שקלים.',
  },
  {
    icon: ScrollText,
    title: 'הוועדה הרפואית היא מדע בפני עצמו',
    text: 'הוועדות בוחנות אתכם לפי פרוטוקול קפדני. מי שמגיע לא מוכן — מאבד אחוזי נכות קריטיים. אנחנו מכינים אתכם לכל שאלה, לכל בדיקה, לכל תרחיש.',
  },
  {
    icon: Gavel,
    title: 'התיישנות ומועדים נוקשים',
    text: 'חלק מהזכויות כפופות למועדי הגשה מחייבים. עיכוב של חודשים ספורים עלול לעלות בעשרות אלפי שקלים של רטרואקטיביות שלא תשוב.',
  },
]

export function Minefield() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-[oklch(0.16_0.015_260)] text-navy-foreground">
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div
        className="anim-float absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
        <Reveal className="flex flex-col gap-6">
          <p className="w-fit rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold backdrop-blur-sm">
            למה לא כדאי לעבור את זה לבד
          </p>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
            הביורוקרטיה בנויה כך שתטעו.
            <br />
            <span className="gold-gradient-text">אנחנו בנויים כך שלא.</span>
          </h2>
          <p className="text-lg leading-relaxed text-navy-foreground/80 text-pretty">
            הגשת תביעה לביטוח לאומי אינה &quot;מילוי טופס&quot;. זהו הליך רפואי-משפטי מורכב, שבו כל
            אבחנה חייבת להיות ממופה לסעיף ליקוי ספציפי, כל מסמך חייב להיות ערוך בסדר הנכון,
            וכל מילה נבחנת בזכוכית מגדלת. יחד עם רופאים מומחים שאנחנו עובדים איתם באופן שוטף,
            אנחנו בונים עבורכם תיק &quot;חסין דחייה&quot; — מותאם אחד לאחד לסעיפים היבשים של הוועדות.
          </p>
          <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg shadow-navy/10">
            <Image
              src="/images/consultation.png"
              alt="מומחה מלווה לקוח בתהליך מיצוי הזכויות"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <span className="font-serif text-2xl text-gold">96%</span>
              <span className="text-xs font-semibold leading-tight text-foreground">
                שביעות רצון
                <br />
                מעל 500 תיקים
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {risks.map((risk, i) => (
            <Reveal key={risk.title} delay={i * 90} className="h-full">
              <article className="card-lift glass-dark flex h-full flex-col gap-3 rounded-2xl border border-navy-foreground/10 p-6 hover:border-gold/40">
                <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-gold/25 to-gold/5 ring-1 ring-gold/30">
                  <risk.icon className="h-7 w-7 text-gold" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-lg leading-snug">{risk.title}</h3>
                <p className="text-sm leading-relaxed text-navy-foreground/75">{risk.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
