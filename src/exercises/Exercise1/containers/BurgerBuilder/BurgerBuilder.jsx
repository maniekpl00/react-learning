import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
  salad: 0.3,
  cheese: 1,
  meat: 1.7,
  bacon: 2
};

function useTotalPrice(initialValue) {
  const [totalPrice, setTotalPrice] = useState(initialValue);

  const handlePriceChange = (type, action) => {
    const price = INGREDIENTS_PRICES[type];
    if (action === 'LESS') {
      setTotalPrice(totalPrice - price);
    } else if (action === 'MORE') {
      setTotalPrice(totalPrice + price);
    }
  };

  return {
    totalPrice,
    handlePriceChange
  };
}

function useIngredients(initialValue, updatePurchaseable) {
  const [ingredients, setIngredients] = useState(initialValue);
  const { totalPrice, handlePriceChange } = useTotalPrice(
    Object.keys(initialValue)
      .map((key, i, self) => INGREDIENTS_PRICES[key] * initialValue[key])
      .reduce((a, b) => a + b)
  );

  const handleAddIngredient = type => {
    const newIngredients = {
      ...ingredients,
      [type]: ingredients[type] + 1
    };
    setIngredients(newIngredients);
    handlePriceChange(type, 'MORE');
    updatePurchaseable(newIngredients);
  };

  const handleRemoveIngredient = type => {
    const ingredientsCount = ingredients[type];
    if (ingredientsCount > 0) {
      const newIngredients = {
        ...ingredients,
        [type]: ingredientsCount - 1
      };
      setIngredients(newIngredients);
      handlePriceChange(type, 'LESS');
      updatePurchaseable(newIngredients);
    }
  };

  return {
    ingredients,
    totalPrice,
    handleAddIngredient,
    handleRemoveIngredient
  };
}

function usePurchaseable(initialValue) {
  const [purchaseable, setPurchaseable] = useState(initialValue);

  const updatePurchaseable = ingredientsState => {
    const ingredients = { ...ingredientsState };
    const sum = Object.keys(ingredients)
      .map(ig => ingredients[ig])
      .reduce((sum, el) => sum + el, 0);
    setPurchaseable(sum > 0);
  };

  return {
    purchaseable,
    updatePurchaseable
  };
}

function usePurchasing(initialValue) {
  const [purchasing, setPucharsing] = useState(initialValue);

  const handlePurchasing = () => {
    setPucharsing(true);
  };

  const handleCancelPurchasing = () => {
    setPucharsing(false);
  };

  const handleContinuePurchasing = () => {
    alert('You continue');
  };

  return {
    purchasing,
    handlePurchasing,
    handleCancelPurchasing,
    handleContinuePurchasing
  };
}

function BurgerBuilder() {
  const { purchaseable, updatePurchaseable } = usePurchaseable(true);
  const {
    purchasing,
    handlePurchasing,
    handleCancelPurchasing,
    handleContinuePurchasing
  } = usePurchasing(false);
  const { ingredients, totalPrice, handleAddIngredient, handleRemoveIngredient } = useIngredients(
    {
      salad: 1,
      bacon: 1,
      cheese: 0,
      meat: 0
    },
    updatePurchaseable
  );

  const disabledInfo = () => {
    const disabledInfo = { ...ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return disabledInfo;
  };

  return (
    <>
      <Modal show={purchasing} closed={() => handleCancelPurchasing()}>
        <OrderSummary
          ingredients={ingredients}
          price={totalPrice}
          purchaseCanceled={handleCancelPurchasing}
          purchaseContinued={handleContinuePurchasing}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        totalPrice={totalPrice}
        addIngredient={handleAddIngredient}
        removeIngredient={handleRemoveIngredient}
        disabledInfo={disabledInfo()}
        purchaseable={purchaseable}
        ordered={handlePurchasing}
      />
    </>
  );
}

export default BurgerBuilder;
