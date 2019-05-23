import React from 'react';

const CardInformation = props => {
  return (
    <section>
      <h2>Routing: {props.match.url}</h2>
      <p>Loading Routes lazily</p>
    </section>
  );
};

export default CardInformation;
