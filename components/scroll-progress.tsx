'use client'

import { useEffect, useRef } from 'react'

// Thin gold bar pinned to the very top of the viewport, reflecting how far
// the visitor has scrolled through the page. Updates the DOM directly
// (bypassing React state) to stay cheap on high-frequency scroll events.
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0
      barRef.current?.style.setProperty('--scroll-progress', String(progress))
      frame = 0
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-bar h-full" />
    </div>
  )
}
