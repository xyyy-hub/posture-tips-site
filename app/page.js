import Link from 'next/link'
import FAQSection from '../components/FAQSection'
import ShortAnswer from '../components/ShortAnswer'

export const metadata = {
  title: 'Improve Your Posture Naturally | PostureTips.com',
  description: 'Practical, evidence-based tips to improve your posture at home, work, and everywhere else. Simple daily habits for better health.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Improve Your Posture Naturally | PostureTips.com',
    description: 'Practical, evidence-based tips to improve your posture at home, work, and everywhere else. Simple daily habits for better health.',
    url: 'https://www.posturetips.com',
    type: 'website',
  },
}

const faqData = [
  {
    question: "How long does it take to fix posture?",
    answer: "Most people see noticeable improvements in 4-6 weeks with consistent daily practice. Building awareness takes 1-2 weeks, strength improvements appear in weeks 3-4, and new postural habits become automatic after 6-8 weeks of regular exercise and positioning adjustments."
  },
  {
    question: "Can you improve posture at any age?",
    answer: "Yes! Good posture is a learned skill that can be improved at any age. While younger people may see faster results, research shows that seniors and middle-aged adults can significantly improve posture with proper exercises and awareness training. It's never too late to start."
  },
  {
    question: "Do posture correctors work?",
    answer: "Posture correctors provide temporary physical reminders but don't build the muscle strength needed for lasting change. They work best as short-term training tools (2-4 weeks) combined with strengthening exercises, not as permanent solutions. Over-reliance can actually weaken the muscles you need for natural good posture."
  },
  {
    question: "What are signs of bad posture?",
    answer: "Common signs include forward head position (chin juts forward), rounded shoulders, hunched upper back, lower back pain after sitting, headaches by end of day, and fatigue from 'holding yourself up'. You may also notice uneven shoulder height or hip tilt when looking in a mirror."
  },
  {
    question: "Is it too late to fix my posture?",
    answer: "No, it's not too late. While structural changes from decades of poor posture may not fully reverse, you can dramatically improve muscle balance, reduce pain, and develop habits that prevent further deterioration. Even people in their 60s and 70s see meaningful posture improvements with consistent practice."
  },
  {
    question: "Can posture cause health problems?",
    answer: "Yes, chronic poor posture can lead to muscle imbalances, joint wear, spinal misalignment, reduced lung capacity, digestive issues, and chronic pain. Forward head posture adds up to 30 pounds of extra pressure on your spine. However, most posture-related problems are preventable and reversible with early intervention."
  },
  {
    question: "Do I need a doctor to fix my posture?",
    answer: "Most posture problems can be self-corrected with exercises, awareness, and ergonomic adjustments. See a doctor or physical therapist if you have persistent pain despite correct form, numbness/tingling, limited range of motion, previous injuries, or structural issues like scoliosis."
  },
  {
    question: "Are posture exercises safe?",
    answer: "Yes, basic posture exercises (chin tucks, wall angels, bridges, planks) are safe for most people when done with proper form. Start gently, never force through pain, and progress gradually. If you have existing injuries or medical conditions, consult a healthcare provider before starting any new exercise routine."
  }
]

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "PostureTips.com",
            "url": "https://www.posturetips.com",
            "description": "Practical, evidence-based tips to improve your posture at home, work, and everywhere else.",
            "publisher": {
              "@type": "Organization",
              "name": "PostureTips.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.posturetips.com/logo.png"
              }
            }
          })
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Improve Your Posture, <br className="hidden md:block" />
              Improve Your Life
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Practical tips and proven techniques for better posture—no complicated routines or expensive equipment
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/how-to-improve-posture" 
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link 
                href="/tips/office-workers" 
                className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
              >
                Browse Tips
              </Link>
            </div>

            {/* Short Answer Block */}
            <div className="max-w-2xl mx-auto">
              <ShortAnswer>
                Good posture means aligning your body so your bones support you with minimal muscular effort. Small daily adjustments—like sitting properly, standing tall, and taking movement breaks—can dramatically improve your posture in just weeks.
              </ShortAnswer>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Simple & Practical</h3>
                <p className="text-gray-600">
                  No complicated routines. Tips you can use today at home, work, or anywhere.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Evidence-Based</h3>
                <p className="text-gray-600">
                  Backed by research and expert guidance. Real techniques that actually work.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Quick Results</h3>
                <p className="text-gray-600">
                  See improvements in 2-4 weeks with consistency. Build lifelong healthy habits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Guides */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Popular Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/how-to-improve-posture" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">How to Improve Your Posture</h3>
                <p className="text-gray-600 mb-4">Complete guide with exercises, timelines, and daily habits</p>
                <span className="text-primary-600 font-medium">Read guide →</span>
              </Link>

              <Link href="/sitting-posture-guide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Perfect Sitting Posture</h3>
                <p className="text-gray-600 mb-4">Essential for desk workers—setup and break strategies</p>
                <span className="text-primary-600 font-medium">Read guide →</span>
              </Link>

              <Link href="/standing-posture-guide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Standing Posture Guide</h3>
                <p className="text-gray-600 mb-4">Alignment tests and techniques for standing correctly</p>
                <span className="text-primary-600 font-medium">Read guide →</span>
              </Link>

              <Link href="/sleep-posture-guide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Sleep Posture for Spine Health</h3>
                <p className="text-gray-600 mb-4">Best sleeping positions and pillow recommendations</p>
                <span className="text-primary-600 font-medium">Read guide →</span>
              </Link>

              <Link href="/daily-posture-routine" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Daily 10-Minute Routine</h3>
                <p className="text-gray-600 mb-4">Simple exercises to strengthen posture-supporting muscles</p>
                <span className="text-primary-600 font-medium">Read guide →</span>
              </Link>

              <Link href="/desk-ergonomics-guide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Desk Ergonomics Setup</h3>
                <p className="text-gray-600 mb-4">Create the perfect workspace to support good posture</p>
                <span className="text-primary-600 font-medium">Read guide →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Who We Help</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/tips/office-workers" className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="font-semibold mb-2 text-gray-900">Office Workers</h3>
                <p className="text-sm text-gray-600">Desk posture and ergonomic tips</p>
              </Link>

              <Link href="/tips/students" className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="font-semibold mb-2 text-gray-900">Students</h3>
                <p className="text-sm text-gray-600">Study setup and classroom posture</p>
              </Link>

              <Link href="/gaming-posture-guide" className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="font-semibold mb-2 text-gray-900">Gamers</h3>
                <p className="text-sm text-gray-600">Gaming setup and long-session tips</p>
              </Link>

              <Link href="/tips/seniors" className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-semibold mb-2 text-gray-900">Seniors</h3>
                <p className="text-sm text-gray-600">Safe exercises and balance training</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqData} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary-600 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Begin with our complete guide to improving your posture—step-by-step instructions for lasting change.
            </p>
            <Link 
              href="/how-to-improve-posture" 
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Journey
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
