import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routeList from './data/routeData';

import HomePage from './pages/HomePage/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact/>
      {routeList.map(routeItem => (
        // It cannot be exact here because we have nested Routes in exercise5
        <Route key={routeItem} path={routeItem.path} component={routeItem.component} />
      ))}
    </Switch>
  );
};

Routes.defaultProps = {
  routeList: []
};

export default Routes;
