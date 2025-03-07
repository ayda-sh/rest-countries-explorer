export const CountryInfo = () => {
  return (
    <div className="grid grid-cols-2 mx-10 py-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">Grenada</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Official Name:</span>
          Grenada
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Capital:</span>
          St. George's
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Region:</span>
          Americas
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Subregion:</span>
          Caribbean
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Population:</span>
          112,519
        </p>
      </div>
      <div>
        <img
          className="rounded w-80 h-auto  shadow-lg"
          src="src/assets/screen-0.webp"
          alt=""
        />
      </div>
    </div>
  );
};
