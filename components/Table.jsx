"use client";

function Table({ objects }) {
  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <h1>Table</h1>
      <section class="rounded-lg w-full bg-gray-200 p-5">
        <div class="flex">
          <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="pointer-events-none absolute w-5 fill-gray-500 transition"
            >
              <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
            </svg>
          </div>
          <input
            type="text"
            class="w-full bg-white pl-2 text-base font-semibold outline-0"
            placeholder=""
            id=""
          />
          <input
            type="button"
            value="Search"
            class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
          />
        </div>
      </section>
      <section className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg" />
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
                <div className="text-sm leading-5 text-blue-900">
                  {object.category}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                {object.name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                {object.brand}
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
                {object.season}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                {object.stock}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
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
