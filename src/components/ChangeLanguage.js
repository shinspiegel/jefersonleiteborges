import React from 'react';
import ChangeLanguageButton from './ChangeLanguageButton';

const changeLanguage = ({ lang, changeLang }) => {

  return (
    <button className="changeLanguageButton" onClick={changeLang}>
    <ChangeLanguageButton svgType={'br'} invisivel={lang=== 'BR' ? 'visivel' : 'invisivel'} />
    <ChangeLanguageButton svgType={'en'} invisivel={lang=== 'EN' ? 'visivel' : 'invisivel'} />
    </button>
  );
};

export default changeLanguage;
