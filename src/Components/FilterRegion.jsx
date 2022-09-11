import React from "react";
import { CountriesDataContext } from "../contexts/CountriesDataContext";
import { DarkThemeContext } from "../contexts/DarkThemeContext";

export default function FilterRegion(props) {
  const [display, setDisplay] = React.useState("none");
  const [arrow, setArrow] = React.useState("down");
  const [selectedRegion, setSelectedRegion] = React.useState("");
  const { toggleFilter } = React.useContext(CountriesDataContext);
  const { darkTheme } = React.useContext(DarkThemeContext);
  const themeClassName = darkTheme ? "dark-menu" : "";
  const region = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  const regionListElement = region.map((region, index) => (
    <button
      key={index}
      className="region-option"
      value={region === "All" ? "" : region.toLowerCase()}
      onClick={(e) => handleOptionSelect(e.target.value)}
    >
      {region}
    </button>
  ));

  function handleOptionSelect(value) {
    setSelectedRegion(value);
    toggleFilter({ value: value, type: "region" });
    handleClick();
  }

  function handleClick() {
    display === "none" ? setDisplay("flex") : setDisplay("none");
    arrow === "down" ? setArrow("up") : setArrow("down")
  }

  return (
    <div className={`menu ${themeClassName}`}>
      <div className="menu-btn" onClick={handleClick}>
        {selectedRegion === "" ? "Filter by Region" : selectedRegion}
        <span className="arrow-box">
          <i className={`arrow ${arrow}`}></i>
        </span>
      </div>
      <div className="menu-list" style={{ display: display }}>
        {regionListElement}
      </div>
    </div>
  );
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
