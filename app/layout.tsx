import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Assistant, Heebo } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AccessibilityWidget } from '@/components/accessibility-widget'
import { WhatsAppFab } from '@/components/whatsapp-fab'
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

const defaultTitle = 'מגן זכויות | מיצוי זכויות רפואיות — פטור ממס הכנסה, קצבת נכות ותאונות עבודה'
const defaultDescription =
  'מיצוי זכויות רפואיות מול ביטוח לאומי, מס הכנסה וחברות הביטוח: פטור ממס הכנסה, קצבת נכות כללית, תאונות עבודה, גמלת סיעוד והפרעות קשב. בדיקת זכאות חינם — תשלום על בסיס הצלחה בלבד.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: '%s | מגן זכויות',
  },
  description: defaultDescription,
  keywords: [
    'מיצוי זכויות רפואיות',
    'פטור ממס הכנסה',
    'החזרי מס',
    'קצבת נכות',
    'נכות כללית',
    'תאונת עבודה ביטוח לאומי',
    'גמלת סיעוד',
    'ועדה רפואית',
    'אחוזי נכות',
    'בדיקת זכאות חינם',
  ],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    siteName: 'מגן זכויות',
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: '/images/logo.png', width: 704, height: 333, alt: 'מגן זכות — מיצוי זכויות רפואיות' }],
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
  name: 'מגן זכויות',
  description: defaultDescription,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  telephone: '+972-53-545-5667',
  email: 'info@magen-zchuyot.co.il',
  areaServed: { '@type': 'Country', name: 'Israel' },
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
      <body className="antialiased">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <JsonLd data={organizationSchema} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <AccessibilityWidget />
        <WhatsAppFab />
        <SpotlightCards />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
