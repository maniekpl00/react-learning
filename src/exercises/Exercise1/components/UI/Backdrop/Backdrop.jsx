import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.scss';

const Backdrop = props => {
  return props.show ? <div className={styles.Backdrop} onClick={props.clicked} /> : null;
};

Backdrop.propTypes = {
  clicked: PropTypes.func.isRequired
};

export default Backdrop;
