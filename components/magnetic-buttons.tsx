'use client'

import { useEffect } from 'react'

// Delegated pointermove listener giving `.magnetic` elements a subtle pull
// toward the cursor, and resetting them on pointer-out. Renders nothing.
export function MagneticButtons() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const strength = 0.25
    const max = 10

    const onPointerMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('.magnetic')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      const x = Math.max(-max, Math.min(max, dx * strength))
      const y = Math.max(-max, Math.min(max, dy * strength))
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onPointerOut = (e: PointerEvent) => {
      const from = (e.target as HTMLElement).closest<HTMLElement>('.magnetic')
      if (!from) return
      const to = e.relatedTarget as HTMLElement | null
      if (to && from.contains(to)) return
      from.style.transform = ''
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerout', onPointerOut, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerout', onPointerOut)
    }
  }, [])

  return null
}
