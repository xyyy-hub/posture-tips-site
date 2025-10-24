import Link from 'next/link'

export default function RelatedArticles({ articles, title = "Related Articles" }) {
  if (!articles || articles.length === 0) return null

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <Link 
            key={index}
            href={article.href}
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
          >
            {article.category && (
              <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800 mb-3">
                {article.category}
              </span>
            )}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {article.description}
            </p>
            {article.readTime && (
              <span className="text-xs text-gray-500">
                📖 {article.readTime}
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}

