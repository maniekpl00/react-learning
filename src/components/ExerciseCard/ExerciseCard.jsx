import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ExerciseCard.scss';

function ExerciseCard({ exercise, ...props }) {
  const { path, name, description } = exercise;

  return (
    <section className={styles.exerciseCard}>
      <h2>{name}</h2>
      <div className={styles.data}>
        <Link to={path}>{path}</Link>
        <p>Description - {description}</p>
      </div>
    </section>
  );
}

export default ExerciseCard;
