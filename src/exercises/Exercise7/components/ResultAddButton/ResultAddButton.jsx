import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultAddButton.module.scss';

const ResultAddButton = props => (
  <button className={styles.ResultAddButton} onClick={props.clicked}>
    {props.name}
  </button>
);

ResultAddButton.propTypes = {
  clicked: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default ResultAddButton;
