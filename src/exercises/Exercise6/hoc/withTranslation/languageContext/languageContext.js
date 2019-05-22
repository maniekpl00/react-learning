import React from 'react';

const languageContext = React.createContext({
  language: '',
  changed: () => {}
});

export default languageContext;
