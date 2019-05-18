import React from 'react';
import styles from './Logo.scss';
import BurgerLogo from '../../assets/images/burger-logo.png';

const Logo = props => {
  return (
    <div className={styles.Logo}>
      <img src={BurgerLogo} alt="" />
    </div>
  );
};

export default Logo;
