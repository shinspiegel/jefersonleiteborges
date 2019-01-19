import React from 'react';

const formacaoAcademica = (props) => {
    
    let listaCursos = props.academica.map(curso => (
        <div key={curso.id} className="academica__caixaItem">
            <p className="academica__instituicao">{curso.instituicao}</p>
            <p className="academica__curso">{curso.curso}</p>
            <p className="academica__anoConclusao">{curso.anoConclusao}</p>
        </div>
    ));

    return (
        <div className='academica'>
            {listaCursos}
        </div>
    );
}

export default formacaoAcademica;