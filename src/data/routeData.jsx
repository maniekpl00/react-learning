import React from 'react';
import Exercise1 from '../exercises/Exercise1/Exercise1';
import Exercise2 from '../exercises/Exercise2/Exercise2';

const REPOSITORY_URL = 'https://github.com/maniekpl00/react-learning/src/exercises';

const buildRoute = (name, path, component, repositoryURL, description) => {
  return {
    name,
    path,
    component,
    repositoryURL,
    description
  };
};

export default [
  buildRoute(
    'Burger Builder',
    '/exercise1',
    Exercise1,
    `${REPOSITORY_URL}/Exercise1`,
    <>
      Building a Burger Ingredients Page with using{' '}
      <em>React Hooks, React.Memo, useState, useMemo, PropTypes</em>.
    </>
  ),
  buildRoute('Exercise 2', '/exercise2', Exercise2, `${REPOSITORY_URL}/Exercise2`, 'Opis zad2')
];
