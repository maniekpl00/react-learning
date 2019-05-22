import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = props => {
  return (
    <div
      className={styles.Spinner}
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default Spinner;
