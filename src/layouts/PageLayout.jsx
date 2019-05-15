import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';

import style from './PageLayout.scss';

class PageLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={style.appContainer}>
        <Navbar />
        <main className={style.childrenContainer}>{children}</main>
      </div>
    );
  }
}

export default PageLayout;