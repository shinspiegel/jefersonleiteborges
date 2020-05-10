import React from 'react';
import './index.css';

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 */
const SectionWrapper = ({ title, subtitle, children }) => {
  return (
    <section className='section'>
      <small>{subtitle}</small>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
