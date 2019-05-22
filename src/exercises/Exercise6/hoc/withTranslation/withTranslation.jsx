import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_pl from 'react-intl/locale-data/pl';
import messages_en from '../../translations/en.json';
import messages_pl from '../../translations/pl.json';
import LanguageContext from './languageContext/languageContext';

addLocaleData([...locale_en, ...locale_pl]);

const messages = {
  en: messages_en,
  pl: messages_pl
};

const withTranslation = WrappedComponent => {
  return class extends Component {
    state = {
      language: navigator.language.split(/[-_]/)[0]
    };

    handleLanguageChange = language => {
      this.setState({ language: messages[language] });
    };

    render() {
      const { language } = this.state;

      return (
        <LanguageContext.Provider
          value={{ language: this.state.language, changed: this.handleLanguageChange }}
        >
          <IntlProvider locale={language} messages={messages[language]}>
            <WrappedComponent {...this.props} />
          </IntlProvider>
        </LanguageContext.Provider>
      );
    }
  };
};

export default withTranslation;
