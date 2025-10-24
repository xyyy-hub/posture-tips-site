import Link from 'next/link'

export default function InternalLinking({ variant = "intro" }) {
  if (variant === "intro") {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
        <p className="text-blue-800 leading-relaxed">
          <strong>New here?</strong> Start with the{' '}
          <Link href="/neck-hump-guide" className="text-blue-600 hover:underline font-medium">
            Complete Guide
          </Link>
          , then do the{' '}
          <Link href="/neck-hump-exercises" className="text-blue-600 hover:underline font-medium">
            5-minute routine
          </Link>
          , set up your{' '}
          <Link href="/ergonomic-workspace-neck-hump" className="text-blue-600 hover:underline font-medium">
            ergonomic workspace
          </Link>
          , optimize{' '}
          <Link href="/how-to-sleep-with-neck-hump" className="text-blue-600 hover:underline font-medium">
            sleep
          </Link>
          , and pick a{' '}
          <Link href="/best-pillow-for-neck-hump" className="text-blue-600 hover:underline font-medium">
            pillow
          </Link>
          {' '}that fits.
        </p>
      </div>
    )
  }

  if (variant === "next-steps") {
    return (
      <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-8 rounded-lg">
        <h3 className="text-lg font-semibold text-emerald-900 mb-3">Your Next Steps</h3>
        <div className="grid md:grid-cols-2 gap-4 text-emerald-800">
          <div>
            <Link href="/neck-hump-exercises" className="block hover:bg-white p-3 rounded transition-colors">
              <span className="font-medium text-emerald-600">→ Start Exercises</span>
              <p className="text-sm">Begin the daily 5-minute routine</p>
            </Link>
          </div>
          <div>
            <Link href="/ergonomic-workspace-neck-hump" className="block hover:bg-white p-3 rounded transition-colors">
              <span className="font-medium text-emerald-600">→ Fix Your Workspace</span>
              <p className="text-sm">Set up proper ergonomics</p>
            </Link>
          </div>
          <div>
            <Link href="/how-to-sleep-with-neck-hump" className="block hover:bg-white p-3 rounded transition-colors">
              <span className="font-medium text-emerald-600">→ Improve Sleep</span>
              <p className="text-sm">Optimize sleeping position</p>
            </Link>
          </div>
          <div>
            <Link href="/best-pillow-for-neck-hump" className="block hover:bg-white p-3 rounded transition-colors">
              <span className="font-medium text-emerald-600">→ Choose Pillow</span>
              <p className="text-sm">Find the right support</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return null
}

