export default function ComparisonTable({ title, items, criteria }) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-2 text-left">Option</th>
              {criteria.map(criterion => (
                <th key={criterion} className="border border-gray-300 px-4 py-2 text-left">
                  {criterion}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  {item.name}
                </td>
                {criteria.map(criterion => (
                  <td key={criterion} className="border border-gray-300 px-4 py-2">
                    {item[criterion]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
