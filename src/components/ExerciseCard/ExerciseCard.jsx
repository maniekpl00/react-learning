import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ExerciseCard.scss';

function ExerciseCard({ exercise, ...props }) {
  const { path, name, description } = exercise;

  return (
    <section className={styles.exerciseCard}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.data}>
        <Link className={styles.link} to={path}>{path}</Link>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}

export default ExerciseCard;
