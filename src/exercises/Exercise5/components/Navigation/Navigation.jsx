import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navbar = props => {
  return (
    <nav className={styles.Navigation}>
      <ul>
        <li>
          <NavLink to={props.match.url} activeClassName={styles.Active} exact>Exercise 5</NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${props.match.url}/courses`,
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

export default withRouter(Navbar);
