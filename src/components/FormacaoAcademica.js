import React from 'react';

const formacaoAcademica = ({ academica, lang }) => {
  const listaCursos = academica.map(curso => (
    <div key={curso.id} className="academica__caixaItem">
      <p className="academica__instituicao">{curso.instituicao}</p>
      <p className="academica__curso">
        {lang === 'BR' ? 'Curso: ' : 'Course: '}
        <span className="semiNegrito">{lang === 'BR' ? curso.curso : curso.cursoEN}</span>
      </p>
      <p className="academica__anoConclusao">{curso.anoConclusao}</p>
    </div>
  ));

  return (
    <div className="academica">
      <h2 className="titulo--2">{lang === 'BR' ? 'Formação Academica' : 'Academic Formation'}</h2>
      {listaCursos}
    </div>
  );
};

export default formacaoAcademica;
