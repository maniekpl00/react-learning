import React from 'react';
import styles from './Button.module.scss';

const Button = props => (
  <button
    className={[styles.Button, !props.error ? styles.Error : styles.Success].join(' ')}
    onClick={props.clicked}
  >
    {props.error ? 'GET: status 200' : 'GET: status 404'}
  </button>
);

export default Button;
