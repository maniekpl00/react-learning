import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Navbar;
