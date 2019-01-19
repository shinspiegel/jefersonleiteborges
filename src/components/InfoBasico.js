import React from 'react';

const infoBasico = (props) => {
    const idadeAtual = ((new Date()).getFullYear()) - props.info.nascimento.a;


    return (
        <section className='infoBasico'>
            <p className='paragrafo'>
                <span className='negrito'>Nascimento: </span> <span className='toolTip'>{props.info.nascimento.d}/{props.info.nascimento.m}/{props.info.nascimento.a} <span className='toolTip__item'> Idade Atual {idadeAtual} </span></span>
            </p>
            <p className='paragrafo'>
                <span className='negrito'>Sexo: </span>
                {props.info.sexo}
            </p>
            <p className='paragrafo'>
                <span className='negrito'>CPF: </span>
                {props.info.cpf}
            </p>
            <p className='paragrafo'>
                <span className='negrito'>Estado Civil: </span>
                {props.info.estadoCivil}
            </p>
        </section>
    );
}

export default infoBasico;