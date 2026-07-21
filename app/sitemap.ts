import type { MetadataRoute } from 'next'

const SITE_URL = 'https://medical-rights-agency.vercel.app'

const routes: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/conditions', priority: 0.9 },
  { path: '/conditions/adhd', priority: 0.95 },
  { path: '/conditions/autism', priority: 0.9 },
  { path: '/conditions/down-syndrome', priority: 0.8 },
  { path: '/conditions/developmental-delay', priority: 0.8 },
  { path: '/conditions/dependency', priority: 0.8 },
  { path: '/conditions/hearing-vision', priority: 0.8 },
  { path: '/conditions/cancer', priority: 0.8 },
  { path: '/conditions/diabetes', priority: 0.8 },
  { path: '/guides/benefit-amounts', priority: 0.85 },
  { path: '/guides/hidden-benefits', priority: 0.85 },
  { path: '/guides/turning-18', priority: 0.7 },
  { path: '/guides/medical-committee', priority: 0.8 },
  { path: '/guides/appeal', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/accessibility', priority: 0.3 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
