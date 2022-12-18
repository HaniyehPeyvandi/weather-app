import { useState } from "react";
import Search from "../Search/Search";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import styles from "./WeatherApp.module.css";

const WeatherApp = () => {
  const [weatherInfo,setWeatherInfo] = useState();

  const getWeatherInfo = async (cityName) => {
    try {
      //make API call to get latitude and longitude of the city
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
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

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Search getWeatherInfo={getWeatherInfo} />
      {weatherInfo && <WeatherDetails weatherInfo={weatherInfo}/>}
    </div>
  );
};

export default WeatherApp;
