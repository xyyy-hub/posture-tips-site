import Link from 'next/link'

export default function NavigationPathway({ currentStage, pathway }) {
  // Default pathway if none provided
  const defaultPathway = [
    {
      stage: 'beginner',
      title: 'Understanding Your Posture',
      description: 'Learn what causes poor posture and assess your condition',
      links: [
        { href: '/neck-hump-causes', label: 'What Causes Neck Hump?' },
        { href: '/posture-correction-guide', label: 'Types of Posture Problems' }
      ]
    },
    {
      stage: 'exercises',
      title: 'Start with Exercises',
      description: 'Begin daily exercise routine to correct muscle imbalances',
      links: [
        { href: '/neck-hump-exercises', label: '10 Best Exercises' },
        { href: '/exercise-library', label: 'Browse All Exercises' },
        { href: '/exercises/chin-tucks', label: 'Start with Chin Tucks' }
      ]
    },
    {
      stage: 'environment',
      title: 'Fix Your Environment',
      description: 'Optimize workspace and sleeping position for 24/7 support',
      links: [
        { href: '/desk-setup-guide', label: 'Ergonomic Desk Setup' },
        { href: '/how-to-sleep-with-neck-hump', label: 'Sleep Positioning' },
        { href: '/tech-neck-prevention-guide', label: 'Device Usage Tips' }
      ]
    },
    {
      stage: 'maintenance',
      title: 'Maintain & Prevent',
      description: 'Keep your posture corrected and prevent relapse',
      links: [
        { href: '/how-to-fix-posture-at-home', label: 'Complete Home Plan' },
        { href: '/help', label: 'Get Specific Help' }
      ]
    }
  ]

  const activePathway = pathway || defaultPathway
  const currentIndex = activePathway.findIndex(p => p.stage === currentStage)

  return (
    <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Posture Correction Journey</h2>
      <p className="text-gray-600 mb-6 text-sm">
        Follow this step-by-step path from understanding your posture to complete correction and maintenance.
      </p>
      
      <div className="space-y-4">
        {activePathway.map((step, index) => {
          const isActive = index === currentIndex
          const isCompleted = index < currentIndex
          const isUpcoming = index > currentIndex

          return (
            <div 
              key={index} 
              className={`p-4 rounded-lg border-2 transition-all ${
                isActive 
                  ? 'bg-white border-blue-500 shadow-md' 
                  : isCompleted 
                  ? 'bg-green-50 border-green-300' 
                  : 'bg-white border-gray-200 opacity-75'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Step Number */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  isActive 
                    ? 'bg-blue-600' 
                    : isCompleted 
                    ? 'bg-green-500' 
                    : 'bg-gray-300'
                }`}>
                  {isCompleted ? '✓' : index + 1}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className={`text-lg font-semibold mb-1 ${
                    isActive ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {step.title}
                    {isActive && <span className="ml-2 text-xs font-normal text-blue-600">(You are here)</span>}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {step.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className={`inline-flex items-center text-sm px-3 py-1 rounded-full transition-colors ${
                          isActive
                            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            : isCompleted
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress indicator */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Your Progress</span>
          <span>{currentIndex + 1} of {activePathway.length} stages</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / activePathway.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}

