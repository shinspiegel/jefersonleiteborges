import React from 'react';
import Icone from '../smallComps/IconeSVG';

const portfolioItem = (props) => {
    return (
        <a href={'https://' + props.link} className='portfolio__item'>
            <div className='portfolio__svg'>
                <Icone id={props.svgId} link={props.link} estilo='svg__portfolio' />
            </div>
            <p className='portfolio__texto'>{props.children}</p>
            <p className='portfolio__link'>{props.link}</p>
        </a>
    );
}

export default portfolioItem;