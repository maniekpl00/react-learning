import React from 'react';
import styles from './Layout.scss';

const Layout = props => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.childrenContent}>{props.children}</main>
    </>
  );
};

export default Layout;
