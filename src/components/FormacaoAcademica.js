import React from 'react';

const formacaoAcademica = (props) => {
    console.log(props.lang)

    const title = props.lang === 'BR' ? 'Formação Academica' : 'Academic Formation';
    const text = props.lang === 'BR' ? 'Curso' : 'Course';

    const listaCursos = props.academica.map(curso => (
        <div key={curso.id} className="academica__caixaItem">
            <p className="academica__instituicao">{curso.instituicao}</p>
            <p className="academica__curso">{text}: <span className='semiNegrito'>{curso.curso}</span></p>
            <p className="academica__anoConclusao">{curso.anoConclusao}</p>
        </div>
    ));

    return (
        <div className='academica'>
            <h2 className='titulo--2'>{title}</h2>
            {listaCursos}
        </div>
    );
}

export default formacaoAcademica;