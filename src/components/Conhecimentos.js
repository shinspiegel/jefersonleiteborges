import React from 'react';
import estCheia from '../img/icons.svg';

const conhecimentos = (props) => {
    function loopEstrelas(x, type) {
        let estrelas = []
        for (let i = 0; i < x; i++) {
            estrelas.push(i + type);
        }

        let listaEstrela = estrelas.map((i) => (
            <svg key={i} className={'conhecimento__estrela conhecimento__estrela--' + type}>
                <use href={estCheia + '#' + type}></use>
            </svg>
        ));

        return listaEstrela;
    }

    let listaConhecimento = props.conhecimentos.map(item => (
        <div key={item.id} className='conhecimento'>
            <p className='conhecimento__nome'>{item.conhecimento}</p>
            {loopEstrelas(Math.floor(item.rank / 2), 'starFull')}
            {loopEstrelas((item.rank % 2), 'starHalf')}
            {loopEstrelas(Math.floor((10 - item.rank) / 2), 'starEmpty')}
        </div>
    ));

    return (
        <div className='conhecimentos'>
            <h2 className='titulo--2'>Conhecimentos</h2>
            {listaConhecimento}
        </div>
    );
}

export default conhecimentos;



