import { useState } from "react";
import styles from "./Search.module.css";

const Search = () => {
  const [cityName, setCityName] = useState("tehran");

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Enter city name..."
        className={styles.searchInput}
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default Search;
