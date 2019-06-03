import * as actionTypes from '../actions/action-types';
import initialState from './initialState';

export default function resultsReducer(state = initialState.results, action) {
  console.log(state);
  switch (action.type) {
    case actionTypes.RESULTS_ADD:
      return [...state, action.data];

    case actionTypes.RESULTS_REMOVE:
      return state.filter((result) => result.id !== action.id)

    default:
      return state;
  }
}
