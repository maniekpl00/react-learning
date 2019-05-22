import React from 'react';

const languageContext = React.createContext({
  language: '',
  languages: [],
  changed: () => {}
});

export default languageContext;
