import React, { useState, useEffect } from 'react';
import styles from './RouteInformation.module.scss';

function RouteInformation(props) {
  const [queryState, setQueryState] = useState('');

  useEffect(() => {
    parseQueryParams();
  });

  function parseQueryParams() {
    const query = new URLSearchParams(props.location.search);
    for (let param of query.entries()) {
      if (queryState !== param[1]) {
        setQueryState(param[1]);
      }
    }
  }

  return (
    <section className={styles.RouteInformation}>
      <h2>Routing information</h2>
      <h3>Loading Routes lazily</h3>
      <p>
        <strong>props.match.url:</strong> {props.match.url}
      </p>
      <p>
        <strong>props.match.path:</strong> {props.match.path}
      </p>
      <p>
        <strong>props.match.params.id:</strong> {props.match.params.id}
      </p>
      <p>
        <strong>props.location.pathname:</strong> {props.location.pathname}
      </p>
      <p>
        <strong>props.location.search:</strong> {props.location.search}
      </p>
      <p>
        <strong>URLSearchParams query:</strong> {queryState}
      </p>
    </section>
  );
}

export default RouteInformation;
