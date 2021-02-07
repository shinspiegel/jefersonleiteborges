import React, { Fragment } from 'react';
import styles from './index.module.css';

/**
 *
 * @param {Object} props
 * @param {Object[]} props.list
 * @param {string} props.list.link
 * @param {string} props.list.icon
 */
const CV_ContactItens = ({ list }) => {
  const getCleanedLink = (link) => link.split(':')[1].replace('//', '');

  return (
    <div className={styles.CV_ContactItens}>
      {list.map((s) => (
        <p>
          {s.icon}: <a href={s.link}>{getCleanedLink(s.link)}</a>
        </p>
      ))}
    </div>
  );
};

export default CV_ContactItens;
