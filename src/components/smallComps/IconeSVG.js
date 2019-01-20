import React from 'react';
import iconeSVG from '../../img/icons.svg';

const icone = (props) => {
    let estilo = {
        color: 'inherit',
        textDecoration: 'none'
    }

    return (
        <a style={estilo} href={props.link}>
            <svg className={'iconeSVG iconeSVG--' + props.estiloExtra}>
                <use href={iconeSVG + '#' + props.id}></use>
            </svg>
        </a>
    );
}

export default icone;