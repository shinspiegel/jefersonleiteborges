import React, { Fragment } from 'react';
import styles from './index.module.css';

/**
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {Object[]} props.skill
 * @param {string} props.skill.title
 * @param {string[]} props.skill.list
 */
const CV_SkillListing = ({ title, skill }) => (
  <div className={styles.CV_SkillListing}>
    <h3>{title}</h3>
    {skill.map((s) => (
      <div>
        <h4>{s.title}</h4>
        <ul>
          {s.listNames.map((t) => (
            <li>{t}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default CV_SkillListing;
