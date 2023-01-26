import React from "react";
import styles from "./index.module.scss"
import {getNews} from "../../redux/slices/actions";
import {useAppDispatch} from "../../redux/store";

const Header = () => {
  const dispatch = useAppDispatch();
  const refreshNews = () => {
    dispatch(getNews());
  };

  return (
    <header className={`container `+ styles.top}>
      <h1>Hacker news</h1>

      <button className={styles.btn} onClick={refreshNews}>Refresh News</button>
    </header>
  )
}

export default Header;
