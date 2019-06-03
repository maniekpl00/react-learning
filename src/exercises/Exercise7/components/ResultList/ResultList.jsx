import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem/ResultItem';
import styles from './ResultList.module.scss';

const ResultList = props => (
  <ul className={styles.ResultList}>
    {props.results.map(result => (
      <ResultItem key={result.id} result={result} clicked={props.removeResult} />
    ))}
  </ul>
);

ResultList.propTypes = {
  removeResult: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};

export default ResultList;
