import * as actionTypes from './action-types';

export function addResult(newResult) {
  return {
    type: actionTypes.RESULTS_ADD,
    data: newResult
  };
}

export function removeResult(id) {
  return {
    type: actionTypes.RESULTS_REMOVE,
    id
  };
}
