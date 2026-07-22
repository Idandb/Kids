'use client'

import { useEffect, useState } from 'react'

// Tracks which child of a horizontal scroll-snap rail is centered, and
// renders small position dots (mobile-only rail, hidden once the layout
// switches to a static grid at sm+). Pass the rail's DOM id via `railId`.
export function ScrollRailDots({ railId, count }: { railId: string; count: number }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const rail = document.getElementById(railId)
    if (!rail) return

    const onScroll = () => {
      const railRect = rail.getBoundingClientRect()
      const center = railRect.left + railRect.width / 2
      let closest = 0
      let closestDist = Infinity
      Array.from(rail.children).forEach((child, i) => {
        const rect = (child as HTMLElement).getBoundingClientRect()
        const dist = Math.abs(rect.left + rect.width / 2 - center)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })
      setActive(closest)
    }

    onScroll()
    rail.addEventListener('scroll', onScroll, { passive: true })
    return () => rail.removeEventListener('scroll', onScroll)
  }, [railId])

  return (
    <div className="mt-4 flex justify-center gap-1.5 sm:hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === active ? 'w-5 bg-gold' : 'w-1.5 bg-border'
          }`}
        />
      ))}
    </div>
  )
}
