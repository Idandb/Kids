'use client'

import type { ComponentPropsWithoutRef } from 'react'
import { trackConversion } from '@/lib/track'

export function TrackedLink({
  event,
  params,
  onClick,
  ...props
}: ComponentPropsWithoutRef<'a'> & { event: string; params?: Record<string, unknown> }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackConversion(event, params)
        onClick?.(e)
      }}
    />
  )
}
