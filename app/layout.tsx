import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Assistant, Heebo } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AccessibilityWidget } from '@/components/accessibility-widget'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { GoogleTag } from '@/components/google-tag'
import { SpotlightCards } from '@/components/spotlight-cards'
import { JsonLd } from '@/components/json-ld'
import './globals.css'

const SITE_URL = 'https://medical-rights-agency.vercel.app'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  variable: '--font-assistant',
})

const secular = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['600', '800'],
  variable: '--font-secular',
})

const defaultTitle = 'מגן זכות | מיצוי זכויות לילד נכה — קצבת ביטוח לאומי והפרעות קשב וריכוז'
const defaultDescription =
  'מיצוי זכויות מלא להורים לילדים עם מוגבלות: קצבת ילד נכה מביטוח לאומי, הפרעות קשב וריכוז (ADHD), אוטיזם, תסמונת דאון ועוד. הטבות נלוות (חשמל, מים, ארנונה, נקודות זיכוי במס), ליווי לוועדות וערעורים. בדיקת זכאות חינם — תשלום על בסיס הצלחה בלבד.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: '%s | מגן זכות',
  },
  description: defaultDescription,
  keywords: [
    'קצבת ילד נכה',
    'מיצוי זכויות ילד נכה',
    'הפרעות קשב וריכוז ילדים',
    'ADHD ילד נכה',
    'קצבת ילד נכה אוטיזם',
    'ביטוח לאומי ילד נכה',
    'ועדה רפואית ילד נכה',
    'הטבות ילד נכה חשמל ארנונה',
    'נקודות זיכוי מס ילד נכה',
    'בדיקת זכאות חינם',
  ],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    siteName: 'מגן זכות',
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: '/images/logo.png', width: 704, height: 333, alt: 'מגן זכות — מיצוי זכויות לילד נכה' }],
  },
  twitter: {
    card: 'summary',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/logo.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/images/logo.svg', type: 'image/svg+xml' },
      { url: '/apple-icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#23262f',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'מגן זכות',
  description: defaultDescription,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  telephone: '+972-53-545-5667',
  email: 'info@magen-zchuyot.co.il',
  areaServed: { '@type': 'Country', name: 'Israel' },
  knowsAbout: ['קצבת ילד נכה', 'הפרעות קשב וריכוז', 'אוטיזם', 'ביטוח לאומי', 'ועדה רפואית'],
  priceRange: 'תשלום על בסיס הצלחה בלבד',
  openingHours: ['Su-Th 08:00-19:00', 'Fr 08:00-13:00'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+972-53-545-5667',
      contactType: 'customer service',
      availableLanguage: ['Hebrew'],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`bg-background ${assistant.variable} ${secular.variable}`}>
      <body className="antialiased pb-[calc(3.75rem+env(safe-area-inset-bottom))] lg:pb-0">
        <GoogleTag />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <JsonLd data={organizationSchema} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <AccessibilityWidget />
        <WhatsAppFab />
        <MobileCtaBar />
        <SpotlightCards />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
