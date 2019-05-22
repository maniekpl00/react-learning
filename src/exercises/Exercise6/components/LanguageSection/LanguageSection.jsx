import React from 'react';
import { injectIntl } from 'react-intl';
import styles from './LanguageSection.module.scss';
import messages from './messages';

const LanguageSection = props => {
  const { formatMessage } = props.intl;
  console.log(styles);
  return (
    <section className={styles.LanguageSection}>
      <h2>{formatMessage(messages.title)}</h2>
      <p>{formatMessage(messages.description)}</p>
    </section>
  );
};

export default injectIntl(LanguageSection);
