import React from "react";
import { Link } from "react-router-dom";

export default function BorderCountries(props) {
  const borderBtnElement = props.borderCountries && props.borderCountries.map((country, index) => {
    return (
      <Link key={index} to={`/detail/${country.alpha3Code}`}>
        <button className="border-country-btn btn">{country.name}</button>
      </Link>
    );
  })

  return (
    <div className="border-country-data">
      <h4>Border Countries:</h4>
      <div className="border-country-btn-list">
        {borderBtnElement}
      </div>
    </div>
  );
}