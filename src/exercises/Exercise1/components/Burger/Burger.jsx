import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burger.module.scss';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients, ...props }) => {
  const transformedIngredients = Object.keys(ingredients)
    .map(type =>
      [...Array(ingredients[type])].map((_, i) => <BurgerIngredient key={type + i} type={type} />)
    )
    .reduce((arr, el) => arr.concat(el), []);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length > 0 ? (
        transformedIngredients
      ) : (
        <p>Please start adding ingredients</p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object
};

export default Burger;
