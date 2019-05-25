import React from 'react';
import styles from './Input.module.scss';

const Input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={styles.InputElement}
          name={props.name}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case 'textarea':
      inputElement = (
        <textarea
          className={styles.InputElement}
          name={props.name}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select className={styles.InputElement} name={props.name} onChange={props.changed}>
          {props.elementConfig.options.map(optionEl => (
            <option key={optionEl.value} value={optionEl.value}>
              {optionEl.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={styles.InputElement}
          name={props.name}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }
  return (
    <label className={styles.Input}>
      <span className={styles.Label}>{props.label}</span>
      {inputElement}
    </label>
  );
};

export default Input;
