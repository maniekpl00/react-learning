import React from 'react';
import styles from './Loader.module.scss';

const Loader = (props) => (
  <div className={styles.Loader} style={props.style}>
    <div></div><div></div><div></div><div></div>
  </div>
);


export default Loader;
