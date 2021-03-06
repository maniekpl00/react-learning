import React from 'react';
import PropTypes from 'prop-types';

import styles from './DrawerToggle.module.scss';

const DrawerToggle = props => (
  <div className={styles.DrawerToggle} onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
);

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired
};

export default DrawerToggle;
