import React from 'react';
import iconeSVG from '../../img/icons.svg';

const icone = (props) => {
    let estilo = {
        color: 'inherit',
        textDecoration: 'none'
    }

    return (
        <a style={estilo} href={props.link}>
            <svg className={props.estilo}>
                <use href={iconeSVG + '#' + props.id}></use>
            </svg>
        </a>
    );
}

export default icone;