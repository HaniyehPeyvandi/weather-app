import { useState } from "react";
import Search from "../Search/Search";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import styles from "./WeatherApp.module.css";
import { FaRegSadCry } from "react-icons/fa";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherInfo = async (cityName) => {
    setLoading(true);
    setError(null);
    setWeatherInfo(null);

    try {
      //make API call to get latitude and longitude of the city
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
      );
      const result = await response.json();
      let lon = result[0].lon;
      let lat = result[0].lat;

      //make API call to get weather information of the city
      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const result2 = await response2.json();
      setWeatherInfo(result2);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
      setWeatherInfo(null);
    }
  };

  return (
    <div className={styles.container}>
      <Search getWeatherInfo={getWeatherInfo} />
      {loading && (
        <div className={styles.spinnerContainer}>
          <div className={styles.spinner}></div>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <span>
            <FaRegSadCry />
          </span>
          <p>{error}</p>
        </div>
      )}
      {weatherInfo && <WeatherDetails weatherInfo={weatherInfo} />}
    </div>
  );
};

export default WeatherApp;
