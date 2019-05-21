import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

import styles from './ExerciseList.module.scss';

const ExerciseList = (props) => {
  return (
    <div className={styles.exerciseList}>
      {props.exercises.map(exercise => <ExerciseCard key={exercise.name} exercise={exercise} />)}
    </div>
  )
}

export default ExerciseList
