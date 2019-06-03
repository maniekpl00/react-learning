import initialState from './initialState';
import * as actionTypes from '../actions/action-types';

export default function counterReducer(state = initialState.counter, action) {
  switch (action.type) {
    case actionTypes.COUNTER_INCREMENT:
      return state + 1;

    case actionTypes.COUNTER_DECREMENT:
      return state - 1;

    case actionTypes.COUNTER_ADD:
      return state + action.value;

    case actionTypes.COUNTER_SUBSTRACT:
      return state - action.value;

    default:
      return state;
  }
}
