import Link from 'next/link'

export default function PeopleAlsoAsk({ questions, includeSchema = true }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">People Also Ask</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <details key={index} className="bg-gray-50 p-6 rounded-lg">
            <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600 focus:text-blue-600 focus:outline-none">
              {item.question}
            </summary>
            <div className="mt-4 text-gray-700">
              <p>{item.answer}</p>
              {item.link && (
                <Link href={item.link} className="text-blue-600 hover:underline mt-2 inline-block">
                  Learn more →
                </Link>
              )}
            </div>
          </details>
        ))}
      </div>
      
      {/* Schema for PAA - only include if includeSchema is true */}
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": questions.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      )}
    </section>
  )
}
