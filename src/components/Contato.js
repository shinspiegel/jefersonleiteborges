import React from 'react';

const contato = (props) => {
    return (
        <div className='contato'>
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