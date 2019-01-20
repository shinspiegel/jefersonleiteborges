import React from 'react';
import Icone from '../smallComps/IconeSVG';

const portfolioItem = (props) => {
    return (
        <a href={props.link} className='portfolio__item'>
            <div className='portfolio__svg'>
                <Icone id={props.svgId} link={props.link} estilo='svg__portfolio' />
            </div>
            <p className='portfolio__texto'>Portfólio Gráfico</p>
            <p className='portfolio__link'>{props.link}</p>
        </a>
    );
}

export default portfolioItem;