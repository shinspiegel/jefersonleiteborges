import React from 'react';
import styles from './index.module.css';

/**
 * This is a simple break space between articles
 * @param {object} props
 * @param {string} props.url
 */
const ArticleBreak = ({ url }) => (
  <span className={styles.sectionBreak} style={{ backgroundImage: `url(${url})` }} />
);

export default ArticleBreak;
