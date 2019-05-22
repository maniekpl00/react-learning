import React from 'react';
import Exercise1 from '../exercises/Exercise1/Exercise1';
import Exercise2 from '../exercises/Exercise2/Exercise2';
import Exercise3 from '../exercises/Exercise3/Exercise3';
import Exercise4 from '../exercises/Exercise4/Exercise4';

const REPOSITORY_URL = 'https://github.com/maniekpl00/react-learning/tree/master/src/exercises';

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
      <em>React Hooks, React.Memo, useState, useMemo, PropTypes.</em>.
    </>
  ),
  buildRoute(
    'Web (Http / Ajax) ',
    '/exercise2',
    Exercise2,
    `${REPOSITORY_URL}/Exercise2`,
    <>
      Using <em>Http, Ajax, Axios Interceptors (request, response).</em>
    </>
  ),
  buildRoute(
    'Animate members',
    '/exercise3',
    Exercise3,
    `${REPOSITORY_URL}/Exercise3`,
    <>
      Using animation: <em>scale, translate, opacity</em>.
    </>
  ),
  buildRoute(
    'Error HTTP Handling',
    '/exercise4',
    Exercise4,
    `${REPOSITORY_URL}/Exercise4`,
    <>
      Handling error by creating global axios interceptors <em>(withErrorHandler as HOC)</em>
    </>
  )
];
