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


