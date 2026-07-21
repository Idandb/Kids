'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { RotateCcw, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AccessibilityIcon } from '@/components/accessibility-icon'

const STORAGE_KEY = 'magen-a11y-settings'

const toggles = [
  { key: 'acc-text-lg', label: 'הגדלת טקסט' },
  { key: 'acc-text-xl', label: 'הגדלה מקסימלית' },
  { key: 'acc-contrast', label: 'ניגודיות גבוהה' },
  { key: 'acc-grayscale', label: 'גווני אפור' },
  { key: 'acc-links', label: 'הדגשת קישורים' },
  { key: 'acc-no-motion', label: 'עצירת אנימציות' },
] as const

type ToggleKey = (typeof toggles)[number]['key']

function applyToDocument(keys: string[]) {
  const el = document.documentElement
  for (const t of toggles) el.classList.toggle(t.key, keys.includes(t.key))
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string[]>([])
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
      if (Array.isArray(saved) && saved.every((k) => typeof k === 'string')) {
        applyToDocument(saved)
        setActive(saved)
      }
    } catch {
      // ignore corrupt storage
    }
  }, [])

  const apply = (keys: string[]) => {
    applyToDocument(keys)
    setActive(keys)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(keys))
    } catch {
      // storage unavailable — settings still apply for this page view
    }
  }

  const toggle = (key: ToggleKey) => {
    let next = active.includes(key) ? active.filter((k) => k !== key) : [...active, key]
    // the two text sizes are mutually exclusive
    if (key === 'acc-text-lg' && next.includes(key)) next = next.filter((k) => k !== 'acc-text-xl')
    if (key === 'acc-text-xl' && next.includes(key)) next = next.filter((k) => k !== 'acc-text-lg')
    apply(next)
  }

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [open])

  return (
    <div
      ref={rootRef}
      dir="rtl"
      className="fixed bottom-[4.75rem] left-4 z-[70] flex w-13 justify-center"
    >
      {open && (
        <div
          role="dialog"
          aria-label="הגדרות נגישות"
          className="absolute bottom-[calc(100%+10px)] left-0 w-64 rounded-2xl border border-border bg-card p-4 text-foreground shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">הגדרות נגישות</h2>
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                buttonRef.current?.focus()
              }}
              aria-label="סגירת תפריט נגישות"
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-3 flex flex-col gap-1.5">
            {toggles.map((t) => {
              const isActive = active.includes(t.key)
              return (
                <button
                  key={t.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => toggle(t.key)}
                  className={cn(
                    'flex items-center justify-between rounded-lg border px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'border-[#0072BC] bg-[#0072BC]/10 font-semibold text-[#0072BC]'
                      : 'border-border hover:bg-secondary',
                  )}
                >
                  {t.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-2.5 w-2.5 rounded-full transition-colors',
                      isActive ? 'bg-[#0072BC]' : 'bg-border',
                    )}
                  />
                </button>
              )
            })}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <button
              type="button"
              onClick={() => apply([])}
              className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              איפוס הגדרות
            </button>
            <Link
              href="/accessibility"
              onClick={() => setOpen(false)}
              className="text-xs font-medium text-[#0072BC] underline underline-offset-2"
            >
              הצהרת נגישות
            </Link>
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        aria-label="תפריט נגישות"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#0072BC] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072BC]"
      >
        <AccessibilityIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}
