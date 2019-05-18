import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = props => {
  return (
    <button className={[styles.Button, styles[props.btnType]].join(' ')} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func.isRequired
}

export default Button;
