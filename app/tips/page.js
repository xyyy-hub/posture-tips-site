import Link from 'next/link'

export const metadata = {
  title: 'Posture Tips by Profession & Lifestyle | PostureTips.com',
  description: 'Targeted posture tips for office workers, students, seniors, and more. Find advice tailored to your lifestyle and daily activities.',
  alternates: {
    canonical: '/tips'
  },
  openGraph: {
    title: 'Posture Tips by Profession & Lifestyle | PostureTips.com',
    description: 'Targeted posture tips for office workers, students, seniors, and more.',
    url: 'https://www.posturetips.com/tips',
    type: 'website',
  },
}

const tips = [
  {
    title: 'Posture Tips for Office Workers',
    description: 'Desk ergonomics, break strategies, and daily exercises for 8+ hour workdays',
    href: '/tips/office-workers',
    emoji: '💼',
    audience: 'Most Popular',
    challenges: ['Long sitting', 'Screen time', 'Desk setup']
  },
  {
    title: 'Posture Tips for Students',
    description: 'Classroom seating, study setup, backpack safety, and dorm furniture hacks',
    href: '/tips/students',
    emoji: '📖',
    audience: 'Students & Learners',
    challenges: ['Heavy backpacks', 'Poor desks', 'Phone use']
  },
  {
    title: 'Posture Tips for Seniors',
    description: 'Safe exercises, balance training, and fall prevention through better posture',
    href: '/tips/seniors',
    emoji: '🌟',
    audience: '60+ Years Old',
    challenges: ['Balance', 'Mobility', 'Safety']
  }
]

export default function TipsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Posture Tips for Every Lifestyle
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find posture advice tailored to your profession, age, and daily activities. Choose the category that best matches your situation.
          </p>
        </div>

        {/* Main Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tips.map((tip) => (
            <Link 
              key={tip.href}
              href={tip.href} 
              className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-primary-600 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{tip.emoji}</div>
                <span className="inline-block text-xs font-semibold px-3 py-1 bg-primary-100 text-primary-700 rounded-full mb-4">
                  {tip.audience}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors text-center">
                {tip.title}
              </h2>
              
              <p className="text-gray-600 mb-6 text-center">{tip.description}</p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Common challenges:</p>
                <ul className="space-y-1">
                  {tip.challenges.map(challenge => (
                    <li key={challenge} className="text-sm text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 text-center">
                <span className="text-primary-600 font-semibold group-hover:underline">
                  View Tips →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/desk-ergonomics-guide" className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">🖥️ Desk Ergonomics</h3>
              <p className="text-sm text-gray-600">Complete workstation setup guide</p>
            </Link>
            <Link href="/daily-posture-routine" className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">💪 Daily Routine</h3>
              <p className="text-sm text-gray-600">10-minute exercise program</p>
            </Link>
            <Link href="/phone-posture-tips" className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">📱 Phone Posture</h3>
              <p className="text-sm text-gray-600">Prevent text neck syndrome</p>
            </Link>
          </div>
        </div>

        {/* FAQ Quick Hits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Answers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Who needs posture tips most?</h3>
              <p className="text-sm text-gray-700">
                Anyone spending 4+ hours daily sitting or using screens. Office workers, students, and remote workers see the biggest benefits from targeted posture tips.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">How are these tips different?</h3>
              <p className="text-sm text-gray-700">
                Each guide addresses the unique challenges of your lifestyle—backpack weight for students, prolonged sitting for office workers, and balance for seniors.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Can I follow multiple tip guides?</h3>
              <p className="text-sm text-gray-700">
                Yes! Many people are both office workers and students, or seniors who work part-time. Use tips from multiple categories as needed.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">What if my job isn't listed?</h3>
              <p className="text-sm text-gray-700">
                Start with "Office Workers" if you sit at a desk, or check our comprehensive guides page for activity-specific advice that might match your needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want a complete overview first?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Start with our general guide to improving posture, then dive into the tips specific to your lifestyle.
          </p>
          <Link 
            href="/how-to-improve-posture"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            View Complete Guide →
          </Link>
        </div>
      </div>
    </main>
  )
}

