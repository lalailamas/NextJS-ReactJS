"use client";

function Table({ objects, openModal }) {
  return (
    
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <table className="min-w-full border border-collapse ">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Brand
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Perishable
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Season
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Stock
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {objects.map((object) => (
            <tr key={object.id} className="border">
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="flex items-center">
                  <div className="text-sm leading-5 text-gray-800">
                    {object.id}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <span className="text-sm leading-5 text-blue-900">
                  {object.category === null ? "unknown" : object.category}
                </span>
              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                {object.name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              {object.brand === null ? "Unknown" : object.brand}
              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">
                <span
                  className={`relative inline-block px-3 py-1 font-semibold rounded-full
                ${
                  object.perishable === "true"
                    ? "text-green-900 bg-green-200"
                    : object.perishable === "false"
                    ? "text-red-900 bg-red-200"
                    : "text-gray-900 bg-gray-200"
                } leading-tight`}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-50"
                  ></span>
                  <span className="relative text-xs">
                    {object.perishable === "true"
                      ? "True"
                      : object.perishable === "false"
                      ? "False"
                      : "Unknown"}
                  </span>
                </span>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
              {object.season === null ? "transversal" : object.season}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                {object.stock}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                  onClick={() => openModal(object)}>
                    More details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
