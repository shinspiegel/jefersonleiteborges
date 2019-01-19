import React from 'react';

const portfolio = (props) => {
    return (
        <div className='portfolio'>
            lista portfolio
            <p>{props.portfolio.behance}</p>
            <p>{props.portfolio.tumblr}</p>
            <p>{props.portfolio.github}</p>
        </div>
    );
}

export default portfolio;