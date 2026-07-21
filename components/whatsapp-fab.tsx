'use client'

import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { trackConversion } from '@/lib/track'

const WA_URL = `https://wa.me/972535455667?text=${encodeURIComponent(
  'שלום, אשמח לבדיקת זכאות חינם למיצוי זכויות רפואיות.',
)}`

export function WhatsAppFab() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="פתיחת שיחת וואטסאפ עם מגן זכות"
      onClick={() => trackConversion('whatsapp_click', { source: 'fab' })}
      className="anim-scale-in fixed bottom-4 left-4 z-[70] hidden h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 [animation-delay:800ms] hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] lg:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
