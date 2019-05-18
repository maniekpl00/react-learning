import React from 'react';
import ExerciseLayout from '../../layouts/ExerciseLayout/ExerciseLayout';
import Layout from './layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const Exercise1 = () => {
  return (
    <ExerciseLayout>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </ExerciseLayout>
  );
};

export default Exercise1;
