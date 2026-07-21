import { CheckCircle2 } from 'lucide-react'

export function EligibilityMockup() {
  return (
    <div
      aria-hidden="true"
      className="anim-float pointer-events-none absolute right-4 bottom-full z-0 mb-6 hidden w-64 rotate-[-6deg] rounded-2xl border border-border bg-card p-4 shadow-elevated [animation-delay:1.2s] lg:block xl:right-8 xl:w-72"
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/20" />
        <span className="mr-auto h-2 w-16 rounded-full bg-muted" />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <div className="h-2.5 w-full rounded-full bg-muted" />
        <div className="h-2.5 w-4/5 rounded-full bg-muted" />
        <div className="h-2.5 w-3/5 rounded-full bg-muted" />
      </div>
      <div className="flex items-center gap-2 rounded-xl bg-gold/10 px-3 py-2.5 ring-1 ring-gold/25">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="font-serif text-sm leading-none text-foreground">100% זכאות</p>
          <p className="text-xs text-muted-foreground">3,820 ₪ לחודש</p>
        </div>
      </div>
    </div>
  )
}
