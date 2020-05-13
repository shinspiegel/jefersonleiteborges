import React from 'react';
import './index.css';

/**
 *
 * @param {object} props
 * @param {object[]} props.barsList
 * @param {string} props.barsList.skill
 * @param {number} props.barsList.value
 */
const BarsCard = ({ barsList }) => {
  return (
    <div className='barsCard'>
      {barsList.map((item, index) => (
        <div key={item.skill + index}>
          <p>{item.skill}</p>
          <span style={{ '--fill': item.value + '%' }} />
        </div>
      ))}
    </div>
  );
};

export default BarsCard;
