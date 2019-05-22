import React, { useState, useContext } from 'react';
import LanguageContext from '../../contexts/languageContext/languageContext';
import LanguageSelect from '../../components/LanguageSelect/LanguageSelect';
import LanguageSection from '../../components/LanguageSection/LanguageSection';

function LanguageHandler() {
  const context = useContext(LanguageContext);
  const [value, setValue] = useState(context.language);

  function handleChange(e) {
    setValue(e.target.value);
    context.changed(e.target.value);
  }

  return (
    <>
      <LanguageSelect value={value} languages={context.languages} changed={handleChange} />
      <LanguageSection />
    </>
  );
}

export default LanguageHandler;
