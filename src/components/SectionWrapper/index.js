import React from 'react';
import styles from './index.module.css';

/**
 * This is a simple wrapper for articles
 * @param {object} props This is the react props
 * @param {string} props.title The value for the title in the H4
 */
const SectionWrapper = ({ title, children }) => (
  <section className='sectionWrapper'>
    <h4>{title}</h4>
    {children}
  </section>
);

export default SectionWrapper;
