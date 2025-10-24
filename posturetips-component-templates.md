# PostureTips.com - Component Templates

**Created:** October 24, 2025  
**Purpose:** Ready-to-use React/Next.js component code for posturetips.com  
**Status:** Copy-paste ready, requires testing

---

## COMPONENT 1: HEADER

**File:** `components/Header.js`  
**Description:** Main navigation header with PostureTips branding

```javascript
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-600">Posture</span>
              <span className="text-2xl font-bold text-secondary-600">Tips</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/tips" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Tips
            </Link>
            <Link 
              href="/guides" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Guides
            </Link>
            <Link 
              href="/setup" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Desk Setup
            </Link>
            <Link 
              href="/exercises" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Exercises
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/tips" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tips
              </Link>
              <Link 
                href="/guides" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guides
              </Link>
              <Link 
                href="/setup" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Desk Setup
              </Link>
              <Link 
                href="/exercises" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Exercises
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
```

---

## COMPONENT 2: FOOTER

**File:** `components/Footer.js`  
**Description:** Site footer with links and disclaimer

```javascript
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              About
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              PostureTips.com provides practical, evidence-based guidance 
              to help you improve your posture and live healthier.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tips" className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  Posture Tips
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  Complete Guides
                </Link>
              </li>
              <li>
                <Link href="/setup" className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  Desk Setup
                </Link>
              </li>
              <li>
                <Link href="/exercises" className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  Exercises
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tagline */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Our Mission
            </h3>
            <p className="text-sm text-gray-600 italic">
              "Improve your posture, improve your life."
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} PostureTips.com. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center mt-2">
            This site provides educational information only. 
            Consult a healthcare provider for medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

---

## COMPONENT 3: SHORT ANSWER BLOCK

**File:** `components/ShortAnswer.js`  
**Description:** AEO-optimized short answer block

```javascript
export default function ShortAnswer({ children }) {
  return (
    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-8 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-emerald-900" id="short-answer">
        Short Answer
      </h2>
      <div className="text-emerald-800 text-lg leading-relaxed">
        {children}
      </div>
    </div>
  )
}
```

**Usage Example:**
```javascript
<ShortAnswer>
  <p>
    To improve your posture, focus on three areas: alignment (sit/stand with spine neutral), 
    strength (exercises for back and core), and awareness (regular posture checks). 
    Most people see noticeable improvements within 4-6 weeks.
  </p>
</ShortAnswer>
```

---

## COMPONENT 4: KEY TAKEAWAYS BLOCK

**File:** `components/KeyTakeaways.js`  
**Description:** AEO-optimized key takeaways block

```javascript
export default function KeyTakeaways({ takeaways }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-blue-900" id="key-takeaways">
        Key Takeaways
      </h2>
      <ul className="space-y-3 text-blue-800">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
              {index + 1}
            </span>
            <span>{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

**Usage Example:**
```javascript
<KeyTakeaways 
  takeaways={[
    "Good posture is a skill you can learn at any age with consistent practice",
    "Focus on sitting, standing, and sleeping positions first—these make up 90% of your day",
    "Simple exercises (5-10 minutes daily) strengthen the muscles that support good posture",
    "Use environment cues (phone reminders, desk setup) to build the habit automatically",
    "Expect gradual improvement—posture changes take 4-8 weeks to become natural"
  ]} 
/>
```

---

## COMPONENT 5: FAQ SECTION WITH SCHEMA

**File:** `components/FAQSection.js`  
**Description:** FAQ section with structured data (reuse from neckhump.com, already exists)

**Usage:** Same as neckhump.com - already implemented

---

## COMPONENT 6: CARD COMPONENT

**File:** `components/Card.js`  
**Description:** Reusable card for lists and grids

```javascript
import Link from 'next/link'

export default function Card({ title, description, href, variant = 'default' }) {
  const baseClasses = "rounded-lg p-6 transition-all duration-200"
  
  const variantClasses = {
    default: "bg-white border border-gray-200 hover:shadow-md",
    featured: "bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200 hover:shadow-md",
    accent: "bg-primary-600 text-white hover:bg-primary-700"
  }

  const content = (
    <>
      <h3 className={`text-xl font-semibold mb-2 ${
        variant === 'accent' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      <p className={variant === 'accent' ? 'text-primary-100' : 'text-gray-600'}>
        {description}
      </p>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses[variant]} block`}>
        {content}
      </Link>
    )
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {content}
    </div>
  )
}
```

**Usage Example:**
```javascript
{/* Default card */}
<Card 
  title="Sitting Posture Guide"
  description="Learn perfect sitting posture for desk work"
  href="/sitting-posture-guide"
/>

{/* Featured card */}
<Card 
  title="Start Here"
  description="New to posture improvement? Begin with this guide"
  href="/how-to-improve-posture"
  variant="featured"
/>

{/* Accent card (CTA) */}
<Card 
  title="Get Started Today"
  description="Follow our 10-minute daily routine"
  href="/daily-posture-routine"
  variant="accent"
/>
```

---

## COMPONENT 7: BUTTON COMPONENT

**File:** `components/Button.js`  
**Description:** Reusable button with variants

```javascript
import Link from 'next/link'

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'medium',
  onClick 
}) {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 inline-block text-center"
  
  const variantClasses = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow-md",
    secondary: "bg-secondary-100 hover:bg-secondary-200 text-secondary-700",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
  }

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
```

**Usage Example:**
```javascript
<Button href="/how-to-improve-posture" variant="primary" size="large">
  Get Started
</Button>

<Button href="/guides" variant="secondary">
  Learn More
</Button>

<Button href="/exercises" variant="outline" size="small">
  View Exercises
</Button>
```

---

## COMPONENT 8: HERO SECTION

**File:** `components/Hero.js`  
**Description:** Homepage hero section

```javascript
import Button from './Button'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Improve Your Posture, <br className="hidden sm:inline" />
            Improve Your Life
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Practical tips and proven techniques for better posture—no complicated 
            routines or expensive equipment needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/how-to-improve-posture" variant="primary" size="large">
              Get Started
            </Button>
            <Button href="/guides" variant="outline" size="large">
              Browse Guides
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Evidence-Based
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Easy to Follow
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Results in 4-6 Weeks
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## COMPONENT 9: VALUE PROPOSITION CARDS

**File:** `components/ValueProps.js`  
**Description:** Three-column value proposition section

```javascript
export default function ValueProps() {
  const props = [
    {
      icon: "🎯",
      title: "Simple & Practical",
      description: "No complicated routines or expensive equipment. Tips you can use today at home or work."
    },
    {
      icon: "📚",
      title: "Evidence-Based",
      description: "Every tip backed by research and expert guidance from physical therapists and posture specialists."
    },
    {
      icon: "⏱️",
      title: "Quick Results",
      description: "See noticeable improvements in just 2-4 weeks with consistent daily practice."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{prop.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {prop.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## COMPONENT 10: ROOT LAYOUT

**File:** `app/layout.js`  
**Description:** Root layout with Inter font and metadata

```javascript
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
```

---

## COMPONENT 11: TAILWIND CONFIG

**File:** `tailwind.config.js`  
**Description:** Tailwind configuration with brand colors

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## IMPLEMENTATION CHECKLIST

### Step 1: Create Component Files
- [ ] Create `components/` directory
- [ ] Add Header.js
- [ ] Add Footer.js
- [ ] Add ShortAnswer.js
- [ ] Add KeyTakeaways.js
- [ ] Add Card.js
- [ ] Add Button.js
- [ ] Add Hero.js
- [ ] Add ValueProps.js

### Step 2: Configure Project
- [ ] Update `tailwind.config.js` with brand colors
- [ ] Update `app/layout.js` with Inter font and metadata
- [ ] Import components in layout
- [ ] Test component rendering

### Step 3: Create Homepage
- [ ] Use Hero component
- [ ] Use ValueProps component
- [ ] Use Card components for guide links
- [ ] Add FAQ section
- [ ] Test responsive design

### Step 4: Verify Styling
- [ ] Check mobile responsiveness
- [ ] Verify color contrast (WCAG AA)
- [ ] Test hover states
- [ ] Check focus states for accessibility
- [ ] Validate with Lighthouse

---

## NOTES

**Reusable from neckhump.com:**
- FAQSection component (already has schema)
- Citation component (if needed)
- AuthorReviewer component (adapt for posturetips authors)

**Different from neckhump.com:**
- Lighter color palette (green/blue vs emerald/medical gray)
- Friendlier navigation labels
- No medical disclaimer banner
- Simpler footer (educational disclaimer only)
- More playful tone in copy

**Testing Priority:**
1. Mobile navigation (hamburger menu)
2. Link hover states
3. Card layouts on different screen sizes
4. Button variants
5. Color contrast for accessibility

---

**Status:** ✅ Ready for implementation  
**Next Action:** Create component files and test on localhost  
**Timeline:** Week 2 (brand identity phase)



