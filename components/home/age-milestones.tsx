import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'

const milestones = [
  { age: '91 יום', text: 'תחילת הזכאות ברוב העילות. דאון, שמיעה וראייה — כבר מלידה.' },
  { age: 'גיל 3', text: 'עילת עיכוב התפתחותי פוקעת. חובה להגיש תביעת תלות חדשה — לא ממשיך אוטומטית.' },
  { age: 'גיל 6', text: 'דאון ומוגבלות שכלית נבחנים מחדש לפי תפקוד בפועל, לא לפי האבחנה בלבד.' },
  { age: 'גיל 10', text: 'סף הגיל לעילת אלרגיה, ולרוב מועד חידוש אבחון אוטיזם שנקבע לפני גיל 3.' },
  { age: 'גיל 14', text: 'זכאות ADHD הופכת קבועה. עד לגיל הזה נדרש חידוש אבחון כל שנתיים.' },
  { age: '18 ו-3 חוד׳', text: 'הקצבה מסתיימת. יש להתחיל תביעת נכות כללית כבר בגיל 18 בדיוק.' },
]

export function AgeMilestones() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8">
      <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="kicker">המועדים שאסור לפספס</p>
        <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
          כל גיל משנה את הזכאות
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
          בניגוד לרוב הזכויות, כאן לא מספיק להגיש פעם אחת. אלה נקודות הזמן שבהן חובה לבדוק מחדש.
        </p>
      </Reveal>

      <div className="relative">
        <div
          className="absolute top-8 hidden h-px w-full bg-gradient-to-l from-transparent via-gold/40 to-transparent lg:block"
          aria-hidden="true"
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {milestones.map((m, i) => (
            <li key={m.age} className="h-full">
              <Reveal delay={i * 90} className="flex h-full flex-col items-center gap-3 text-center">
                <span
                  className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold/70 text-center font-serif text-sm leading-tight text-navy shadow-lg shadow-gold/25"
                  aria-hidden="true"
                >
                  <CountUp text={m.age} />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
