/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations (swcMinify is default in Next.js 15)
  compress: true,
  poweredByHeader: false,
  
  // Static optimization
  trailingSlash: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['@tailwindcss/typography'],
  },
  
  // Note: Vercel handles www redirects at the domain level
  // No Next.js redirects needed since Vercel redirects neckhump.com → www.neckhump.com

  // 301 redirects for consolidated duplicate pages
  async redirects() {
    return [
      // Pillow pages consolidated into comprehensive guide
      {
        source: '/help/product-questions/best-pillow-side-sleepers',
        destination: '/help/product-questions/side-sleeper-pillow-guide',
        permanent: true,
      },
      {
        source: '/help/product-questions/pillow-height-for-side-sleepers',
        destination: '/help/product-questions/side-sleeper-pillow-guide',
        permanent: true,
      },
      {
        source: '/help/product-questions/best-pillow-height-side-sleepers',
        destination: '/help/product-questions/side-sleeper-pillow-guide',
        permanent: true,
      },
      // Foam roller pages consolidated into comprehensive guide
      {
        source: '/help/product-questions/foam-roller-size-guide',
        destination: '/help/product-questions/foam-roller-complete-guide',
        permanent: true,
      },
      {
        source: '/help/product-questions/foam-roller-size-guide-neck',
        destination: '/help/product-questions/foam-roller-complete-guide',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/(.*).(js|css|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
}

module.exports = nextConfig
