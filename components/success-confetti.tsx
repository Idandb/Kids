'use client'

import { useEffect, useState, type CSSProperties } from 'react'

const COLORS = ['oklch(0.56 0.125 163)', 'oklch(0.7 0.15 85)', 'oklch(0.24 0.02 260)']

type Piece = { id: number; x: number; delay: number; color: string; rotate: number }

// One-shot celebratory burst rendered when a lead-form submission succeeds.
// Skips entirely under reduced-motion (system preference or the site's own
// accessibility "stop animations" toggle).
export function SuccessConfetti() {
  const [pieces, setPieces] = useState<Piece[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (document.documentElement.classList.contains('acc-no-motion')) return

    setPieces(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 220,
        delay: Math.random() * 150,
        color: COLORS[i % COLORS.length],
        rotate: Math.random() * 360,
      })),
    )
  }, [])

  if (pieces.length === 0) return null

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece absolute h-2 w-2 rounded-sm"
          style={
            {
              backgroundColor: p.color,
              '--tx': `${p.x}px`,
              '--rot': `${p.rotate}deg`,
              animationDelay: `${p.delay}ms`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
