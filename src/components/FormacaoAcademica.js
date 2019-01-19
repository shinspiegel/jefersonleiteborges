import React from 'react';

const formacaoAcademica = (props) => {

    const listaCursos = props.academica.map(curso => (
        <div key={curso.id} className="academica__caixaItem">
            <p className="academica__instituicao">{curso.instituicao}</p>
            <p className="academica__curso">Curso: <span className='negrito'>{curso.curso}</span></p>
            <p className="academica__anoConclusao">{curso.anoConclusao}</p>
        </div>
    ));

    return (
        <div className='academica'>
            <h2 className='titulo--2'>Formação Academica</h2>
            {listaCursos}
        </div>
    );
}

export default formacaoAcademica;