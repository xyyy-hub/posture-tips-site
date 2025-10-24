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

          {/* Medical Treatment */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Medical Treatment
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Need clinical treatment for neck hump or severe forward head posture?
            </p>
            <a 
              href="https://www.neckhump.com" 
              className="text-primary-600 font-medium hover:underline text-sm"
              target="_blank"
              rel="noopener"
            >
              NeckHump.com - Clinical Guide →
            </a>
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


