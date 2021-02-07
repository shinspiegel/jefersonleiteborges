import React, { Fragment } from 'react';
import styles from './index.module.css';

/**
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 */
const CV_Summary = ({ title, description }) => (
  <div className={styles.CV_Summary}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default CV_Summary;
