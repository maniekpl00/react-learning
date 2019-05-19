import React, { Component } from 'react';
import { ReactComponent as GithubIcon } from '../../assets/svg/github-brands.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/svg/linkedin-brands.svg';

import styles from './HomeLayout.scss';
import HyperLink from '../../components/HyperLink/HyperLink';

class HomeLayout extends Component {
  githubLink = 'https://www.github.com/maniekpl00';
  linkedinLink = 'https://linkedin.com/in/trong-manh-tu';

  render() {
    const { children } = this.props;

    return (
      <div className={styles.homeLayout}>
        <h2 className={styles.author}>Trong Manh Tu</h2>
        <div className={styles.socialMedia}>
          <HyperLink className={styles.link} href={this.githubLink}>
            <GithubIcon />
          </HyperLink>
          <HyperLink className={styles.link} href={this.linkedinLink}>
            <LinkedinIcon />
          </HyperLink>
        </div>
        <main className={styles.childrenContainer}>{children}</main>
      </div>
    );
  }
}

export default HomeLayout;
