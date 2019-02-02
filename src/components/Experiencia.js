import React from 'react';

const experiencia = props => {
  function listarExperiencia(items) {
    let lista = [];

    items.map(exp => {
      console.log(exp);
      lista.push(
        <>
          <div className="experiencia">
            <div className="experiencia__tempoAtuacao">
              <div>
                Inicio: {exp.entrada.m}/{exp.entrada.a}
              </div>
              <div>
                {' '}
                até{' '}
                <span className="negrito">
                  {exp.saida.m}/{exp.saida.a}
                </span>
              </div>
            </div>
            <div className="experiencia__cargo">{exp.cargo}</div>
            <div className="experiencia__empresa">
              <div>{exp.empresa}</div>
              <div><small>{exp.local}</small></div>
            </div>
          </div>
        </>
      );
    });

    return lista;
  }

  console.log(props);

  return <div className="listaExperiencia">{listarExperiencia(props.experiencia)}</div>;
};

export default experiencia;
