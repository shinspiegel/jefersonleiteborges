import React from 'react';
import ToolTip from '../components/smallComps/ToolTip';

const infoBasico = ({lang, info}) => {
  const idadeAtual = new Date().getFullYear() - info.nascimento.a;

  return (
    <section className="infoBasico">
      <div className="paragrafo">
        {lang === 'BR' ? 'Nascimento: ' : 'Birth: '}
        <ToolTip textoInterno={idadeAtual}>
          <span className="negrito">
            {info.nascimento.d}/{info.nascimento.m}/{info.nascimento.a}
          </span>
        </ToolTip>
      </div>
      <p className="paragrafo">
        {lang === 'BR' ? 'Sexo: ' : 'Gender: '}
        <span className="negrito">{lang === 'BR' ? info.sexo : info.sexoEn}</span>
      </p>
      <div className="paragrafo">
        {lang === 'BR' ? 'CPF: ' : 'Brazil ID: '}
        <span className="negrito">{info.cpf}</span>
      </div>
      <div className="paragrafo">
        {lang === 'BR' ? 'Estado Civil ': 'Marital Status: '}
        <span className="negrito">{lang === 'BR' ? info.estadoCivil : info.estadoCivilEn}</span>
      </div>
    </section>
  );
};

export default infoBasico;
