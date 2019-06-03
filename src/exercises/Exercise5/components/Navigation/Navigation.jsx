import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = props => {
  const { match } = props;
  return (
    <nav className={styles.Navigation}>
      <ul>
        <li>
          <NavLink to={match.url} activeClassName={styles.Active} exact>
            Exercise 5
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}/courses`,
              search: `?title=Manh`
            }}
            activeClassName={styles.Active}
          >
            Query Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  match: PropTypes.object
}

export default withRouter(Navigation);
