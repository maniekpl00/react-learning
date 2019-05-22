import React from 'react';
import styles from './Todo.module.scss';

const Todo = props => {
  return (
    <section className={styles.Todo}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </section>
  );
};

export default Todo;
