import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routeList from './data/routeData';

import HomePage from './pages/HomePage/HomePage';
import waitingComponent from './hoc/waitingComponent/waitingComponent';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      {routeList.map(routeItem => (
        // It cannot be exact here because we have nested Routes in exercise5
        // Lazy loading components for each routes
        <Route
          key={routeItem}
          path={routeItem.path}
          component={waitingComponent(routeItem.component)}
        />
      ))}
    </Switch>
  );
};

Routes.defaultProps = {
  routeList: []
};

export default Routes;
