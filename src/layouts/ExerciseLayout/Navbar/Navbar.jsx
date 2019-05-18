import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.scss';

import { ReactComponent as ArrowLeft } from '../../../assets/svg/angle-left-solid.svg';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <ArrowLeft className={styles.ArrowLeft} />
      </Link>
    </nav>
  );
};

export default Navbar;
