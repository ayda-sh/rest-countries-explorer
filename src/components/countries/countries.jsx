export const Countries = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Countries</h1>
      <div className="flex mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="flex-grow border border-gray-300 p-2 rounded w-full"
        />
        <select className="border border-gray-300 p-2 rounded w-full">
          <option>All Regions</option>
          <option>Americas</option>
          <option>Europe</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Antarctic</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg">
          <a href="#" className="font-semibold text-blue-600 hover:underline">South Georgia</a>
          <p className="text-gray-700">Region: Antarctic</p>
          <p className="text-gray-700">Population: 30</p>
        </div>
      </div>
    </div>
  );
};
