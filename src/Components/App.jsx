import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import HomeRoute from "./HomeRoute";
import DetailRoute from "./DetailRoute";
import { CountriesDataProvider } from "../contexts/CountriesDataContext";
import { DarkThemeProvider } from "../contexts/DarkThemeContext";

export default function App() {
  

  return (
    <>
      <Header />
      <CountriesDataProvider>
        <Routes>
          <Route exact path="/" element={<HomeRoute />} />
          <Route path="/detail/:countryCode" element={<DetailRoute />} />
        </Routes>
      </CountriesDataProvider>
    </>
  );
}
