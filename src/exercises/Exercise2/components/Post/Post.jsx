import React from 'react';

import styles from './Post.scss';

const post = ({ title, author, ...props }) => (
  <article className={styles.Post} onClick={props.clicked}>
    <h3>{title.length > 10 ? `${title.substr(10)}...` : title}</h3>
    <div className={styles.Info}>
      <div className={styles.Author}>{author}</div>
    </div>
  </article>
);

export default post;
