'use client'

import { useState } from 'react'

export default function FAQSection({ faqs, title = "Frequently Asked Questions", includeSchema = true }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              <svg
                className={`w-5 h-5 text-gray-700 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4">
                <div className="text-gray-700 leading-relaxed">
                  {typeof faq.answer === 'string' ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FAQ Schema Markup - only include if includeSchema is true */}
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": typeof faq.answer === 'string' ? faq.answer : faq.answer.props?.children || ''
                }
              }))
            })
          }}
        />
      )}
    </section>
  )
}

// Predefined FAQ sets for different topics
export const neckHumpFAQs = [
  {
    question: "How long does it take to fix a neck hump?",
    answer: "With consistent daily practice, most people see improvements in 2-4 weeks and significant changes in 6-8 weeks. Complete correction typically takes 3-6 months depending on severity and consistency with exercises and ergonomic changes."
  },
  {
    question: "Can neck hump be completely reversed?",
    answer: "Yes, neck hump (forward head posture) can often be significantly improved or reversed, especially if it's primarily postural rather than structural. The key is addressing both the muscular imbalances and the habits that created the problem."
  },
  {
    question: "What's the difference between neck hump and dowager's hump?",
    answer: "Neck hump (forward head posture) involves the head jutting forward, while dowager's hump is an excessive curve in the upper back (thoracic kyphosis). They often occur together but require different treatment approaches."
  },
  {
    question: "Is surgery necessary for neck hump?",
    answer: "Surgery is rarely necessary for neck hump. Most cases are postural and respond well to targeted exercises, ergonomic improvements, and lifestyle changes. Surgery is only considered for severe structural deformities with neurological symptoms."
  },
  {
    question: "Can sleeping position cause neck hump?",
    answer: "Yes, poor sleeping positions can contribute to neck hump development. Sleeping on your stomach or with too many pillows forces your neck into forward flexion for 6-8 hours nightly, reinforcing the forward head posture."
  }
]

export const exerciseFAQs = [
  {
    question: "How often should I do neck hump exercises?",
    answer: "Perform neck hump exercises daily for best results. Start with 5-10 minutes per day and gradually increase. Consistency is more important than duration - even 3 minutes daily is better than 30 minutes once a week."
  },
  {
    question: "Should I feel pain during neck exercises?",
    answer: "No, you should never feel pain during exercises. You may feel mild muscle tension or stretching, but sharp pain indicates you're doing something wrong or pushing too hard. Stop immediately if you experience pain."
  },
  {
    question: "When will I see results from neck exercises?",
    answer: "Most people notice improved awareness and reduced stiffness within 1-2 weeks. Visible posture improvements typically appear after 4-6 weeks of consistent practice. Full correction may take 3-6 months."
  }
]
