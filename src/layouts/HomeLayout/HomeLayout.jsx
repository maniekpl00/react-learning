import React, { Component } from 'react';
import { ReactComponent as GithubIcon } from '../../assets/svg/github-brands.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/svg/linkedin-brands.svg';

import style from './HomeLayout.scss';

class HomeLayout extends Component {
  githubLink = 'https://www.github.com/maniekpl00';
  linkedinLink = 'https://linkedin.com/in/trong-manh-tu';

  render() {
    const { children } = this.props;

    return (
      <div className={style.homeLayout}>
        <h2 className={style.author}>Trong Manh Tu</h2>
        <div className={style.socialMedia}>
          <a
            className={style.link}
            href={this.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            className={style.link}
            href={this.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
        <main className={style.children}>{children}</main>
        <div className={style.overlay} />
      </div>
    );
  }
}

export default HomeLayout;
