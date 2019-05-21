import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideDrawer.module.scss';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={[styles.SideDrawer, props.open ? styles.Open : styles.Close].join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired
};

export default SideDrawer;
