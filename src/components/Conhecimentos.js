import React from 'react';

const conhecimentos = (props) => {
    
    let listaConhecimento = props.conhecimentos.map( conhecimento => (
        <div key={conhecimento.id}>
            <p>{conhecimento.conhecimento} + {conhecimento.rank} out of 10</p>
        </div>
    ));


    return (
        <div className='conhecimentos'>
            {listaConhecimento}
        </div>
    );
}

export default conhecimentos;



