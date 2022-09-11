import React from "react";

import CountriesList from "./CountriesList";
import FilterRegion from "./FilterRegion";
import SearchBox from "./SearchBox";
import { DarkThemeContext } from "../contexts/DarkThemeContext";

export default function HomeRoute(props) {
  const { darkTheme } = React.useContext(DarkThemeContext);
  const themeClassName = darkTheme ? "dark-main" : "";

  return (
    <main className={`main ${themeClassName}`}>
      <div className="box home-grid-box">
        <SearchBox />
        <FilterRegion />
        <CountriesList />
      </div>
    </main>
  );
}
