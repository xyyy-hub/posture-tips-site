import Link from 'next/link'

export const metadata = {
  title: 'Posture Guides - Complete How-To Guides | PostureTips.com',
  description: 'Comprehensive posture guides covering sitting, standing, sleeping, walking, driving, and more. Step-by-step instructions for every situation.',
  alternates: {
    canonical: '/guides'
  },
  openGraph: {
    title: 'Posture Guides - Complete How-To Guides | PostureTips.com',
    description: 'Comprehensive posture guides covering sitting, standing, sleeping, walking, driving, and more.',
    url: 'https://www.posturetips.com/guides',
    type: 'website',
  },
}

const guides = [
  {
    title: 'How to Improve Your Posture',
    description: 'Complete step-by-step guide covering assessment, exercises, and daily habits',
    href: '/how-to-improve-posture',
    emoji: '📖',
    tags: ['Beginner Friendly', 'Comprehensive']
  },
  {
    title: 'Sitting Posture Guide',
    description: 'Perfect sitting form for desk workers - setup, breaks, and ergonomics',
    href: '/sitting-posture-guide',
    emoji: '💺',
    tags: ['Office Workers', 'Essential']
  },
  {
    title: 'Standing Posture Guide',
    description: 'Proper alignment for standing work and daily activities',
    href: '/standing-posture-guide',
    emoji: '🧍',
    tags: ['Alignment', 'Daily Practice']
  },
  {
    title: 'Sleep Posture Guide',
    description: 'Best sleeping positions, pillow setup, and mattress recommendations',
    href: '/sleep-posture-guide',
    emoji: '😴',
    tags: ['Sleep Health', 'Spine Alignment']
  },
  {
    title: 'Walking Posture Guide',
    description: 'Proper walking form, gait mechanics, and posture while moving',
    href: '/walking-posture-guide',
    emoji: '🚶',
    tags: ['Movement', 'Daily Activity']
  },
  {
    title: 'Driving Posture Guide',
    description: 'Car seat setup, steering wheel position, and long-drive tips',
    href: '/driving-posture-guide',
    emoji: '🚗',
    tags: ['Commuters', 'Travel']
  },
  {
    title: 'Phone Posture Tips',
    description: 'Prevent text neck - how to use your phone without pain',
    href: '/phone-posture-tips',
    emoji: '📱',
    tags: ['Text Neck', 'Prevention']
  },
  {
    title: 'Gaming Posture Guide',
    description: 'Setup and posture tips for long gaming sessions',
    href: '/gaming-posture-guide',
    emoji: '🎮',
    tags: ['Gamers', 'Long Sessions']
  },
  {
    title: 'Pregnancy Posture Guide',
    description: 'Safe posture practices during pregnancy for back pain relief',
    href: '/pregnancy-posture-guide',
    emoji: '🤰',
    tags: ['Pregnancy', 'Back Pain']
  },
  {
    title: 'Desk Ergonomics Guide',
    description: 'Complete workstation setup - chair, monitor, keyboard, and lighting',
    href: '/desk-ergonomics-guide',
    emoji: '🖥️',
    tags: ['Ergonomics', 'Workspace']
  },
  {
    title: 'Daily Posture Routine',
    description: '10-minute daily exercises to strengthen posture-supporting muscles',
    href: '/daily-posture-routine',
    emoji: '💪',
    tags: ['Exercises', 'Daily Practice']
  }
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Posture Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive step-by-step guides for every posture situation. Choose your guide below to get started.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <span className="text-sm font-medium text-gray-500">Jump to:</span>
          <a href="#essential" className="text-sm text-primary-600 hover:underline">Essential Guides</a>
          <span className="text-gray-300">•</span>
          <a href="#activity" className="text-sm text-primary-600 hover:underline">Activity-Specific</a>
          <span className="text-gray-300">•</span>
          <a href="#setup" className="text-sm text-primary-600 hover:underline">Setup & Exercises</a>
        </div>

        {/* Essential Guides */}
        <section id="essential" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.filter(g => ['How to Improve Your Posture', 'Sitting Posture Guide', 'Standing Posture Guide'].includes(g.title)).map((guide) => (
              <Link 
                key={guide.href}
                href={guide.href} 
                className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-3">{guide.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex flex-wrap gap-2">
                  {guide.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Activity-Specific Guides */}
        <section id="activity" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Activity-Specific Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.filter(g => ['Sleep Posture Guide', 'Walking Posture Guide', 'Driving Posture Guide', 'Phone Posture Tips', 'Gaming Posture Guide', 'Pregnancy Posture Guide'].includes(g.title)).map((guide) => (
              <Link 
                key={guide.href}
                href={guide.href} 
                className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-3">{guide.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex flex-wrap gap-2">
                  {guide.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Setup & Exercises */}
        <section id="setup" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Setup & Exercises</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.filter(g => ['Desk Ergonomics Guide', 'Daily Posture Routine'].includes(g.title)).map((guide) => (
              <Link 
                key={guide.href}
                href={guide.href} 
                className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-3">{guide.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex flex-wrap gap-2">
                  {guide.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure where to start?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Begin with our comprehensive guide to improving your posture. It covers everything you need to know to get started.
          </p>
          <Link 
            href="/how-to-improve-posture"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            Start with Complete Guide →
          </Link>
        </div>
      </div>
    </main>
  )
}

