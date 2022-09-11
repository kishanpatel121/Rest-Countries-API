import React from "react";
import { useParams, Link } from "react-router-dom";

import { CountriesDataContext } from "../contexts/CountriesDataContext";
import { DarkThemeContext } from "../contexts/DarkThemeContext";
import CountryDetail from "./CountryDetail";

export default function DetailRoute() {
  const { countryCode } = useParams();
  const {
    data: { dataBeenFetched, countriesData },
  } = React.useContext(CountriesDataContext);
  const { darkTheme } = React.useContext(DarkThemeContext);
  const themeClassName = darkTheme ? "dark-detail-route" : "";
  let country = [],
    borderCountries;

  dataBeenFetched && setCountryDetails();

  function setCountryDetails() {
    country = countriesData.filter(
      (country) =>
        country.alpha3Code.toLowerCase() === countryCode.toLowerCase()
    );

    borderCountries =
      country[0].borders &&
      country[0].borders.map((alpha3Code) => {
        for (const item of countriesData) {
          if (item.alpha3Code === alpha3Code) {
            return item;
          }
        }
      });
  }

  return (
    <main className={`detail-route main ${themeClassName}`}>
      <div className="box">
        <Link to="/">
          <button type="button" className="back-btn btn">
            &larr; Back
          </button>
        </Link>

        {!country.length
          ? null
          : country.map((data, index) => (
              <CountryDetail
                key={index}
                countryCode={countryCode.toLocaleLowerCase()}
                data={data}
                borderCountries={borderCountries}
              />
            ))}
      </div>
    </main>
  );
}
