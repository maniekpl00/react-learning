import React from 'react';
import styles from './LanguageSelect.module.scss';
import uuid from 'uuid';

const LanguageSelect = props => {
  return (
    <div className={styles.LanguageSelect}>
      <select value={props.value} onChange={props.changed}>
        {props.languages.map(lang => (
          <option key={uuid.v4()} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
