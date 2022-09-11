import React from "react";
import { Link } from "react-router-dom";

import { DarkThemeContext } from "../contexts/DarkThemeContext";

export default function Country(props) {
  const { darkTheme } = React.useContext(DarkThemeContext);
  const themeClassName = darkTheme ? "dark-country-card" : "";
  
  return (
    <Link to={`/detail/${props.alpha3Code}`}>
      <div className={`country-card ${themeClassName}`}>
        <img src={props.flag} alt={`Flag of ${props.name}`} />
        <div className="country-card-detail">
          <h2>{props.name}</h2>
          <p>
            <span className="bold-text">Population: </span>
            {props.population}
          </p>
          <p>
            <span className="bold-text">Region: </span>
            {props.region}
          </p>
          <p>
            <span className="bold-text">Capital: </span>
            {props.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}