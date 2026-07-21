'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'ראשי' },
  { href: '/conditions/adhd', label: 'הפרעות קשב וריכוז' },
  { href: '/conditions', label: 'עילות זכאות' },
  { href: '/guides/benefit-amounts', label: 'סכומי הקצבה' },
  { href: '/guides/hidden-benefits', label: 'הטבות נוספות' },
  { href: '/guides/appeal', label: 'ערר וערעורים' },
  { href: '/contact', label: 'צור קשר' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md transition-shadow duration-300',
        scrolled ? 'shadow-lg shadow-navy/5' : 'shadow-sm shadow-navy/[0.03]',
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="group flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="מגן זכות — מיצוי זכויות לילד נכה"
            width={704}
            height={333}
            priority
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="ניווט ראשי">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative pb-1 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-right after:scale-x-0 after:rounded-full after:bg-gold after:transition-transform after:duration-300 hover:text-accent hover:after:scale-x-100',
                pathname === item.href ? 'text-accent after:scale-x-100' : 'text-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:0535455667"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-navy/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/20 active:translate-y-0"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span dir="ltr">053-5455667</span>
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out lg:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <nav className="overflow-hidden" aria-label="ניווט נייד" {...(open ? {} : { inert: true })}>
          <div className="flex flex-col gap-1 border-t border-border/60 px-4 py-4">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-2.5 text-base font-medium transition-all duration-300',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
                  pathname === item.href ? 'bg-secondary text-accent' : 'text-foreground hover:bg-secondary',
                )}
                style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:0535455667"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-navy/15"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>חייגו עכשיו <span dir="ltr">053-5455667</span></span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
