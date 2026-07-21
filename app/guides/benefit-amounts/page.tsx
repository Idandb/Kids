import type { Metadata } from 'next'
import { ServiceHero, StatStrip, Section, CheckList, ServiceCta, ServiceJsonLd } from '@/components/service-page'
import { RelatedLinks } from '@/components/related-links'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'סכומי קצבת ילד נכה 2026 — הטבלה המלאה',
  description:
    'כל סכומי קצבת ילד נכה מעודכנים ל-1.1.2026: מ-1,943 ₪ ב-50% ועד 9,126 ₪ ב-235%, תוספות למונשם ולמעסיק 2 מטפלים, והמכפיל למשפחה עם שני ילדים נכים. בדיקת זכאות חינם.',
  keywords: [
    'סכומי קצבת ילד נכה 2026',
    'טבלת קצבת ילד נכה',
    'כמה זה קצבת ילד נכה',
    'תוספת מונשם ילד נכה',
    'קצבת ילד נכה שני ילדים',
  ],
}

const tiers = [
  { pct: '50%', amount: '1,943 ₪', desc: 'עילות חלקיות: השגחה חלקית, אלרגיה, ADHD (10–18 נק׳), סיוע בתקשורת, כבדות שמיעה' },
  { pct: '100%', amount: '3,820 ₪', desc: 'השגחה מלאה, אוטיזם, חרשות, ליקוי ראייה, טיפולים רפואיים מיוחדים, דאון (91 יום–6)' },
  { pct: '112%', amount: '4,501 ₪', desc: 'דרגת ביניים: 8–9 נקודות תלות, או 2 עילות נפרדות של 100%' },
  { pct: '188%', amount: '7,181 ₪', desc: 'תלות מלאה (10–12 נקודות), או 3 עילות נפרדות של 100%' },
  { pct: '235%', amount: '9,126 ₪', desc: 'תלות מוחלטת במיוחד (13+ נקודות) — הדרגה הגבוהה ביותר' },
]

const additions = [
  { title: 'תוספת לילד מונשם', amount: '10,774 ₪', desc: 'הנשמה רציפה, 16 שעות ביממה לפחות. מי שזכאי גם ל-235% מקבל 188% + התוספת' },
  { title: 'תוספת מעסיק 2 מטפלים', amount: '7,182 ₪', desc: 'כשרופא המוסד קבע צורך ב-2 מטפלים ויש היתר העסקה בפועל. לא ניתן יחד עם 235% או תוספת מונשם' },
  { title: 'ילד השוהה במוסד/פנימייה', amount: '673–1,347 ₪', desc: 'גמלה חלקית בלבד, אלא אם ההורים משלמים לבדם את מלוא ההחזקה — ואז גמלה מלאה' },
]

const multiplier = [
  { base: '50% (1,943 ₪)', combined: '75%', amount: '2,915 ₪ בקירוב' },
  { base: '100% (3,820 ₪)', combined: '150%', amount: '5,730 ₪' },
  { base: '112% (4,501 ₪)', combined: '168%', amount: '6,752 ₪ בקירוב' },
  { base: '188% (7,181 ₪)', combined: '282%', amount: '10,772 ₪ בקירוב' },
]

export default function BenefitAmountsPage() {
  return (
    <main>
      <ServiceJsonLd
        name="סכומי קצבת ילד נכה 2026"
        description="הטבלה המלאה של סכומי קצבת ילד נכה מעודכנים ל-2026, כולל תוספות ומכפיל לשני ילדים נכים במשפחה."
        path="/guides/benefit-amounts"
      />
      <ServiceHero
        badge="מעודכן ל-1.1.2026"
        title={
          <>
            כל סכומי הקצבה,
            <br />
            <span className="gold-gradient-text">בטבלה אחת ברורה</span>
          </>
        }
        subtitle="הקצבה מחושבת כאחוזים מ״קצבת יחיד מלאה״ שסכומה 3,820 ₪ ב-2026. מאז רפורמת הנכות ב-2021, קצבאות ילד נכה צמודות לשכר הממוצע במשק ומתעדכנות כל ינואר — ב-2026 עלו ב-3.4%."
        formTitle="בדיקה: כמה מגיע לילד שלכם — חינם"
      />

      <StatStrip
        stats={[
          { value: '1,943 ₪', label: 'הסכום הנמוך ביותר — דרגת 50%' },
          { value: '9,126 ₪', label: 'הסכום הגבוה ביותר — דרגת 235%' },
          { value: '10,774 ₪', label: 'תוספת נפרדת לילד מונשם' },
          { value: 'פי 1.5', label: 'לכל ילד, במשפחה עם שני ילדים נכים ומעלה' },
        ]}
      />

      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 lg:px-8">
          <Reveal>
            <h2 className="mb-6 font-serif text-2xl leading-tight text-balance md:text-3xl">חמש דרגות הקצבה</h2>
            <div className="overflow-x-auto rounded-2xl border border-border shadow-soft">
              <table className="w-full min-w-[480px] border-collapse text-right text-sm md:text-base">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-4 font-serif font-bold">דרגה</th>
                    <th className="p-4 font-serif font-bold">סכום חודשי (2026)</th>
                    <th className="p-4 font-serif font-bold">מי זכאי בדרך כלל</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((t) => (
                    <tr key={t.pct} className="border-t border-border">
                      <td className="p-4 font-serif text-lg text-gold">{t.pct}</td>
                      <td className="p-4 font-bold">{t.amount}</td>
                      <td className="p-4 text-muted-foreground">{t.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 lg:px-8">
          <Reveal>
            <h2 className="mb-6 font-serif text-2xl leading-tight text-balance md:text-3xl">תוספות לקצבה</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {additions.map((a) => (
                <div key={a.title} className="card-lift flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="font-serif text-lg leading-snug">{a.title}</h3>
                  <p className="font-serif text-2xl text-gold">{a.amount}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 lg:px-8">
          <Reveal>
            <h2 className="mb-3 font-serif text-2xl leading-tight text-balance md:text-3xl">
              משפחה עם שני ילדים נכים ומעלה
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              מכפיל 1.5 על הקצבה שנקבעה לכל ילד — אמור להשתלם אוטומטית, אבל יש פספוסים ויש לבדוק.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border shadow-soft">
              <table className="w-full min-w-[480px] border-collapse text-right text-sm md:text-base">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-4 font-serif font-bold">דרגת הילד</th>
                    <th className="p-4 font-serif font-bold">עם אח מוכר בבית (150%)</th>
                    <th className="p-4 font-serif font-bold">סכום 2026</th>
                  </tr>
                </thead>
                <tbody>
                  {multiplier.map((m) => (
                    <tr key={m.base} className="border-t border-border">
                      <td className="p-4">{m.base}</td>
                      <td className="p-4 font-bold text-gold">{m.combined}</td>
                      <td className="p-4 text-muted-foreground">{m.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <Section title="כללי צבירה — מתי הקצבה עולה יותר ממה שחשבתם" muted>
        <p>
          הכלל הבסיסי: ילד עם כמה בעיות רפואיות מקבל את הקצבה לפי הבעיה המזכה בסכום הגבוה
          ביותר, ולא סכום של כולן יחד. אבל יש שלושה חריגים מיטיבים שכדאי להכיר:
        </p>
        <CheckList
          items={[
            '3 עילות שונות, כל אחת מזכה ב-50% — עולות יחד ל-100%',
            '2 עילות שונות, כל אחת מזכה ב-100% — עולות יחד ל-112% (למשל אוטיזם + השגחה מלאה עצמאית)',
            '3 עילות שונות, כל אחת מזכה ב-100% — עולות יחד ל-188%, ללא צורך בוועדה נוספת',
            'העילות חייבות להיות עצמאיות זו מזו — השגחה שנובעת מאותו ליקוי שכבר נקבעה עליו עילה לא נספרת פעמיים',
          ]}
        />
      </Section>

      <RelatedLinks
        links={[
          {
            href: '/guides/hidden-benefits',
            title: 'הטבות נלוות',
            desc: 'חשמל, מים, ארנונה ונקודות זיכוי — מעבר לקצבה החודשית.',
          },
          {
            href: '/conditions/dependency',
            title: 'תלות והשגחה',
            desc: 'איך מגיעים לדרגות הגבוהות — 112%, 188% ו-235%.',
          },
          {
            href: '/guides/appeal',
            title: 'ערר על החלטה',
            desc: 'הסכום שהתקבל לא תואם לטבלה? כך פותחים בירור.',
          },
        ]}
      />

      <ServiceCta
        heading="רוצים לדעת בדיוק כמה מגיע לילד שלכם?"
        sub="נבדוק את כל העילות הרלוונטיות ונחשב את הדרגה הצפויה. חינם וללא התחייבות."
      />
    </main>
  )
}
