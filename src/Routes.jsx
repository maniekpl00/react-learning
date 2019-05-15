import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routeList from './data/routeData';

import HomePage from './pages/HomePage/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      {routeList.map(routeItem => (
        <Route key={routeItem} path={routeItem.path} component={routeItem.component} />
      ))}
    </Switch>
  );
};

Routes.defaultProps = {
  routeList: []
};

export default Routes;
