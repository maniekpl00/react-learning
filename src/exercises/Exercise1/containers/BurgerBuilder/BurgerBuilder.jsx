import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import usePurchasing from './usePurchasing/usePurchasing';
import useIngredientsData from './useIngredientsData/useIngredientsData';
import Spinner from '../../../../components/Spinner/Spinner';

function BurgerBuilder(props) {
  const {
    ingredientsData,
    totalPrice,
    purchaseable,
    loading,
    handleAddIngredient,
    handleRemoveIngredient
  } = useIngredientsData();

  const {
    purchasing,
    handlePurchasing,
    handleCancelPurchasing,
    handleContinuePurchasing,
  } = usePurchasing(false, props);


  const disabledInfo = () => {
    const disabledInfo = { ...ingredientsData.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return disabledInfo;
  }

  return !loading && ingredientsData ? (
    <>
      <Modal show={purchasing} closed={() => handleCancelPurchasing()}>
        <OrderSummary
          ingredients={ingredientsData.ingredients}
          price={totalPrice}
          purchaseCanceled={handleCancelPurchasing}
          purchaseContinued={() => handleContinuePurchasing(ingredientsData.ingredients, totalPrice)}
        />
      </Modal>
      <div style={{ height: '300px', marginTop: "50px", flexGrow: "1" }}>
        <Burger ingredients={ingredientsData.ingredients} />
      </div>
      <BuildControls
        totalPrice={totalPrice}
        addIngredient={handleAddIngredient}
        removeIngredient={handleRemoveIngredient}
        disabledInfo={disabledInfo()}
        purchaseable={purchaseable}
        ordered={handlePurchasing}
      />
    </>
  ) : (
    <Spinner
      style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
    />
  );
}

export default BurgerBuilder;
