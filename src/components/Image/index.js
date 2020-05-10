import React from 'react';
import getImageSrcset from '../../utils/getImageSrcset';

/**
 *
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
