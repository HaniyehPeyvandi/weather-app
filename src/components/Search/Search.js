import { useEffect, useState } from "react";
import styles from "./Search.module.css";

const Search = ({ getWeatherInfo }) => {
  const [cityName, setCityName] = useState("tehran");

  useEffect(() => {
    getWeatherInfo(cityName);
  }, []);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Enter city name..."
        className={styles.searchInput}
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button
        className={styles.searchBtn}
        onClick={() => getWeatherInfo(cityName)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
