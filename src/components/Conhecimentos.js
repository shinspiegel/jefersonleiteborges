import React from 'react';
import estCheia from '../img/icons.svg';
import ConhecimentoItem from './ConhecimentoItem';

const conhecimentos = props => {
  const title = props.lang === 'BR' ? 'Conhecimentos' : 'Knowledges';

  let listaConhecimento = props.conhecimentos.map(item => (
    <ConhecimentoItem
      iconeTipo={item.icone}
      key={item.key}
      mensagemToolTip={item.mensagemToolTip}
      conhecimento={item.conhecimento}
      rank={item.rank}
    />
  ));

  return (
    <div className="conhecimentos">
      <h2 className="titulo--2">{title}</h2>
      {listaConhecimento}
    </div>
  );
};

export default conhecimentos;
