import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from './redux/slices/countrySlice';

const Country = () => {
  const dispatch = useDispatch();
  const countryData = useSelector(state => state.countries.countryData);
  const [searchCountry, setSearchCountry] = useState('');

  useEffect(() => {
    dispatch(getCountries());
  }, []);


  const SearchChange = (event) => {
    setSearchCountry(event.target.value);
  };
  const filteredCountries = countryData?.filter(country => {
    return country.name.common.toLowerCase().includes(searchCountry.toLowerCase());
  });

  console.log(countryData);
  return (
    <div>
    <input
      type="text"
      placeholder="поиск"
      value={searchCountry}
      onChange={SearchChange}
    />
    {filteredCountries?.map(country => (
      <div key={country.id}>
        <h2>Country: {country.name.common}</h2>
        <img src={country.flags.png} alt="" />
      </div>
    ))}
  </div>

  );
};

export default Country;
