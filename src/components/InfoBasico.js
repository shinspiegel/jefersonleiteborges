import React from 'react';

const infoBasico = (props) => {
    const idadeAtual = ((new Date()).getFullYear()) - props.info.nascimento.a;


    return (
        <section className='infoBasico'>
            <p className='paragrafo'>
                Nascimento:&nbsp;
                <span className='negrito toolTip'>{props.info.nascimento.d}/{props.info.nascimento.m}/{props.info.nascimento.a} <span className='toolTip__item'> Idade Atual {idadeAtual} </span></span>
            </p>
            <p className='paragrafo'>
                Sexo:&nbsp;
                <span className='negrito'>{props.info.sexo}</span>
            </p>
            <p className='paragrafo'>
                CPF:&nbsp;
                <span className='negrito'>{props.info.cpf}</span>
            </p>
            <p className='paragrafo'>
                Estado Civil:&nbsp;
                <span className='negrito'>{props.info.estadoCivil}</span>
            </p>
        </section>
    );
}

export default infoBasico;