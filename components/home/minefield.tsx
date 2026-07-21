import Image from 'next/image'
import { FileWarning, Gavel, PercentCircle, ScrollText } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const risks = [
  {
    icon: PercentCircle,
    title: 'רוב התביעות שמוגשות לבד מקבלות פחות ממה שמגיע',
    text: 'ביטוח לאומי בוחן כל בקשה לפי סעיפי ליקוי וטבלאות ניקוד יבשות ונוקשות. בקשה שלא מנוסחת בדיוק לפי הסעיפים — מקבלת 50% במקום 100%, או נדחית לגמרי.',
  },
  {
    icon: FileWarning,
    title: 'ניסוח לא מדויק = דרגה נמוכה יותר',
    text: 'מכתב מהרופא שכתוב "משתפר עם השגחה חלקית" במקום "זקוק לנוכחות צמודה" יכול להוריד את הילד מ-100% ל-50%, גם כשהמצב בפועל זהה.',
  },
  {
    icon: ScrollText,
    title: 'הוועדה בודקת תפקוד יומיומי, לא רק אבחנה',
    text: 'ילדים לא תמיד עונים כמו שהיינו רוצים בוועדה. אנחנו מכינים אתכם ואת הילד מראש — מה שואלים, איך עונים, אילו מסמכים מציגים.',
  },
  {
    icon: Gavel,
    title: 'מועדים נוקשים שלא חוזרים',
    text: 'בעיכוב התפתחותי יש רק 6 חודשי רטרו, ובעילות אחרות עד 12 חודשים. כל חודש של דיחוי בהגשה הוא כסף שנמחק ולא יחזור.',
  },
]

export function Minefield() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="anim-float absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
        <Reveal className="flex flex-col gap-6">
          <p className="kicker w-fit">למה לא כדאי לעבור את זה לבד</p>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
            הביורוקרטיה בנויה כך שתפספסו.
            <br />
            <span className="gold-gradient-text">אנחנו כאן כדי שלא.</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            התביעה הזו היא לא &quot;מילוי טופס&quot;. כל אבחנה צריכה להיות ממופה לסעיף הנכון,
            וכל מכתב רפואי צריך להיות מנוסח במדויק לפי מה שהוועדה בודקת. אנחנו בונים לכם תיק
            שעונה אחד לאחד על הדרישות — כדי שהילד יקבל את הדרגה שבאמת מגיעה לו.
          </p>
          <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-elevated">
            <Image
              src="/images/consultation.png"
              alt="מומחה מלווה הורים בתהליך מיצוי הזכויות לילד"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <span className="font-serif text-2xl text-gold">96%</span>
              <span className="text-xs font-semibold leading-tight text-foreground">
                שביעות רצון
                <br />
                מעל 500 משפחות
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {risks.map((risk, i) => (
            <Reveal key={risk.title} delay={i * 90} className="h-full">
              <article className="card-lift flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-gold/40">
                <span className="flex h-13 w-13 items-center justify-center rounded-full border-2 border-gold/35 bg-transparent">
                  <risk.icon className="h-7 w-7 text-gold" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-lg leading-snug">{risk.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{risk.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
