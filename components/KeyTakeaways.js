export default function KeyTakeaways({ takeaways }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-blue-900" id="key-takeaways">
        Key Takeaways
      </h2>
      <ul className="space-y-3 text-blue-800">
        {takeaways.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
