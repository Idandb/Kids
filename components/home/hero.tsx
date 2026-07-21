import { Phone, ShieldCheck, Scale, Stethoscope } from 'lucide-react'
import { LeadForm } from '@/components/lead-form'
import { CountUp } from '@/components/count-up'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />
      <div
        className="anim-float absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="anim-float absolute -bottom-48 right-1/4 h-96 w-96 rounded-full bg-gold/8 blur-[130px] [animation-delay:2s]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-10 pb-16 md:pt-14 md:pb-24 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="flex flex-col gap-6">
          <p className="anim-fade-up kicker backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            מעל 500 משפחות מיצו את זכויות ילדיהן בהצלחה
          </p>
          <h1 className="anim-fade-up font-serif text-4xl leading-[1.12] text-balance [animation-delay:100ms] md:text-5xl lg:text-6xl">
            לילד שלכם <span className="gold-gradient-text">מגיע יותר</span>.
            <br />
            אנחנו נדאג <span className="gold-gradient-text">שתקבלו את זה</span>.
          </h1>
          <p className="anim-fade-up max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty [animation-delay:200ms] md:text-xl">
            מיצוי זכויות מלא להורים לילדים עם מוגבלות: קצבת ילד נכה מביטוח לאומי, הפרעות
            קשב וריכוז (ADHD), אוטיזם, תסמונת דאון ועוד. אנחנו בונים את התיק, מלווים אתכם
            לוועדות ודואגים גם להטבות שרוב המשפחות מפספסות — חשמל, ארנונה ומס הכנסה.
          </p>
          <p className="anim-fade-up text-base font-semibold text-foreground [animation-delay:250ms]">
            התשלום? על בסיס הצלחה בלבד. לא קיבלתם — לא שילמתם.
          </p>

          <div className="anim-fade-up flex flex-wrap items-center gap-4 [animation-delay:300ms]">
            <a
              href="tel:0535455667"
              className="btn-gold flex items-center gap-3 rounded-full px-7 py-4 text-lg font-bold text-gold-foreground transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>חייגו עכשיו: <span dir="ltr">053-5455667</span></span>
            </a>
            <a
              href="#lead-form"
              className="flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3.5 text-base font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-accent active:translate-y-0"
            >
              בדיקת זכאות חינם
            </a>
          </div>

          <div className="anim-fade-up flex flex-wrap items-center gap-5 text-sm text-muted-foreground [animation-delay:350ms]">
            <span className="flex items-center gap-1.5">
              <Stethoscope className="h-4 w-4 text-gold" aria-hidden="true" />
              כולל התמחות בהפרעות קשב וריכוז
            </span>
            <span className="flex items-center gap-1.5">
              <Scale className="h-4 w-4 text-gold" aria-hidden="true" />
              ליווי צמוד עד לתוצאה
            </span>
          </div>

          <div className="anim-fade-up mt-4 grid grid-cols-3 gap-4 border-t border-border pt-6 [animation-delay:400ms]">
            <div>
              <p className="font-serif text-2xl text-gold md:text-3xl">
                <CountUp text="9,126 ₪" />
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">קצבה חודשית מרבית לילד</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-gold md:text-3xl">
                <CountUp text="12 חודשים" />
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">תשלום רטרואקטיבי אפשרי</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-gold md:text-3xl">
                <CountUp text="500+" />
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">משפחות שליווינו בהצלחה</p>
            </div>
          </div>
        </div>

        <div id="lead-form" className="anim-scale-in scroll-mt-24 [animation-delay:250ms]">
          <LeadForm title="גלו תוך 24 שעות כמה כסף מגיע לילד שלכם" />
        </div>
      </div>
    </section>
  )
}
