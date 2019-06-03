import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultItem.module.scss';

const ResultItem = ({ result, ...props }) => {
  return (
    <li className={styles.ResultItem} onClick={props.removeResult}>
      {result}
    </li>
  );
};

ResultItem.propTypes = {
  removeResult: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired
};

export default ResultItem;
