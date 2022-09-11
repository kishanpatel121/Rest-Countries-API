import light_theme_moon from "../assets/light-theme-moon.svg";
import dark_theme_moon from "../assets/dark-theme-moon.svg";
import { DarkThemeContext } from "../contexts/DarkThemeContext";
import React from "react";

export default function Header(props) {
  const {darkTheme, toggleTheme} = React.useContext(DarkThemeContext);
  const themeClassName = darkTheme ? "dark-header" : "";

  return (
    <header className={`header ${themeClassName}`}>
      <div className="box header-box">
        <h1>Where in the world?</h1>
        <div className="theme-toggle" onClick={toggleTheme}>
          <img
            className="theme-img"
            src={darkTheme ? dark_theme_moon : light_theme_moon}
            alt="half-moon indicating theme"
          />
          <p className="theme-text">Dark Mode</p>
        </div>
      </div>
    </header>
  );
}
