import React from 'react';
import PortfolioItem from '../components/smallComps/PortfolioItem';

const portfolio = (props) => {
    return (
        <div className='portfolio'>
            <PortfolioItem link={'www.behance.net/' + props.portfolio.behance}  svgId='behance' >Peças de Design</PortfolioItem>
            <PortfolioItem link={'' + props.portfolio.tumblr + '.tumblr.com'}   svgId='tumblr'  >Projetos Industrial</PortfolioItem>
            <PortfolioItem link={'github.com/' + props.portfolio.github}        svgId='github'  >Meus Códigos</PortfolioItem>
        </div>
    );
}

export default portfolio;