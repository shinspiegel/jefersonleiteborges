import React from 'react';
import Icone from '../components/smallComps/IconeSVG';
import ToolTip from '../components/smallComps/ToolTip';

const contato = (props) => {
    const title = props.lang === 'BR' ? 'Contato' : 'Contact';
    const data = props.lang === 'BR' ? ['Telefone', 'Email', 'Cidade'] : ['Phone', 'Email', 'City'];

    return (
        <div className='contato'>
            <h2 className='titulo--2'>{title}</h2>
            <div className='contato__listaSVG'>
                <ToolTip textoInterno={'/' + props.contato.facebook}>
                    <Icone estilo='svg__contato' id='facebook' link={'https://www.facebook.com/' + props.contato.facebook} />
                </ToolTip>
                <ToolTip textoInterno={'@' + props.contato.instagram}>
                    <Icone estilo='svg__contato' id='instagram' link={'https://www.instagram.com/' + props.contato.instagram} />
                </ToolTip>
                <ToolTip textoInterno={'@' + props.contato.twitter}>
                    <Icone estilo='svg__contato' id='twitter' link={'https://twitter.com/' + props.contato.twitter} />
                </ToolTip>
                <ToolTip textoInterno={props.contato.email}>
                    <Icone estilo='svg__contato' id='email' link={'mailto:' + props.contato.email} />
                </ToolTip>
                <Icone estilo='svg__contato' id='pin' link={props.endereco.gmaps} />
                <ToolTip textoInterno={props.contato.telefone}>
                    <Icone estilo='svg__contato' id='telefone' link={'tel:' + props.contato.telefone} />
                </ToolTip>
            </div>
            <div className='contato__listaTexto'>
                <p className='contato__item'>
                    {data[0]}:&nbsp;
                    <span className='negrito'>{props.contato.telefone}</span>
                </p>
                <p className='contato__item'>
                    {data[1]}:&nbsp;
                    <span className='negrito'>{props.contato.email}</span>
                </p>
                <p className='contato__item'>
                    {data[2]}:&nbsp;
                    <span className='negrito'>{props.endereco.cidade}</span>
                </p>
            </div>
        </div>
    );
}

export default contato;