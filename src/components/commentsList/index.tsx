import React from "react";
import Comment from "../comment/Comment";
import styles from "./index.module.scss"
import {commentsType} from "../../redux/slices/news/types";


function CommentsList(props: any) {
  const {comments} = props;

  return (
    <section className={styles.comments + " comment"}>
      {comments.map((comment: commentsType) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </section>
  )
}

export default CommentsList;
