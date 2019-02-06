import React from 'react';
import ToolTip from '../components/smallComps/ToolTip';

const infoBasico = props => {
  const idadeAtual = new Date().getFullYear() - props.info.nascimento.a;
  const info = props.lang === 'BR' ? ['Nascimento', 'Sexo', 'CPF', 'Estado Civil'] : ['Birth', 'Gender', 'ID', 'Marital Status'];

  return (
    <section className="infoBasico">
      <div className="paragrafo">
        {info[0]}:&nbsp;
        <ToolTip textoInterno={idadeAtual}>
          <span className="negrito">
            {props.info.nascimento.d}/{props.info.nascimento.m}/{props.info.nascimento.a}
          </span>
        </ToolTip>
      </div>
      <p className="paragrafo">
        {info[1]}:&nbsp;
        <span className="negrito">{props.info.sexo}</span>
      </p>
      <div className="paragrafo">
        {info[2]}:&nbsp;
        <span className="negrito">{props.info.cpf}</span>
      </div>
      <div className="paragrafo">
        {info[3]}:&nbsp;
        <span className="negrito">{props.info.estadoCivil}</span>
      </div>
    </section>
  );
};

export default infoBasico;
