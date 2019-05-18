import React from 'react';
import styles from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => {
  const { purchaseable } = props;
  const totalPrice = props.totalPrice <= 0 ? 0 : props.totalPrice.toFixed(2);
  return (
    <div className={styles.BuildControls}>
      <h2>Total price {totalPrice}</h2>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          added={props.addIngredient}
          removed={props.removeIngredient}
          disabled={props.disabledInfo[ctrl.type]}
        />
      ))}
      <button className={styles.OrderButton} disabled={!purchaseable} onClick={props.ordered}>
        Order now
      </button>
    </div>
  );
};

export default BuildControls;
