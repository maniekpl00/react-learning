import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navbar = props => {
  return (
    <nav className={styles.Navigation}>
      <ul>
        <li>
          <NavLink to={props.match.path} activeClassName={styles.Active}>Exercise 5</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Navbar);
