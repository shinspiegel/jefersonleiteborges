import React from 'react';

const name = (props) => {
    return (
        <section className='cabecalho'>
            <h1 className='titulo--1'>{props.nome}</h1>
        </section>
    );
}

export default name;