import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = (props) => (
  <div className={styles.Spinner} style={props.style}>
    <div></div><div></div><div></div><div></div>
  </div>
);


export default Spinner;
