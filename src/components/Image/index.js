import React from 'react';
import getImageSrcset from '../../functions/getImageSrcset';

/**
 * This is a image component to display images with a sourceset os images.
 * @todo refactor all of this code and the structure in the initial state
 * @param {object} props
 * @param {object} props.imageSource
 * @param {string} props.alt
 * @param {string=} props.className
 */
const Image = ({ imageSource, alt, className = '' }) => (
  <img
    className={className}
    srcSet={getImageSrcset(imageSource)}
    src={imageSource.default}
    alt={alt}
  />
);

export default Image;
