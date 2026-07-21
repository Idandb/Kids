/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/services/adhd', destination: '/conditions/adhd', permanent: true },
      { source: '/services/disability', destination: '/guides/turning-18', permanent: true },
      { source: '/services/tax-exemption', destination: '/', permanent: true },
      { source: '/services/work-accidents', destination: '/', permanent: true },
      { source: '/services/nursing', destination: '/', permanent: true },
      { source: '/conditions/stroke', destination: '/conditions/down-syndrome', permanent: true },
    ]
  },
}

export default nextConfig
