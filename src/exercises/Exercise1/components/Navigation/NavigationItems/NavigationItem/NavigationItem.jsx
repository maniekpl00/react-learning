import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.scss';

const NavigationItem = props => {
  return (
    <li className={styles.NavigationItem}>
      <Link to="#">{props.children}</Link>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default React.memo(NavigationItem);
