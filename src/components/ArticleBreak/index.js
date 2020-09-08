import React from 'react';
import './index.css';

/**
 * This is a simple break space between articles
 * @param {object} props
 * @param {string} props.url
 */
const ArticleBreak = ({ url }) => (
  <span className='sectionBreak' style={{ backgroundImage: `url(${url})` }} />
);

export default ArticleBreak;
