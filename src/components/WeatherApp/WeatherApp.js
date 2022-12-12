import Search from "../Search/Search";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import styles from './WeatherApp.module.css';

const WeatherApp = () => {
  return ( 
    <div className={styles.container}>
      <Search/>
      <WeatherDetails/>
    </div>
   );
}
 
export default WeatherApp;