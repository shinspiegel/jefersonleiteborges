import React from 'react';

const infoBasico = (props) => {
    return (
        <section className='infoBasico'>
            <p>{props.info.cpf}</p>
            <p>{props.info.estadoCivil}</p>
            <p>{props.info.nascimento.d}/{props.info.nascimento.m}/{props.info.nascimento.a}</p>
            <p>{props.info.sexo}</p>
        </section>
    );
}

export default infoBasico;