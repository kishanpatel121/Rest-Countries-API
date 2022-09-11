import React from "react";

import { CountriesDataContext } from "../contexts/CountriesDataContext";
import { DarkThemeContext } from "../contexts/DarkThemeContext";
import search from "../assets/search.svg";

export default function SearchBox(props) {
  const { toggleFilter } = React.useContext(CountriesDataContext);
  const { darkTheme } = React.useContext(DarkThemeContext);
  const themeClassName = darkTheme ? "dark-search-box" : "";

  return (
    <div className={`search-box ${themeClassName}`}>
      <img className="search-icon" src={search} alt="search icon" />
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Search for a country..."
        onChange={(e) => toggleFilter({ type: "name", value: e.target.value })}
      />
    </div>
  );
}
