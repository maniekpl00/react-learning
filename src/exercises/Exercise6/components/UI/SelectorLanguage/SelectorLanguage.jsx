import React from 'react';
import LanguageContext from '../../../hoc/withTranslation/languageContext/languageContext';

const SelectorLanguage = () => {
  return (
    <LanguageContext.Consumer>
      {context => <button onClick={() => context.changed}>{context.language}</button>}
    </LanguageContext.Consumer>
  )
}

export default SelectorLanguage
