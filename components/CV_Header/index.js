import React, { Fragment } from 'react';
import styles from './index.module.css';

/**
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.city
 */
const CV_Header = ({ name, city }) => (
  <div className={styles.CV_Header}>
    <h1>{name}</h1>
    <p>{city}</p>
  </div>
);

export default CV_Header;
