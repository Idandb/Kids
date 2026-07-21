import type { Metadata } from 'next'
import { Clock, Mail, Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { LeadForm } from '@/components/lead-form'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'צור קשר — בדיקת זכאות חינם לילד/ה שלכם',
  description:
    'בדיקת זכאות חינם לקצבת ילד נכה תוך דקות: חייגו 053-5455667, שלחו וואטסאפ או השאירו פרטים ונחזור אליכם עוד היום. ללא התחייבות — תשלום על בסיס הצלחה בלבד.',
  keywords: ['בדיקת זכאות חינם ילד נכה', 'מיצוי זכויות ילד נכה', 'ייעוץ קצבת ילד נכה', 'ADHD בדיקת זכאות'],
}

const contactChannels = [
  {
    icon: Phone,
    title: 'טלפון',
    lines: ['מוקד זכאות ארצי'],
    action: { href: 'tel:0535455667', label: '053-5455667', dir: 'ltr' as const },
  },
  {
    icon: Mail,
    title: 'דוא"ל',
    lines: ['מענה תוך יום עסקים'],
    action: { href: 'mailto:info@magen-zchuyot.co.il', label: 'info@magen-zchuyot.co.il', dir: 'ltr' as const },
  },
  {
    icon: WhatsAppIcon,
    title: 'וואטסאפ',
    lines: ['מענה מהיר בהודעה — בלי להמתין על הקו'],
    action: { href: 'https://wa.me/972535455667', label: '053-5455667', dir: 'ltr' as const },
  },
  {
    icon: Clock,
    title: 'שעות פעילות',
    lines: ['ימים א׳-ה׳: 08:00-19:00', 'יום ו׳: 08:00-13:00'],
  },
]

const nextSteps = [
  {
    num: '01',
    title: 'שיחה קצרה על הילד',
    text: 'מומחה זכויות חוזר אליכם עוד היום, מקשיב ומבין את המצב הרפואי והתפקודי של הילד — בדיסקרטיות מלאה.',
  },
  {
    num: '02',
    title: 'בדיקת זכאות מקיפה — חינם',
    text: 'אנחנו בוחנים את כל עילות הזכאות הרלוונטיות מול ביטוח לאומי ואת ההטבות הנלוות במס הכנסה. אם אין זכאות — נגיד לכם ביושר.',
  },
  {
    num: '03',
    title: 'יוצאים לדרך — בלי סיכון',
    text: 'החלטתם להתקדם? אנחנו מנהלים הכל עבורכם, מהמסמך הראשון ועד שהכסף בחשבון. התשלום — על בסיס הצלחה בלבד.',
  },
]

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-background">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div
          className="anim-float absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div className="flex flex-col gap-5">
            <p className="anim-fade-up kicker w-fit backdrop-blur-sm">נחזור אליכם עוד היום</p>
            <h1 className="anim-fade-up font-serif text-3xl leading-tight text-balance [animation-delay:100ms] md:text-5xl">
              בואו נדבר על הילד שלכם.
              <br />
              <span className="gold-gradient-text">הבדיקה עלינו — ההחלטה שלכם.</span>
            </h1>
            <p className="anim-fade-up max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty [animation-delay:200ms]">
              שיחה אחת יכולה להיות ההבדל בין זכויות שנשארות על הנייר לבין קצבה שנכנסת לחשבון.
              השאירו פרטים או חייגו — ומומחה זכויות יחזור אליכם בהקדם, בדיסקרטיות מלאה
              וללא כל התחייבות.
            </p>
            <a
              href="tel:0535455667"
              className="anim-fade-up flex w-fit items-center gap-3 btn-gold rounded-full px-7 py-4 text-lg font-bold text-gold-foreground transition-all duration-300 [animation-delay:300ms] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>חייגו עכשיו: <span dir="ltr">053-5455667</span></span>
            </a>
          </div>
          <div className="anim-scale-in [animation-delay:250ms]">
            <LeadForm title="השאירו פרטים — ונחזור אליכם עוד היום" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel, i) => (
            <Reveal key={channel.title} delay={i * 90} className="h-full">
              <div className="card-lift flex h-full flex-col gap-3 rounded-2xl bg-card p-6 shadow-elevated ring-1 ring-transparent hover:ring-gold/30">
                <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 ring-1 ring-gold/20">
                  <channel.icon className="h-7 w-7 text-gold" aria-hidden="true" />
                </span>
                <h2 className="font-serif text-lg">{channel.title}</h2>
                <div className="flex flex-col gap-1 text-sm leading-relaxed text-muted-foreground">
                  {channel.action && (
                    <a
                      href={channel.action.href}
                      dir={channel.action.dir}
                      target={channel.action.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-fit text-base font-bold text-gold transition-colors hover:text-accent"
                    >
                      {channel.action.label}
                    </a>
                  )}
                  {channel.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
          <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
            <p className="kicker">
              מה קורה אחרי שפונים?
            </p>
            <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
              שלושה צעדים — ואתם בדרך לזכויות שלכם
            </h2>
          </Reveal>
          <ol className="grid gap-6 md:grid-cols-3">
            {nextSteps.map((step, i) => (
              <li key={step.num} className="h-full">
                <Reveal delay={i * 110} className="h-full">
                  <div className="card-lift flex h-full flex-col gap-4 rounded-2xl bg-card p-7 shadow-elevated">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold/70 font-serif text-xl text-navy"
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
      </section>
    </main>
  )
}
