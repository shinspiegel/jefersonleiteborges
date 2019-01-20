import React from 'react';
import Icone from '../components/smallComps/IconeSVG';
import PortfolioItem from '../components/smallComps/PortfolioItem';

const portfolio = (props) => {
    return (
        <div className='portfolio'>
            <PortfolioItem link={props.portfolio.behance} svgId='behance' />
            <PortfolioItem link={props.portfolio.tumblr} svgId='tumblr' />
            <PortfolioItem link={props.portfolio.github} svgId='github' />
        </div>
    );
}

export default portfolio;