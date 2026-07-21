'use client'

import { Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { trackConversion } from '@/lib/track'

const WA_URL = `https://wa.me/972535455667?text=${encodeURIComponent(
  'שלום, אשמח לבדיקת זכאות חינם לילד/ה שלי.',
)}`

export function MobileCtaBar() {
  return (
    <div
      dir="rtl"
      className="fixed inset-x-0 bottom-0 z-[60] flex items-stretch gap-px border-t border-border bg-card/95 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href="tel:0535455667"
        onClick={() => trackConversion('phone_click', { source: 'mobile_bar' })}
        className="flex flex-1 items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold text-primary-foreground active:opacity-90"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        חייגו עכשיו
      </a>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion('whatsapp_click', { source: 'mobile_bar' })}
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white active:opacity-90"
      >
        <WhatsAppIcon className="h-4 w-4" />
        וואטסאפ
      </a>
    </div>
  )
}
