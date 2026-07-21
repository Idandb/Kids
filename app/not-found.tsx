import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'העמוד לא נמצא',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-background">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="anim-float absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="anim-float absolute -bottom-48 right-1/4 h-96 w-96 rounded-full bg-gold/8 blur-[130px] [animation-delay:2s]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center lg:px-8">
        <p className="kicker">404 — העמוד לא נמצא</p>
        <h1 className="font-serif text-4xl leading-tight text-balance md:text-5xl">
          העמוד הזה <span className="gold-gradient-text">לא נמצא</span>,
          <br />
          אבל הזכויות של הילד שלכם — כן.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          ייתכן שהקישור שגוי או שהעמוד הועבר. חזרו לדף הבית, או דברו איתנו ישירות —
          נשמח לעזור למצוא בדיוק את מה שחיפשתם.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-gold flex items-center gap-2 rounded-full px-7 py-4 text-lg font-bold text-gold-foreground transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            חזרה לדף הבית
          </Link>
          <a
            href="tel:0535455667"
            className="flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3.5 text-base font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-accent active:translate-y-0"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>חייגו: <span dir="ltr">053-5455667</span></span>
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <Link href="/conditions" className="transition-colors hover:text-accent">
            כל עילות הזכאות
          </Link>
          <Link href="/guides/benefit-amounts" className="transition-colors hover:text-accent">
            סכומי הקצבה
          </Link>
          <Link href="/contact" className="transition-colors hover:text-accent">
            צור קשר
          </Link>
        </div>
      </div>
    </main>
  )
}
