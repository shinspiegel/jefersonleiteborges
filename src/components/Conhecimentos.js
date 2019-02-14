import React from 'react';
import estCheia from '../img/icons.svg';
import ConhecimentoItem from './ConhecimentoItem';

const conhecimentos = ({ lang, conhecimentos }) => {
  let listaConhecimento = conhecimentos.map(item => (
    <ConhecimentoItem
      iconeTipo={item.icone}
      key={item.key}
      mensagemToolTip={lang === 'BR' ? item.mensagemToolTip : item.mensagemToolTipEn }
      conhecimento={lang === 'BR' ? item.conhecimento : item.conhecimentoEn }
      rank={item.rank}
    />
  ));

  return (
    <div className="conhecimentos">
      <h2 className="titulo--2">{lang === 'BR' ? 'Conhecimentos' : 'Knowledges'}</h2>
      {listaConhecimento}
    </div>
  );
};

export default conhecimentos;
