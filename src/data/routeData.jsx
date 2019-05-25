import React, { lazy } from 'react';

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
    lazy(() => import("../exercises/Exercise1/Exercise1")),
    `${REPOSITORY_URL}/Exercise1`,
    <>
      Building a Burger Ingredients Page with using{' '}
      <em>React Hooks, React.Memo, useState, useMemo, PropTypes.</em>.
    </>
  ),
  buildRoute(
    'Web (Http / Ajax)',
    '/exercise2',
    lazy(() => import("../exercises/Exercise2/Exercise2")),
    `${REPOSITORY_URL}/Exercise2`,
    <>
      Using <em>Http, Ajax, Axios Interceptors (request, response).</em>
    </>
  ),
  buildRoute(
    'Animate members',
    '/exercise3',
    lazy(() => import("../exercises/Exercise3/Exercise3")),
    `${REPOSITORY_URL}/Exercise3`,
    <>
      Using animation: <em>scale, translate, opacity</em>.
    </>
  ),
  buildRoute(
    'Error HTTP Handling',
    '/exercise4',
    lazy(() => import("../exercises/Exercise4/Exercise4")),
    `${REPOSITORY_URL}/Exercise4`,
    <>
      Handling error by creating global axios interceptors <em>(withErrorHandler as HOC)</em>, using
      throttle to block button.
    </>
  ),
  buildRoute(
    'Routing understanding',
    '/exercise5',
    lazy(() => import("../exercises/Exercise5/Exercise5")),
    `${REPOSITORY_URL}/Exercise5`,
    <>Routing, redirect, history, withRouter, loading routes lazily by asyncComponent</>
  ),
  buildRoute(
    'React translation (pl, en)',
    '/exercise6',
    lazy(() => import("../exercises/Exercise6/Exercise6")),
    `${REPOSITORY_URL}/Exercise6`,
    <>
      Translate text on event onClick with using: <em>react-intl, uuid, Context API, useContext</em>
    </>
  )
];
