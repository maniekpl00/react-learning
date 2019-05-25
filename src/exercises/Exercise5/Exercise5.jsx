import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ExerciseLayout from '../../layouts/ExerciseLayout/ExerciseLayout';
import Exercise5Page from './pages/Exercise5Page/Exercise5Page';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Exercise5Layout from './layouts/Exercise5Layout/Exercise5Layout';

const AsyncNewCardInformation = asyncComponent(() => {
  return import('./components/RouteInformation/RouteInformation');
});

const Exercise5 = props => {
  return (
    <ExerciseLayout>
      <Exercise5Layout>
        <Navigation />
        <Switch>
          <Route path={`${props.match.path}/:id`} component={AsyncNewCardInformation} />
          <Route path={props.match.path} component={Exercise5Page} />
        </Switch>
      </Exercise5Layout>
    </ExerciseLayout>
  );
};

export default withRouter(Exercise5);
