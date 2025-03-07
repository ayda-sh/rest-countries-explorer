import { useEffect, useState } from "react";
import { client } from "../../../lib/axios";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await client.get("/all");
      setCountries(response.data);
      setAllCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

    if (searchTerm) {
      const filterCountries = allCountries.filter((countery) =>
        countery.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCountries(filterCountries);
    } else {
      setCountries(allCountries);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Countries</h1>
      <div className="flex mb-4 gap-4">
        <input
          value={search}
          onChange={handleSearch}
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
        {countries.map((item) => (
          <div
            key={item.cca3}
            className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg"
          >
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              {item.name.common}
            </a>
            <p className="text-gray-700">Region: {item.region}</p>
            <p className="text-gray-700">Population: {item.population}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
