import React from 'react';
import './index.css';

/**
 *
 * @param {object} props This is the react props
 * @param {string} props.title
 * @param {string} props.subtitle
 */
const ArticleWrapper = ({ title, subtitle, children }) => {
  return (
    <article className='articleWrapper'>
      <small>{subtitle}</small>
      <h2>{title}</h2>
      {children}
    </article>
  );
};

export default ArticleWrapper;
