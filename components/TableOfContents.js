'use client'

import { useState, useEffect } from 'react'

export default function TableOfContents({ headings }) {
  const [activeHeading, setActiveHeading] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [showDesktopTOC, setShowDesktopTOC] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    const headingElements = document.querySelectorAll('h2[id], h3[id]')
    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Get the main article content
      const articleContent = document.querySelector('.article-content')
      if (!articleContent) return

      const articleRect = articleContent.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Hide TOC when we've scrolled past the article content
      // Add some buffer (200px) to account for footer and spacing
      const shouldShow = articleRect.bottom > 200
      setShowDesktopTOC(shouldShow)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!headings || headings.length === 0) return null

  return (
    <>
      {/* Mobile TOC Toggle - Optimized positioning */}
      <button
        className="md:hidden fixed bottom-16 right-4 sm:bottom-20 sm:right-6 bg-blue-600 text-white p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full shadow-lg z-40 hover:bg-blue-700 active:bg-blue-800 transition-colors"
        onClick={() => setIsVisible(!isVisible)}
        aria-label="Toggle Table of Contents"
        aria-expanded={isVisible}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>

      {/* Desktop Sticky TOC */}
      {showDesktopTOC && (
        <div className="hidden xl:block fixed left-8 top-1/2 transform -translate-y-1/2 w-64 z-30 transition-opacity duration-300">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Table of Contents</h3>
            <nav>
              <ul className="space-y-2 text-sm">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className={`block py-1 px-2 rounded transition-colors ${
                        activeHeading === heading.id
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      } ${heading.level === 3 ? 'ml-4 text-xs' : ''}`}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile TOC Overlay */}
      {isVisible && (
        <>
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsVisible(false)}
          />
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-lg p-6 z-50 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Table of Contents</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav>
              <ul className="space-y-3">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className={`block py-2 px-3 rounded transition-colors ${
                        activeHeading === heading.id
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      } ${heading.level === 3 ? 'ml-4 text-sm' : ''}`}
                      onClick={() => setIsVisible(false)}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

// Helper function to extract headings from content
export function extractHeadings(content) {
  if (typeof window === 'undefined') return []
  
  const headings = []
  const parser = new DOMParser()
  const doc = parser.parseFromString(content, 'text/html')
  
  const headingElements = doc.querySelectorAll('h2, h3')
  headingElements.forEach((heading, index) => {
    const text = heading.textContent.trim()
    const id = text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-')
    
    headings.push({
      id: id || `heading-${index}`,
      text,
      level: parseInt(heading.tagName.charAt(1))
    })
  })
  
  return headings
}
