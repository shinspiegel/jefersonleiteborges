import React from 'react';
import './index.css';

/**
 *
 * @param {object} props
 * @param {string} props.url
 */
const SectionBreak = ({ url }) => (
  <span className='sectionBreak' style={{ backgroundImage: `url(${url})` }} />
);

export default SectionBreak;
