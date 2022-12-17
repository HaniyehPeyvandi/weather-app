import styles from "./WeatherDetails.module.css";

const WeatherDetails = ({weatherInfo}) => {
  var today = new Date();
  var date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    console.log(weatherInfo);

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.weatherIcon}>
        <i className="wi wi-day-cloudy"></i>
      </div>
      <div className={styles.weatherDesc}>
        <div className={styles.degree}>
          <p>32.05&deg;</p>
        </div>
        <div className={styles.weatherInfo}>
          <p className={styles.weatherCondition}>HAZE</p>
          <p>Tehran, IRAN</p>
        </div>
        <div className={styles.time}>
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
      <div className={styles.weatherDetails}>
        <div className={styles.weatherItem}>
          <div>
            <i className="wi wi-sunrise"></i>
          </div>
          <div>
            <p>6:12 AM</p>
            <p>Sunrise</p>
          </div>
        </div>
        <div className={styles.weatherItem}>
          <div>
            <i className="wi wi-sunset"></i>
          </div>
          <div>
            <p>18:12 PM</p>
            <p>Sunset</p>
          </div>
        </div>
        <div className={styles.weatherItem}>
          <div>
            <i className="wi wi-humidity"></i>
          </div>
          <div>
            <p>66</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className={styles.weatherItem}>
          <div>
            <i className="wi wi-strong-wind"></i>
          </div>
          <div>
            <p>1.54</p>
            <p>Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
