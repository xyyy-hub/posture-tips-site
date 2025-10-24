export default function ShortAnswer({ children }) {
  return (
    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 my-8 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-emerald-900" id="short-answer">
        Short Answer
      </h2>
      <div className="text-emerald-800 text-lg leading-relaxed">
        {children}
      </div>
    </div>
  )
}
