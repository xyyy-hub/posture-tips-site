import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://www.posturetips.com'),
  title: {
    default: 'PostureTips.com - Improve Your Posture Naturally',
    template: '%s | PostureTips.com',
  },
  description: 'Practical, evidence-based tips to improve your posture at home, work, and everywhere else. Simple daily habits for better health.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.posturetips.com',
    siteName: 'PostureTips.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PostureTips.com - Improve Your Posture Naturally',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

