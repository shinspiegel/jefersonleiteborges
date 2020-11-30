import React from 'react';
import styles from './index.module.css';

/**
 * This is the card to show a item with date information
 * @param {object} props This is the react props
 * @param {string} props.title
 * @param {string | number} props.entryYear
 * @param {string | number} props.quitYear
 * @param {string} props.company
 * @param {string} props.description
 */
const DateCard = ({ title, entryYear, quitYear, company, description }) => (
  <div className={styles.dateCard}>
    <h5>{title}</h5>
    <div>
      {entryYear} - {quitYear} | {company}
    </div>
    <p>{description}</p>
  </div>
);

export default DateCard;
