import React from 'react';
import icones from '../img/icons.svg';

const contato = (props) => {
    return (
        <div className='contato'>
            <h2 className='titulo--2'>Contato</h2>
            <div className='contato__listaSVG'>
                <svg className='iconeSVG'><use href={icones + '#pin'}></use></svg>
                <svg className='iconeSVG'><use href={icones + '#facebook'}></use></svg>
                <svg className='iconeSVG'><use href={icones + '#whatsapp'}></use></svg>
                <svg className='iconeSVG'><use href={icones + '#twitter'}></use></svg>
                <svg className='iconeSVG'><use href={icones + '#instagram'}></use></svg>
            </div>
            <div>
                lista contatos
            {props.contato.telefone}
                {props.contato.email}
                {props.contato.instagram}
                {props.contato.twiter}
            </div>
            <div>
                endereco
            {props.endereco.rua}
                {props.endereco.numero}
                {props.endereco.adicional}
                {props.endereco.bairro}
                {props.endereco.cidade}
                {props.endereco.estado}
            </div>
        </div>
    );
}

export default contato;