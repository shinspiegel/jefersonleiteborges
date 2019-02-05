import React from 'react';
import ToolTip from '../components/smallComps/ToolTip';

const infoBasico = (props) => {
    const idadeAtual = ((new Date()).getFullYear()) - props.info.nascimento.a;


    return (
        <section className='infoBasico'>
            <div className='paragrafo'>
                Nascimento:&nbsp;
                <ToolTip textoInterno={'Idade:' + idadeAtual}>
                    <span className='negrito'>{props.info.nascimento.d}/{props.info.nascimento.m}/{props.info.nascimento.a}</span>
                </ToolTip>
            </div>
                <p className='paragrafo'>
                    Sexo:&nbsp;
                <span className='negrito'>{props.info.sexo}</span>
                </p>
                <div className='paragrafo'>
                    CPF:&nbsp;
                <span className='negrito'>{props.info.cpf}</span>
                </div>
                <div className='paragrafo'>
                    Estado Civil:&nbsp;
                <span className='negrito'>{props.info.estadoCivil}</span>
                </div>
        </section>
            );
        }
        
export default infoBasico;