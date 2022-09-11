import BorderCountries from "./BorderCountries";

export default function CountryDetail(props) {
  const counryCode = props.countryCode;

  return (
    <div className="country-detail">
      <img
        className="country-detail-img"
        src={props.data.flags.svg}
        alt="country-flag"
      />

      <div className="country-data">
        <h3 className="country-data-title">{props.data.name}</h3>

        <div className="country-data-1">
          <p>
            <span className="bold-text">Native Name: </span>
            {props.data.nativeName}
          </p>
          <p>
            <span className="bold-text">Population: </span>
            {props.data.population}
          </p>
          <p>
            <span className="bold-text">Region: </span>
            {props.data.region}
          </p>
          <p>
            <span className="bold-text">Sub Region: </span>
            {props.data.subregion}
          </p>
          <p>
            <span className="bold-text">Capital: </span>
            {props.data.capital}
          </p>
        </div>

        <div className="country-data-2">
          <p>
            <span className="bold-text">Top Level Domain: </span>
            {props.data.topLevelDomain[0]}
          </p>
          <p>
            <span className="bold-text">Currencies: </span>
            {props.data.currencies.map((currency) => currency.name).join(", ")}
          </p>
          <p>
            <span className="bold-text">Languages: </span>
            {props.data.languages.map((language) => language.name).join(", ")}
          </p>
        </div>

        <BorderCountries borderCountries={props.borderCountries} />
      </div>
    </div>
  );
}
