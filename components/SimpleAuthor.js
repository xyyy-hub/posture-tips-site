export default function SimpleAuthor({ 
  authorName = "PostureTips Team",
  authorTitle = "Posture Improvement Specialists",
  lastUpdated 
}) {
  return (
    <div className="border-t border-b border-gray-200 py-4 my-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">{authorName}</p>
          <p className="text-xs text-gray-600">{authorTitle}</p>
        </div>
        {lastUpdated && (
          <p className="text-xs text-gray-500">
            Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
      </div>
    </div>
  )
}
