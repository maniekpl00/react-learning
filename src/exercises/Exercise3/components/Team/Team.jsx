import React from 'react';
import styles from './Team.module.scss';

const Team = ({ member, ...props }) => {
  return (
    <section className={styles.Team}>
      <img src={member.imageSrc} className={styles.Color} alt="" />
      <img src={member.imageSrc} className={styles.Gray} alt="" />
      <div className={styles.Member}>
        <h1>{member.name}</h1>
        <h2>{member.description}</h2>
      </div>
    </section>
  );
};

export default Team;
