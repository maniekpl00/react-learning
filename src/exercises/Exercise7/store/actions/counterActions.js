import * as actionTypes from './action-types';

export function incrementCounter() {
  return {
    type: actionTypes.COUNTER_INCREMENT
  }
}

export function decrementCounter() {
  return {
    type: actionTypes.COUNTER_DECREMENT
  }
}

export function addCounter(value) {
  return {
    type: actionTypes.COUNTER_ADD,
    value
  }
}

export function substractCounter(value) {
  return {
    type: actionTypes.COUNTER_SUBSTRACT,
    value
  }
}

