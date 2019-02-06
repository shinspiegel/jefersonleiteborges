import React from 'react';
import iconeSVG from '../img/icons.svg';

const changeLanguage = props => {
  let estilo = {
    color: 'inherit',
    textDecoration: 'none',
  };

  let english = '';
  english = props.lang === 'EN' ? 'visivel' : 'invisivel';
  
  let portuguese = '';
  portuguese = props.lang === 'BR' ? 'visivel' : 'invisivel';

  return (
    <button className="changeLanguage" onClick={props.changelLang}>
      <div className="changeLanguage" style={estilo}>
        <svg className={'changeLanguage__icone ' + english}>
          <use href={iconeSVG + '#en'} />
        </svg>
      </div>
      <div className="changeLanguage" style={estilo}>
        <svg className={'changeLanguage__icone ' + portuguese}>
          <use href={iconeSVG + '#br'} />
        </svg>
      </div>
    </button>
  );
};

export default changeLanguage;
