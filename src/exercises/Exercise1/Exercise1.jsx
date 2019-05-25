import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ExerciseLayout from '../../layouts/ExerciseLayout/ExerciseLayout';
import Layout from './layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';

const Exercise1 = props => {
  return (
    <ExerciseLayout>
      <Layout>
        <Switch>
          <Route path={`${props.match.path}/orders`} component={Orders} />
          <Route path={`${props.match.path}/checkout`} component={Checkout} />
          <Route path={props.match.path} component={BurgerBuilder} />
        </Switch>
      </Layout>
    </ExerciseLayout>
  );
};

export default Exercise1;
