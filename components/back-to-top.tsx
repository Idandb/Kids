'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => {
        const reduce =
          window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
          document.documentElement.classList.contains('acc-no-motion')
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      }}
      aria-label="חזרה לראש העמוד"
      tabIndex={visible ? 0 : -1}
      className={cn(
        'fixed bottom-[4.75rem] right-4 z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-accent lg:bottom-4',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
