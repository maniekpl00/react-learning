import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem to={props.match.url}>Burger Builder</NavigationItem>
      <NavigationItem to={`${props.match.url}/orders`}>Orders</NavigationItem>
    </ul>
  );
};

export default withRouter(NavigationItems);
