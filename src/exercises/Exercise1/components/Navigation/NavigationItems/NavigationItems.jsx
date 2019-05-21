import React from 'react';
import styles from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem>Burger Builder</NavigationItem>
      <NavigationItem>Burger</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
