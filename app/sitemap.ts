import type { MetadataRoute } from 'next'

const SITE_URL = 'https://medical-rights-agency.vercel.app'

const routes: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/services/tax-exemption', priority: 0.9 },
  { path: '/services/work-accidents', priority: 0.9 },
  { path: '/services/disability', priority: 0.9 },
  { path: '/services/nursing', priority: 0.9 },
  { path: '/services/adhd', priority: 0.9 },
  { path: '/guides/medical-committee', priority: 0.8 },
  { path: '/guides/appeal', priority: 0.8 },
  { path: '/conditions/diabetes', priority: 0.8 },
  { path: '/conditions/cancer', priority: 0.8 },
  { path: '/conditions/stroke', priority: 0.8 },
  { path: '/conditions/autism', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/accessibility', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
