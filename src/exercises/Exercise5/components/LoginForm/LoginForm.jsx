import React from 'react';
import styles from './LoginForm.module.scss';

const LoginForm = ({ email, password, submitted, changed, ...props }) => {
  return (
    <form className={styles.LoginForm} onSubmit={submitted}>
      <label className={styles.Label}>
        <span>Email</span>
        <input type="email" autoComplete="email" name="email" value={email} onChange={changed} />
      </label>
      <label className={styles.Label}>
        <span>Password</span>
        <input
          type="password"
          autoComplete="password"
          name="password"
          value={password}
          onChange={changed}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
