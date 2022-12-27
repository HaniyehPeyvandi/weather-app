import { useEffect, useRef, useState } from "react";
import styles from "./Search.module.css";
import { toast } from "react-toastify";

const Search = ({ getWeatherInfo }) => {
  const [cityName, setCityName] = useState("tehran");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    getWeatherInfo(cityName);
  }, []);

  const clickHandler = () => {
    if (!cityName || cityName === "") {
      toast.error("Please enter city name", { autoClose: 3000 });
      return;
    }
    getWeatherInfo(cityName);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (!cityName || cityName === "") {
        toast.error("Please enter city name", { autoClose: 3000 });
        return;
      }
      getWeatherInfo(cityName);
    }
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Enter city name..."
        className={styles.searchInput}
        ref={inputRef}
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className={styles.searchBtn}
        onClick={clickHandler}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
