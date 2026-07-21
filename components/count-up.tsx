'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Animates the first number found in `text` from 0 to its value when the
 * element scrolls into view, preserving any prefix/suffix (currency, units).
 * Text without digits is rendered as-is.
 */
export function CountUp({ text, duration = 1500 }: { text: string; duration?: number }) {
  const match = text.match(/\d[\d,]*(?:\.\d+)?/)
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    const el = ref.current
    if (!el || !match || typeof match.index !== 'number') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (typeof IntersectionObserver === 'undefined') return

    const raw = match[0]
    const target = Number.parseFloat(raw.replace(/,/g, ''))
    const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
    const useGrouping = raw.includes(',')
    const prefix = text.slice(0, match.index)
    const suffix = text.slice(match.index + raw.length)

    const format = (n: number) =>
      prefix +
      n.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping,
      }) +
      suffix

    let frame = 0
    const run = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setDisplay(format(target * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect()
          run()
        }
      },
      { threshold: 0.4 },
    )

    setDisplay(format(0))
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <span ref={ref}>{display}</span>
}
