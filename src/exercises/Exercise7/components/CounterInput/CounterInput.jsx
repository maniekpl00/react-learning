import React from 'react';
import styles from './CounterInput.module.scss';

const CounterInput = props => (
  <label className={styles.CounterInput}>
    <span>Number</span>
    <input type="number" value={props.value} onChange={props.changed} min={props.min} max={props.max} />
  </label>
);

export default CounterInput;
