import styles from './Search.module.css';

const Search = () => {
  return ( 
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Enter city name..." className={styles.searchInput}/>
      <button className={styles.searchBtn}>Search</button>
    </div>
   );
}
 
export default Search;