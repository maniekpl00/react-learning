import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';

import style from './ExerciseLayout.scss';

class ExerciseLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={style.exerciseLayout}>
        <Navbar />
        <main className={style.childrenContainer}>{children}</main>
      </div>
    );
  }
}

export default ExerciseLayout;