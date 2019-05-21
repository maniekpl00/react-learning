import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';

import styles from './ExerciseLayout.module.scss';

class ExerciseLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.exerciseLayout}>
        <Navbar />
        <main>{children}</main>
      </div>
    );
  }
}

export default ExerciseLayout;