import React from 'react';
import './index.css';

import getScrollY from '../../utils/getScrollY';
import getImageSrcset from '../../utils/getImageSrcset';

const Hero = ({ imageSource, name, greeting }) => {
  const scroll = getScrollY();

  console.log(getImageSrcset(imageSource));

  return (
    <div className='hero' style={{ '--scroll': scroll }}>
      <img srcSet={getImageSrcset(imageSource)} src={imageSource.default} alt={name} />
      <h3>{greeting}</h3>
      <h1>{name}</h1>
    </div>
  );
};

export default Hero;
