import React from 'react';
import './index.css';

/**
 *
 * @param {object} props
 * @param {string} props.title
 */
const ArticleWrapper = ({ title, children }) => (
  <article className='articleWrapper'>
    <h4>{title}</h4>
    {children}
  </article>
);

export default ArticleWrapper;
