import React from 'react';
import styles from './CounterDisplay.module.scss';

const CounterDisplay = props => <h2 className={styles.CounterDisplay}>{props.counter}</h2>;

export default CounterDisplay;
