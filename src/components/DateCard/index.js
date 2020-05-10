import React from 'react';
import './index.css';

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string | number} props.entryYear
 * @param {string | number} props.quitYear
 * @param {string} props.company
 * @param {string} props.description
 */
const DateCard = ({ title, entryYear, quitYear, company, description }) => (
  <div className='dateCard'>
    <h5>{title}</h5>
    <div>
      {entryYear} - {quitYear} | {company}
    </div>
    <p>{description}</p>
  </div>
);

export default DateCard;
