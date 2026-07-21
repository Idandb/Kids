import { Hero } from '@/components/home/hero'
import { Minefield } from '@/components/home/minefield'
import { Process } from '@/components/home/process'
import { PremiumTracks } from '@/components/home/premium-tracks'
import { ConditionsStrip } from '@/components/home/conditions-strip'
import { Testimonials } from '@/components/home/testimonials'
import { Faq } from '@/components/home/faq'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Minefield />
      <Process />
      <PremiumTracks />
      <ConditionsStrip />
      <Testimonials />
      <Faq />
      <CtaBand />
    </main>
  )
}
