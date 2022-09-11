import React from "react";

const DarkThemeContext = React.createContext();

function DarkThemeProvider(props) {
  const [darkTheme, setDarkTheme] = React.useState(false);

  function toggleTheme() {
    setDarkTheme((prevState) => !prevState);
  }

  return (
    <DarkThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {props.children}
    </DarkThemeContext.Provider>
  );
}

export { DarkThemeProvider, DarkThemeContext };
