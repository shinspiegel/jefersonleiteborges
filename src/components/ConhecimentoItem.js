import React from 'react';
import svgIcones from '../img/icons.svg';

const conhecimentoItem = ({ iconeTipo, key, mensagemToolTip, conhecimento, rank }) => {
  const block = 'conhecimento';

  let loopEstrelas = (numero, tipo) => {
    let listaEstrelas = [];

    for (let i = 0; i < numero; i++) {
      listaEstrelas.push(
        <svg key={i} className={'conhecimento__estrela conhecimento__estrela--' + tipo}>
          <use href={svgIcones + '#' + tipo} />
        </svg>
      );
    }

    return listaEstrelas;
  };

  return (
    <div key={key} className={block}>
      <div>
        <svg className={block + '__iconeSVG'}>
          <use href={svgIcones + '#' + iconeTipo} />
        </svg>
      </div>
      <div className={block + '__descricao'}>
        <div className={block + '__detalhe'}>{mensagemToolTip}</div>
        <div>
          <p className={block + '__nome'}>{conhecimento}</p>
        </div>
        <div>
          {loopEstrelas(Math.floor(rank / 2), 'starFull')}
          {loopEstrelas(rank % 2, 'starHalf')}
          {loopEstrelas(Math.floor((10 - rank) / 2), 'starEmpty')}
        </div>
      </div>
    </div>
  );
};

export default conhecimentoItem;
