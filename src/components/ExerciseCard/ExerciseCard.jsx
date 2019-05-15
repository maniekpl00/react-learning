import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ExerciseCard.scss';

function ExerciseCard(props) {
  return (
    <section className={styles.exerciseCard}>
      <Link to={props.exercise.path}>{props.exercise.name}</Link>
    </section>
  );
}

export default ExerciseCard;
