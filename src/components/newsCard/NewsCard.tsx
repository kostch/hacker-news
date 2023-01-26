import React from "react";
import {Link} from "react-router-dom";
import styles from "./index.module.scss";
import {newsType} from "../../redux/slices/news/types";


const NewsCard = (props:newsType) => {
  const {title, score, by, time, descendants} = props;
  const date = new Date(time * 1000).toLocaleString();
  return (
    <Link to={`/item/${props.id}`} className={styles.link}>
      <div className={styles.annotate}>
        <span className={styles.by}>by {by} </span>
        <time>posted on {date}</time>
      </div>
      <div className={styles.wrapper}>
        <h2>{title}</h2>
        <div>
          <span>Rating: {score} | </span>
          {descendants ? (
            <span>Comments: {descendants}</span>
          ) : (
            <span>No comments</span>
          )}
        </div>
      </div>
    </Link>
  )
};

export default NewsCard;
