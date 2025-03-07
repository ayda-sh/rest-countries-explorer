import React, { useState, useEffect } from "react";  
import { useParams } from "react-router-dom";  
import { client } from "../../../lib/axios";  

export const CountryInfo = () => {  
  const { countryCode } = useParams();  
  const [country, setCountry] = useState(null);  

  useEffect(() => {  
    const getCountriesInfo = async () => {  
      try {  
        const response = await client.get(`/alpha/${countryCode}`);  
        setCountry(response.data[0]);  
      } catch (error) {  
        console.log(error);   
      }  
    };  

    getCountriesInfo();  
  }, [countryCode]);  

  if (!country) {  
    return <div className="text-center">Loading...</div>;
  }  

  const { name, capital, region, subregion, population, flags } = country;  

  return (  
    <div className="grid grid-cols-2 mx-10 py-10">  
      <div className="space-y-2">  
        <h2 className="text-3xl font-bold text-gray-900 mb-5">{name.common}</h2>  
        <p className="text-gray-700">  
          <span className="font-semibold">Official Name:</span>  
          {name.official}  
        </p>  
        <p className="text-gray-700">  
          <span className="font-semibold">Capital:</span>  
          {capital ? capital[0] : "N/A"}  
        </p>  
        <p className="text-gray-700">  
          <span className="font-semibold">Region:</span>  
          {region}  
        </p>  
        <p className="text-gray-700">  
          <span className="font-semibold">Subregion:</span>  
          {subregion}  
        </p>  
        <p className="text-gray-700">  
          <span className="font-semibold">Population:</span>  
          {population}  
        </p>  
      </div>  
      <div>  
        <img  
          className="rounded w-80 h-auto shadow-lg"  
          src={flags.png}  
          alt={name.common}  
        />  
      </div>  
    </div>  
  );  
};  