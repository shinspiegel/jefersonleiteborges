import React from 'react';
import iconeSVG from '../img/icons.svg';

const changeLanguage = props => {
  let estilo = {
    color: 'inherit',
    textDecoration: 'none',
  };



  console.log(visivelBR)

  let visivelBR = props.lang === 'BR' ? 'visivel' : 'invisivel';
  let visivelEN = props.lang === 'BR' ? 'invisivel' : 'visivel';

  return (
    <>
      <div className="changeLanguage" style={estilo}>
        <svg className={'changeLanguage__icone ' + visivelBR}>
          <use href={iconeSVG + '#en'} />
        </svg>
      </div>
      <div className="changeLanguage" style={estilo}>
        <svg className={'changeLanguage__icone ' + visivelEN}>
          <use href={iconeSVG + '#br'} />
        </svg>
      </div>
    </>
  );
};

export default changeLanguage;
