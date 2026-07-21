type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
}

/**
 * Reports a conversion event to Google Ads / GA4 when their tag is installed.
 * Safe no-op until the gtag snippet is added to the site.
 */
export function trackConversion(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const w = window as TrackingWindow
  if (typeof w.gtag === 'function') {
    w.gtag('event', event, params)
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...params })
  }
}
