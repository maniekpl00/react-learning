import { useState, useEffect } from 'react';
import ingredientsPriceApi from '../../../api/ingredientsPriceApi';
import ingredientsApi from '../../../api/ingredientsApi';

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

function useIngredients() {
  const [ingredientsData, setIngredientsData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const { purchaseable, updatePurchaseable } = usePurchaseable(true);

  const fetchData = async () => {
    try {
      const priceResponse = await ingredientsPriceApi.fetchIngredientsPrice();
      const ingredientsResponse = await ingredientsApi.fetchDefaultIngredients();
      const ingredientsPrice = priceResponse.data;
      const ingredients = ingredientsResponse.data;
      setTotalPrice(
        Object.keys(ingredients)
          .map((key, i, self) => ingredientsPrice[key] * ingredients[key])
          .reduce((a, b) => a + b)
      );
      setIngredientsData({ ingredients, ingredientsPrice });
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePriceChange = (type, action) => {
    const price = ingredientsData.ingredientsPrice[type];
    if (action === 'LESS') {
      setTotalPrice(totalPrice - price);
    } else if (action === 'MORE') {
      setTotalPrice(totalPrice + price);
    }
  };

  const handleAddIngredient = type => {
    const ingredients = {
      ...ingredientsData.ingredients,
      [type]: ingredientsData.ingredients[type] + 1
    };
    setIngredientsData({ ...ingredientsData, ingredients });
    handlePriceChange(type, 'MORE');
    updatePurchaseable(ingredients);
  };

  const handleRemoveIngredient = type => {
    const ingredientsCount = ingredientsData.ingredients[type];
    if (ingredientsCount > 0) {
      const ingredients = {
        ...ingredientsData.ingredients,
        [type]: ingredientsCount - 1
      };
      setIngredientsData({ ...ingredientsData, ingredients });
      handlePriceChange(type, 'LESS');
      updatePurchaseable(ingredients);
    }
  };

  return {
    ingredientsData,
    handleAddIngredient,
    handleRemoveIngredient,
    totalPrice,
    purchaseable,
    loading
  };
}

export default useIngredients;
