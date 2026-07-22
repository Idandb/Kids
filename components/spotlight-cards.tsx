'use client'

import { useEffect } from 'react'

// Single delegated pointermove listener that drives the cursor-tracking glow
// on every `.card-lift` element (see app/globals.css). Renders nothing.
export function SpotlightCards() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    if (window.matchMedia('(hover: hover)').matches) {
      const onPointerMove = (e: PointerEvent) => {
        const card = (e.target as HTMLElement).closest<HTMLElement>('.card-lift')
        if (!card) return
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
        card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
      }

      window.addEventListener('pointermove', onPointerMove, { passive: true })
      return () => window.removeEventListener('pointermove', onPointerMove)
    }

    if (window.matchMedia('(hover: none)').matches) {
      // Touch devices: one-shot glow pulse at the tap point instead of a hover trail
      const onTouchStart = (e: TouchEvent) => {
        const card = (e.target as HTMLElement).closest<HTMLElement>('.card-lift')
        if (!card) return
        const touch = e.touches[0]
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--spot-x', `${touch.clientX - rect.left}px`)
        card.style.setProperty('--spot-y', `${touch.clientY - rect.top}px`)
        card.classList.remove('spot-pulse')
        // Force reflow so re-tapping the same card retriggers the transition
        void card.offsetWidth
        card.classList.add('spot-pulse')
        window.clearTimeout(Number(card.dataset.pulseTimer))
        card.dataset.pulseTimer = String(window.setTimeout(() => card.classList.remove('spot-pulse'), 650))
      }

      window.addEventListener('touchstart', onTouchStart, { passive: true })
      return () => window.removeEventListener('touchstart', onTouchStart)
    }
  }, [])

  return null
}
