import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ExerciseLayout from '../../layouts/ExerciseLayout/ExerciseLayout';
import Exercise5Page from './pages/Exercise5Page/Exercise5Page';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const AsyncNewCardInformation = asyncComponent(() => {
  return import('./components/CardInformation/CardInformation');
});

const Exercise5 = props => {
  return (
    <ExerciseLayout>
      <Navigation />
      <Switch>
        <Route path={`${props.match.path}/:id`} component={AsyncNewCardInformation} />
        <Route path={props.match.path} component={Exercise5Page} />
      </Switch>
    </ExerciseLayout>
  );
};

export default withRouter(Exercise5);
