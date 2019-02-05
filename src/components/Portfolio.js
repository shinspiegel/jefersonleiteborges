import React from 'react';
import PortfolioItem from '../components/smallComps/PortfolioItem';

const portfolio = props => {
  const behance = props.lang === 'BR' ? 'Peças de Design' : 'Design Projects';
  const tumblr = props.lang === 'BR' ? 'Projetos Industriais' : 'Industrial Design';
  const codes = props.lang === 'BR' ? 'Meus Códigos' : 'My Codes';

  return (
    <div className="portfolio">
      <PortfolioItem link={'www.behance.net/' + props.portfolio.behance} svgId="behance">
        {behance}
      </PortfolioItem>
      <PortfolioItem link={'' + props.portfolio.tumblr + '.tumblr.com'} svgId="tumblr">
        {tumblr}
      </PortfolioItem>
      <PortfolioItem link={'github.com/' + props.portfolio.github} svgId="github">
        {codes}
      </PortfolioItem>
    </div>
  );
};

export default portfolio;
