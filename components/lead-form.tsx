'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { trackConversion } from '@/lib/track'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const WHATSAPP_PHONE = '972535455667'
const LEADS_ENDPOINT = 'https://formsubmit.co/ajax/idanddbb@gmail.com'

const topics = [
  'הפרעות קשב וריכוז (ADHD)',
  'אבחנה על הרצף האוטיסטי',
  'תסמונת דאון / כרומוזומלית',
  'עיכוב התפתחותי (עד גיל 3)',
  'תלות והשגחה (מגיל 3)',
  'מחלה כרונית / טיפול רפואי מיוחד',
  'ליקוי שמיעה, ראייה או גפיים',
  'לא בטוח/ה — תבדקו בשבילי',
]

// One topic-specific qualifying question per track; the catch-all topic has none
// and skips straight to the contact-details step.
const qualifiers: Partial<Record<string, { question: string; options: string[] }>> = {
  'הפרעות קשב וריכוז (ADHD)': {
    question: 'מה המצב מול ביטוח לאומי כרגע?',
    options: ['עוד לא הגשנו תביעה', 'הגשנו וממתינים לתשובה', 'הוגשה ונדחתה', 'אושרה ב-50% בלבד'],
  },
  'אבחנה על הרצף האוטיסטי': {
    question: 'מה גיל הילד/ה?',
    options: ['עד גיל 3', '4–9', '10–17', 'קרוב לגיל 18'],
  },
  'תסמונת דאון / כרומוזומלית': {
    question: 'מה גיל הילד/ה?',
    options: ['עד גיל 6 חודשים', '6 חודשים–6', '6–18', 'מעל גיל 18'],
  },
  'עיכוב התפתחותי (עד גיל 3)': {
    question: 'מתי זוהה העיכוב לראשונה?',
    options: ['לפני פחות מחודש', 'לפני 1–3 חודשים', 'לפני 4–6 חודשים', 'לפני יותר מחצי שנה'],
  },
  'תלות והשגחה (מגיל 3)': {
    question: 'מה רמת התלות של הילד/ה בפעולות יומיום?',
    options: ['עזרה חלקית', 'עזרה מלאה ברוב הפעולות', 'כבר מקבלים קצבה ורוצים לבדוק תלות נוספת', 'לא בטוח/ה'],
  },
  'מחלה כרונית / טיפול רפואי מיוחד': {
    question: 'איזה טיפול הילד/ה מקבל/ת?',
    options: ['טיפול אונקולוגי', 'סוכרת נעורים', 'דיאליזה / השתלה / מחלת ריאות', 'טיפול אחר'],
  },
  'ליקוי שמיעה, ראייה או גפיים': {
    question: 'מה סוג הליקוי?',
    options: ['שמיעה', 'ראייה', 'גפיים', 'כמה מהם יחד'],
  },
}

function buildWhatsAppUrl(name: string, phone: string, topic: string, qualifier: string) {
  const context = qualifier ? `${topic} (${qualifier})` : topic
  const message = `שלום, אני ${name} ואשמח לבדיקת זכאות חינם לילד/ה שלי בנושא: ${context}. אפשר לחזור אליי בטלפון ${phone}. תודה!`
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

async function sendLeadEmail(name: string, phone: string, topic: string, qualifier: string) {
  const res = await fetch(LEADS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _subject: `ליד חדש מהאתר — ${topic}`,
      _template: 'table',
      _captcha: 'false',
      שם: name,
      טלפון: phone,
      נושא: topic,
      ...(qualifier ? { 'פרטים נוספים': qualifier } : {}),
    }),
  })
  if (!res.ok) throw new Error(`lead endpoint responded ${res.status}`)
}

type Result = { sent: boolean; waUrl: string } | null

export function LeadForm({
  variant = 'light',
  title = 'בדיקת זכאות חינם לילד/ה שלכם — כמה שאלות קצרות ומקבלים תשובה',
}: {
  variant?: 'light' | 'dark'
  title?: string
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [topic, setTopic] = useState('')
  const [qualifier, setQualifier] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<Result>(null)
  const dark = variant === 'dark'

  const qualifierConfig = qualifiers[topic]
  const totalSteps = topic && !qualifierConfig ? 2 : 3
  const onQualifierStep = step === 2 && !!qualifierConfig
  const onDetailsStep = step === 3 || (step === 2 && !qualifierConfig)

  const inputClass = cn(
    'rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/25',
    dark
      ? 'border-navy-foreground/25 bg-navy-foreground/10 placeholder:text-navy-foreground/50'
      : 'border-input bg-background placeholder:text-muted-foreground',
  )

  if (result) {
    return (
      <div
        className={cn(
          'anim-scale-in flex flex-col items-center gap-3 rounded-2xl p-8 text-center',
          dark ? 'glass-dark text-navy-foreground' : 'glass shadow-lg',
        )}
        role="status"
      >
        <span className="anim-scale-in flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 [animation-delay:120ms]">
          <CheckCircle2 className="h-9 w-9 text-gold" aria-hidden="true" />
        </span>
        <h3 className="font-serif text-xl">
          {result.sent ? 'הפרטים נשלחו בהצלחה!' : 'עוד צעד אחד קטן'}
        </h3>
        <p className={cn('text-sm leading-relaxed', dark ? 'text-navy-foreground/80' : 'text-muted-foreground')}>
          {result.sent
            ? 'מומחה זכויות יחזור אליכם במהירות לבדיקת זכאות ראשונית — חינם וללא כל התחייבות.'
            : 'השליחה באתר לא הושלמה — אבל אפשר לשלוח לנו את הפרטים ישירות בוואטסאפ, בלחיצה אחת:'}
        </p>
        <a
          href={result.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion('whatsapp_click', { source: 'form_success' })}
          className={cn(
            'mt-1 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5',
            result.sent
              ? 'border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white'
              : 'bg-[#25D366] text-white shadow-lg hover:shadow-xl',
          )}
        >
          <WhatsAppIcon className="h-4 w-4" />
          {result.sent ? 'רוצים תשובה מהירה עוד יותר? כתבו לנו בוואטסאפ' : 'שליחה בוואטסאפ'}
        </a>
      </div>
    )
  }

  return (
    <form
      className={cn(
        'flex flex-col gap-4 rounded-2xl p-6 md:p-8',
        dark
          ? 'glass-dark border border-navy-foreground/10 text-navy-foreground shadow-2xl shadow-navy/40'
          : 'glass border border-border/60 shadow-lg',
      )}
      onSubmit={async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const name = String(data.get('name') ?? '').trim()
        const phone = String(data.get('phone') ?? '').trim()
        if (!name || !phone || !topic || sending) return
        setSending(true)
        const waUrl = buildWhatsAppUrl(name, phone, topic, qualifier)
        try {
          await sendLeadEmail(name, phone, topic, qualifier)
          trackConversion('generate_lead', { method: 'email', topic, qualifier })
          setResult({ sent: true, waUrl })
        } catch {
          // network/blocker failure — hand the visitor to WhatsApp so the lead isn't lost
          setResult({ sent: false, waUrl })
        } finally {
          setSending(false)
        }
      }}
    >
      <h3 className="font-serif text-lg leading-snug text-balance md:text-xl">{title}</h3>

      <div className="flex items-center gap-2" aria-hidden="true">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((i) => (
          <span
            key={i}
            className={cn(
              'h-1 flex-1 rounded-full transition-colors duration-300',
              i <= step ? 'bg-gold' : dark ? 'bg-navy-foreground/20' : 'bg-border',
            )}
          />
        ))}
      </div>
      <p className={cn('-mt-2 text-xs', dark ? 'text-navy-foreground/70' : 'text-muted-foreground')}>
        שלב {step} מתוך {totalSteps} ·{' '}
        {step === 1 ? 'במה נוכל לעזור?' : onQualifierStep ? qualifierConfig!.question : 'איך חוזרים אליכם?'}
      </p>

      {step === 1 && (
        <div className="grid grid-cols-2 gap-2.5">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTopic(t)
                setQualifier('')
                setStep(2)
              }}
              className={cn(
                'rounded-xl border px-3 py-3 text-sm font-medium leading-snug transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold',
                dark
                  ? 'border-navy-foreground/25 bg-navy-foreground/5'
                  : 'border-input bg-background text-foreground',
              )}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {onQualifierStep && (
        <div className="grid grid-cols-2 gap-2.5">
          {qualifierConfig!.options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setQualifier(opt)
                setStep(3)
              }}
              className={cn(
                'rounded-xl border px-3 py-3 text-sm font-medium leading-snug transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold',
                dark
                  ? 'border-navy-foreground/25 bg-navy-foreground/5'
                  : 'border-input bg-background text-foreground',
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {step !== 1 && (
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={cn(
                'rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold',
                dark ? 'text-gold' : 'text-gold',
              )}
            >
              {topic}
            </span>
            {onDetailsStep && qualifier && (
              <span
                className={cn(
                  'rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold',
                  dark ? 'text-gold' : 'text-gold',
                )}
              >
                {qualifier}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setStep((s) => (s === 3 && qualifierConfig ? 2 : 1))}
            className={cn(
              'flex items-center gap-1 text-xs underline-offset-2 hover:underline',
              dark ? 'text-navy-foreground/70' : 'text-muted-foreground',
            )}
          >
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            {step === 3 && qualifierConfig ? 'שינוי תשובה' : 'שינוי נושא'}
          </button>
        </div>
      )}

      {onDetailsStep && (
        <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lead-name" className="text-sm font-medium">
              שם מלא
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="ישראל ישראלי"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="lead-phone" className="text-sm font-medium">
              טלפון נייד
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="050-0000000"
              dir="ltr"
              className={cn(inputClass, 'text-left')}
            />
          </div>

          <label htmlFor="lead-privacy" className="flex items-start gap-2.5 text-xs leading-relaxed">
            <input
              id="lead-privacy"
              name="privacy"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 accent-[oklch(0.56_0.125_163)]"
            />
            <span className={dark ? 'text-navy-foreground/80' : 'text-muted-foreground'}>
              קראתי ואני מאשר/ת את מדיניות הפרטיות ומסכים/ה לקבלת פנייה לצורך בדיקת הזכאות.
            </span>
          </label>

          <button
            type="submit"
            disabled={sending}
            className="group flex items-center justify-center gap-2 btn-gold rounded-full px-6 py-3.5 text-base font-bold text-gold-foreground transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
          >
            <Send
              className={cn(
                'h-5 w-5 transition-transform duration-300 group-hover:scale-110',
                sending && 'animate-pulse',
              )}
              aria-hidden="true"
            />
            {sending ? 'שולחים…' : 'שליחה — בדיקת זכאות חינם'}
          </button>
        </>
      )}

      <p className={cn('text-center text-xs', dark ? 'text-navy-foreground/70' : 'text-muted-foreground')}>
        לא קיבלת? לא שילמת. עובדים על בסיס הצלחה בלבד.
      </p>
    </form>
  )
}
