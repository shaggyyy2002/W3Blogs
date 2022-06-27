import type { NextPage } from "next";
import styles from "../styles/search-bar.module.css";

const SearchBar: NextPage = () => {
  return (
    <div className={styles.searchBarDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.exploreDiv}>Explore</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
