import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
    </li>
  ));
  
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total price: {props.price.toFixed(2)} </strong>
      </p>
      <p>Continue to Checkout ?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </>
  );
};

OrderSummary.propTypes = {
  purchaseCanceled: PropTypes.func,
  pucharseContinued: PropTypes.func,
  ingredients: PropTypes.object,
  price: PropTypes.number
};

export default OrderSummary;
