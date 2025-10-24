export default function SimpleAuthor({ authorName, authorTitle, lastUpdated }) {
  return (
    <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 my-6">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-primary-700 font-bold text-lg">
            {authorName ? authorName.charAt(0) : 'P'}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{authorName || 'PostureTips Team'}</p>
          <p className="text-sm text-gray-500">{authorTitle || 'Posture Improvement Specialists'}</p>
        </div>
      </div>
      {lastUpdated && (
        <div className="text-sm text-gray-500">
          Updated: {new Date(lastUpdated).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      )}
    </div>
  )
}
