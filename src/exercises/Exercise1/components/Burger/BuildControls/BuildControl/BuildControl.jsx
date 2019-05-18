import React from 'react';
import styles from './BuildControl.scss';

const BuildControl = props => {
  const { label, type, disabled } = props;
  return (
    <div className={styles.BuildControl}>
      <h4 className={styles.Label}>{label}</h4>
      <button className={styles.Less} onClick={() => props.removed(type)} disabled={disabled}>
        Less
      </button>
      <button className={styles.More} onClick={() => props.added(type)}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
