import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Components/App";
import { DarkThemeProvider } from "./contexts/DarkThemeContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <DarkThemeProvider>
      <App />
    </DarkThemeProvider>
  </Router>
);
