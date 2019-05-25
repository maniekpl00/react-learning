import { useState } from 'react';

function usePurchasing(initialValue, props) {
  const [purchasing, setPucharsing] = useState(initialValue);

  const handlePurchasing = () => {
    setPucharsing(true);
  };

  const handleCancelPurchasing = () => {
    setPucharsing(false);
  };

  const handleContinuePurchasing = (ingredients, totalPrice) => {
    const queryParams = [];
    for (let i in ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
    }
    queryParams.push('price=' + totalPrice);
    const queryString = queryParams.join('&');
    props.history.push({
      pathname: `${props.match.path}/checkout`,
      search: '?' + queryString
    });
  };

  return {
    purchasing,
    handlePurchasing,
    handleCancelPurchasing,
    handleContinuePurchasing
  };
}

export default usePurchasing;
