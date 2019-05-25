import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import Spinner from '../../../../components/Spinner/Spinner';

function Checkout(props) {
  const [state, setState] = useState({
    ingredients: null,
    totalPrice: 0
  });

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    let totalPrice = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        totalPrice = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    setState({ ingredients, totalPrice });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace(`${props.match.url}/contact-data`);
  };
  if (!state.ingredients) {
    return <Spinner />;
  }
  
  return (
    <div>
      <CheckoutSummary
        ingredients={state.ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={props.match.path + '/contact-data'}
        render={props => (
          <ContactData ingredients={state.ingredients} price={state.totalPrice} {...props} />
        )}
      />
    </div>
  );
}

export default Checkout;
