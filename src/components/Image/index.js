import React from 'react';
import getImageSrcset from '../../functions/getImageSrcset';

/**
 * This is a image component to display images with a sourceset os images.
 * @param {object} props
 * @param {import('../../context/initialState').Images} props.imageSource
 * @param {string} props.alt
 * @param {string=} props.className
 */
const Image = ({ imageSource, alt, className = '' }) => (
  <img
    className={className}
    src={imageSource.default}
    srcSet={getImageSrcset(imageSource.sourceSet)}
    alt={alt}
  />
);

export default Image;
