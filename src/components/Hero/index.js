import React from 'react';
import './index.css';

import getScrollY from '../../functions/getScrollY';
import Image from '../Image';

/**
 *
 * @param {object} props
 * @param {import('../../context/initialState').Images} props.imageSource
 * @param {string} props.name
 * @param {string} props.greeting
 */
const Hero = ({ imageSource, name, greeting }) => {
  const scroll = getScrollY();

  return (
    <section className='hero' style={{ '--scroll': scroll }}>
      <Image imageSource={imageSource} alt={name} />
      <h3>{greeting}</h3>
      <h1>{name}</h1>
    </section>
  );
};

export default Hero;
