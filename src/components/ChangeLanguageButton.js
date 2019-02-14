import React from 'react';
import iconeSVG from '../img/icons.svg';

const changeLanguageButton = ({svgType, invisivel}) => {
  const block = 'changeLanguage'

  return (
    <div className={block}>
      <svg className={`${block}__icone ${invisivel}`}>
        <use href={`${iconeSVG}#${svgType}`} />
      </svg>
    </div>
  );
};

export default changeLanguageButton;
