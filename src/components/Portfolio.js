import React from 'react';
import Icone from '../components/smallComps/IconeSVG';

const portfolio = (props) => {
    return (
        <div className='portfolio'>
            <div className='portfolio__item'>
                <div className='portfolio__svg'><Icone id='behance' link={props.portfolio.behance} estiloExtra='grande' /></div>
                <p className='portfolio__texto'>Portfólio Gráfico</p>
                <p className='portfolio__link'>{props.portfolio.behance}</p>
            </div>
            <div className='portfolio__item'>
                <div className='portfolio__svg'><Icone id='tumblr' link={props.portfolio.tumblr} estiloExtra='grande' /></div>
                <p className='portfolio__texto'>Portfólio Industrial</p>
                <p className='portfolio__link'>{props.portfolio.tumblr}</p>
            </div>
            <div className='portfolio__item'>
                <div className='portfolio__svg'><Icone id='github' link={props.portfolio.github} estiloExtra='grande' /></div>
                <p className='portfolio__texto'>Código no Github</p>
                <p className='portfolio__link'>{props.portfolio.github}</p>
            </div>

        </div>
    );
}

export default portfolio;