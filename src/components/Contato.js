import React from 'react';
import Icone from '../components/smallComps/IconeSVG';
import ToolTip from '../components/smallComps/ToolTip';

const contato = ({lang, contato, endereco}) => {
  const title = lang === 'BR' ? 'Contato' : 'Contact';
  const data = lang === 'BR' ? ['Telefone', 'Email', 'Cidade'] : ['Phone', 'Email', 'City'];

  return (
    <div className="contato">
      <h2 className="titulo--2">{title}</h2>
      <div className="contato__listaSVG">
        <ToolTip textoInterno={'/' + contato.facebook}>
          <Icone estilo="svg__contato" id="facebook" link={'https://www.facebook.com/' + contato.facebook} />
        </ToolTip>
        <ToolTip textoInterno={'@' + contato.instagram}>
          <Icone estilo="svg__contato" id="instagram" link={'https://www.instagram.com/' + contato.instagram} />
        </ToolTip>
        <ToolTip textoInterno={'@' + contato.twitter}>
          <Icone estilo="svg__contato" id="twitter" link={'https://twitter.com/' + contato.twitter} />
        </ToolTip>
        <ToolTip textoInterno={contato.email}>
          <Icone estilo="svg__contato" id="email" link={'mailto:' + contato.email} />
        </ToolTip>
        <ToolTip textoInterno={lang === 'BR' ? 'Clique Aqui!' : 'Click me!'}>
          <Icone estilo="svg__contato" id="pin" link={endereco.gmaps} />
        </ToolTip>

        <ToolTip textoInterno={contato.telefone}>
          <Icone estilo="svg__contato" id="telefone" link={'tel:' + contato.telefone} />
        </ToolTip>
      </div>
      <div className="contato__listaTexto">
        <p className="contato__item">
          {data[0]}:&nbsp;
          <span className="negrito">{contato.telefone}</span>
        </p>
        <p className="contato__item">
          {data[1]}:&nbsp;
          <span className="negrito">{contato.email}</span>
        </p>
        <p className="contato__item">
          {data[2]}:&nbsp;
          <span className="negrito">{endereco.cidade}</span>
        </p>
      </div>
    </div>
  );
};

export default contato;
