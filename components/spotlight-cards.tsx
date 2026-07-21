'use client'

import { useEffect } from 'react'

// Single delegated pointermove listener that drives the cursor-tracking glow
// on every `.card-lift` element (see app/globals.css). Renders nothing.
export function SpotlightCards() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    const onPointerMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.card-lift')
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
      card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  return null
}
