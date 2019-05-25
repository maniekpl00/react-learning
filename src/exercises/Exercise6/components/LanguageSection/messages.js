import { defineMessages } from 'react-intl';

const scope = 'LanguageSection';

const messages = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Welcome'
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'This is my page to learn and to repeat React.'
  }
});

export default messages;
