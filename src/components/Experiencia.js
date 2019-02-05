import React from 'react';

const experiencia = props => {
  const text1 = props.lang === 'BR' ? 'Inicio' : 'Start';
  const text2 = props.lang === 'BR' ? 'até' : 'until';

  function listarExperiencia(items) {
    let lista = [];

    items.map(exp => {
      lista.push(
        <div key={exp.id} className="experiencia">
          <div className="experiencia__tempoAtuacao">
            <div>
              {text1}: {exp.entrada.m}/{exp.entrada.a}
            </div>
            <div>
              {' '}
              {text2}{' '}
              <span className="negrito">
                {exp.saida.m}/{exp.saida.a}
              </span>
            </div>
          </div>
          <div className="experiencia__cargo">{exp.cargo}</div>
          <div className="experiencia__empresa">
            <div>{exp.empresa}</div>
            <div>
              <small>{exp.local}</small>
            </div>
          </div>
        </div>
      );
    });

    return lista;
  }

  return <div className="listaExperiencia">{listarExperiencia(props.experiencia)}</div>;
};

export default experiencia;
