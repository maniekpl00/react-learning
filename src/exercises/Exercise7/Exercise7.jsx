import React from 'react';
import { Provider } from 'react-redux';
import ExerciseLayout from '../../layouts/ExerciseLayout/ExerciseLayout';
import CounterHandler from './containers/CounterHandler/CounterHandler';
import configureStore from './store';
import ResultsHandler from './containers/ResultsHandler/ResultsHandler';

const store = configureStore();

const Exercise7 = () => {
  return (
    <Provider store={store}>
      <ExerciseLayout>
        <CounterHandler />
        <ResultsHandler />
      </ExerciseLayout>
    </Provider>
  );
};

export default Exercise7;
