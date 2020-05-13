import React from 'react';
import './index.css';

/**
 *
 * @param {Object} props
 * @param {Object[]} props.list
 * @param {String} props.list.title
 * @param {String[]} props.list.listNames
 */
const SkillsCard = ({ list }) => (
  <div className='skillCard'>
    {list.map(({ title, listNames }) => (
      <>
        <h5>{title}</h5>
        <p>
          {listNames.map((i) => (
            <>
              <span>#</span>
              {i}{' '}
            </>
          ))}
        </p>
      </>
    ))}
  </div>
);

export default SkillsCard;
