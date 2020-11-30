import React, { Fragment } from 'react';
import styles from './index.module.css';

/**
 *
 * @param {Object} props
 * @param {Object[]} props.list
 * @param {String} props.list.title
 * @param {String[]} props.list.listNames
 */
const SkillsCard = ({ list }) => (
  <div className='skillCard'>
    {list
      ? list.map(({ title, listNames }, index) => (
          <Fragment key={title + index}>
            <h5>{title}</h5>
            <p>
              {listNames.map((item, index) => (
                <Fragment key={item + index}>
                  <span>#</span>
                  {item}{' '}
                </Fragment>
              ))}
            </p>
          </Fragment>
        ))
      : null}
  </div>
);

export default SkillsCard;
