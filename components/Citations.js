export default function Citations({ references }) {
  if (!references || references.length === 0) return null
  
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Medical References</h3>
      <div className="bg-gray-50 p-4 rounded-lg">
        <ol className="space-y-2">
          {references.map((ref, index) => (
            <li key={index} className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">{index + 1}.</span>{' '}
              {ref.authors} ({ref.year}). {ref.title}.{' '}
              <em className="text-gray-600">{ref.journal}</em>
              {ref.volume && `, ${ref.volume}`}
              {ref.pages && `, ${ref.pages}`}.{' '}
              {ref.url && (
                <a 
                  href={ref.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed]
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
