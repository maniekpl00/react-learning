import React, { useMemo } from 'react';
import styles from './CounterButton.module.scss';

const CounterButton = props => {
  return useMemo(
    () => (
      <button className={styles.CounterButton} onClick={props.clicked} disabled={props.disabled}>
        {props.value}
      </button>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.value, props.disabled]
  );
};

export default CounterButton;
