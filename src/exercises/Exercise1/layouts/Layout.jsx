import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';

function useShowSideDrawer(initialValue) {
  const [showSideDrawer, setShowSideDrawer] = useState(initialValue);

  const handleSideDrawerClosed = () => {
    setShowSideDrawer(false);
  };

  const handleSideDrawerToggle = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return {
    showSideDrawer,
    handleSideDrawerClosed,
    handleSideDrawerToggle
  };
}

function Layout(props) {
  const { showSideDrawer, handleSideDrawerClosed, handleSideDrawerToggle } = useShowSideDrawer(
    false
  );

  return (
    <div className={styles.Layout}>
      <Toolbar drawerToggleClicked={handleSideDrawerToggle} />
      <SideDrawer open={showSideDrawer} closed={handleSideDrawerClosed} />
      <main className={styles.ChildrenContent}>{props.children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
