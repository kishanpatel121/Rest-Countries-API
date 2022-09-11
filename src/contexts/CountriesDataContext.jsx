import React from "react";

const FETCH_URL = `https://restcountries.com/v2/all?fields=name,flags,alpha3Code,population,
	region,capital,nativeName,subregion,topLevelDomain,currencies,languages,borders;`;
const CountriesDataContext = React.createContext();

function CountriesDataProvider(props) {
  const [data, setData] = React.useState({
    countriesData: [],
    filteredData: [],
    dataBeenFetched: false,
    dataBeenFiltered: false
  });

  React.useEffect(() => {
    (async () => {
      let fetchedData,
        noLocalData = true;

      try {
        fetchedData = JSON.parse(localStorage.getItem("countriesData"));
        if (fetchedData && fetchedData.length) {
          noLocalData = false;
        } else {
          throw new Error();
        }
      } catch (err) {
        console.log(err);
        const response = await fetch(FETCH_URL);
        fetchedData = await response.json();
      }

      setData((prevState) => ({
        ...prevState,
        countriesData: fetchedData,
        dataBeenFetched: true,
      }));

      if (noLocalData) {
        localStorage.setItem("countriesData", JSON.stringify(fetchedData));
      }
    })();
  }, []);

  function toggleFilter(query) {
    let filteredData = [];
    if (query.value !== "") {
      setData(prevValue => ({
        ...prevValue,
        dataBeenFiltered: true
      }))
    } else {
      setData(prevValue => ({
        ...prevValue,
        dataBeenFiltered: false
      }))
    }

    if (query) {
      filteredData =
        query.type === "name"
          ? nameFilter(query.value)
          : regionFilter(query.value);
    }
    setData((prevValue) => ({
      ...prevValue,
      filteredData: filteredData || [],
    }));
  }

  function regionFilter(region) {
    return data.countriesData.filter((country) =>
      country.region.toLowerCase().includes(region)
    );
  }

  function nameFilter(name) {
    const nameReg = new RegExp(name, "i");
    return data.countriesData.filter((country) =>
      nameReg.test(country.name.toLowerCase())
    );
  }

  return (
    <CountriesDataContext.Provider
      value={{ data: data, toggleFilter: toggleFilter }}
    >
      {props.children}
    </CountriesDataContext.Provider>
  );
}

export { CountriesDataProvider, CountriesDataContext };
