import { Reveal } from '@/components/reveal'

const steps = [
  {
    num: '01',
    title: 'בדיקת זכאות חינם',
    text: 'שיחה קצרה עם מומחה זכויות: מספרים לנו על הילד — האבחנות, הגיל, התפקוד היומיומי. בסיומה תדעו בדיוק לאילו עילות זכאות הוא מתאים ובאיזה היקף כספי מדובר.',
  },
  {
    num: '02',
    title: 'בניית תיק חסין דחייה',
    text: 'אנחנו אוספים את המסמכים החסרים, ומוודאים שכל מכתב רפואי מנוסח בדיוק לפי הסעיף שהוועדה בודקת — ולא במילים כלליות שמורידות דרגה.',
  },
  {
    num: '03',
    title: 'הגשה לכל העילות במקביל',
    text: 'ילד עם כמה אבחנות זכאי לעיתים לצבור עילות ולעלות דרגה. אנחנו מגישים הכל יחד, בסדר הנכון, ומוודאים שההטבות הנלוות (חשמל, ארנונה, מס) לא נשארות על הנייר.',
  },
  {
    num: '04',
    title: 'הכנה וליווי לוועדה',
    text: 'לפני הוועדה תעברו הכנה מפורטת: מה שואלים, איך עונים, מה להביא. אתם ​והילד מגיעים רגועים ומוכנים — ואנחנו איתכם עד שהכסף בחשבון.',
  },
]

export function Process() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8">
        <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="kicker">
            הדרך שלנו איתכם
          </p>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
            אנחנו מובילים. אתם מקבלים.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            ארבעה שלבים ברורים, בניהול מלא שלנו — בזמן שאתם מתפנים לדבר החשוב באמת: הילד שלכם.
          </p>
        </Reveal>

        <div className="relative">
          <div
            className="absolute top-[4.25rem] hidden h-px w-full bg-gradient-to-l from-transparent via-gold/40 to-transparent xl:block"
            aria-hidden="true"
          />
          <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.num} className="h-full">
                <Reveal delay={i * 110} className="h-full">
                  <div className="card-lift relative flex h-full flex-col gap-4 rounded-2xl bg-card p-7 shadow-elevated">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold/70 font-serif text-xl text-navy shadow-lg shadow-gold/25"
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>
                    <h3 className="font-serif text-xl">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
