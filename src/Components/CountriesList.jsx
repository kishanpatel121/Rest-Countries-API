import React from "react";
import { nanoid } from "nanoid";

import { CountriesDataContext } from "../contexts/CountriesDataContext";
import Country from "./Country";

export default function CountriesList(props) {
  const {
    data: { countriesData, filteredData, dataBeenFiltered },
  } = React.useContext(CountriesDataContext);

  const neededCountriesData = dataBeenFiltered ? filteredData : countriesData;

  const countryElements = neededCountriesData.map((country) => (
    <Country
      key={nanoid()}
      name={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital || ""}
      flag={country.flags.svg}
      alpha3Code={country.alpha3Code}
    />
  ));

  return <div className="countries-list">{countryElements}</div>;
}

{
  /* <div className="search-box">
        <img className="search-icon" src={search} alt="search icon" />
        <input
          type="text"
          name="search"
          className="search-input"
          placeholder="Search for a country..."
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.target.value.length === 1) {
              props.searchName(event);
            }
          }}
        />
      </div> */
}
{
  /* <select
        name="region"
        id="region"
        className="filter-region"
        value={props.region}
        onChange={(event) => props.filterRegion(event)}
      >
        <option value="" hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="asia">Oceania</option>
      </select> */
}
