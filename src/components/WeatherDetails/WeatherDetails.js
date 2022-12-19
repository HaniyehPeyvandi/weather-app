import styles from "./WeatherDetails.module.css";

const WeatherDetails = ({ weatherInfo }) => {
  console.log(weatherInfo);

  const { temp, humidity } = weatherInfo.main;
  const { name: city } = weatherInfo;
  const { country, sunrise, sunset } = weatherInfo.sys;
  const { main: condition } = weatherInfo.weather[0];
  const { speed } = weatherInfo.wind;

  let today = new Date();
  let sunriseDate = new Date(sunrise * 1000);
  let sunsetDate = new Date(sunset * 1000);

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.weatherIcon}>
        <i className="wi wi-day-cloudy"></i>
      </div>
      <div className={styles.weatherDesc}>
        <div className={styles.degree}>
          <p>{Math.round(temp)}&deg;</p>
        </div>
        <div className={styles.weatherInfo}>
          <p className={styles.weatherCondition}>{condition}</p>
          <p>
            {city}, {country}
          </p>
        </div>
        <div className={styles.time}>
          <p>{today.toLocaleDateString()}</p>
          <p>{today.toLocaleTimeString()}</p>
        </div>
      </div>
      <div className={styles.weatherDetails}>
        <div className={styles.weatherItem}>
          <div>
            <i className="wi wi-sunrise"></i>
          </div>
          <div>
            <p>{sunriseDate.toLocaleTimeString()}</p>
            <p>Sunrise</p>
          </div>
        </div>
        <div className={styles.weatherItem}>
          <div>
            <i className="wi wi-sunset"></i>
          </div>
          <div>
            <p>{sunsetDate.toLocaleTimeString()}</p>
            <p>Sunset</p>
          </div>
        </div>
        <div className={styles.weatherItem}>
          <div>
            <i className="wi wi-humidity"></i>
          </div>
          <div>
            <p>{humidity}</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className={styles.weatherItem}>
          <div>
            <i className="wi wi-strong-wind"></i>
          </div>
          <div>
            <p>{speed} m/s</p>
            <p>Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
