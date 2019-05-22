import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ExerciseCard.module.scss';
import HyperLink from '../HyperLink/HyperLink';

function ExerciseCard({ exercise, ...props }) {
  const { path, name, description, repositoryURL } = exercise;

  return (
    <section className={styles.exerciseCard}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.data}>
        <div className={styles.linkContainer}>
          <Link className={styles.link} to={path}>
            {path}
          </Link>
          <HyperLink className={styles.link} href={repositoryURL}>
            repository
          </HyperLink>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}

export default ExerciseCard;
