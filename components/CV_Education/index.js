import React, { Fragment } from 'react';
import styles from './index.module.css';

/**
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {Object[]} props.experience
 * @param {string} props.experience.title
 * @param {string} props.experience.entryYear
 * @param {string} props.experience.quitYear
 * @param {string} props.experience.company
 * @param {string} props.experience.description
 */
const CV_Education = ({ title, experience }) => (
  <div className={styles.CV_Education}>
    <h3>{title}</h3>
    {experience
      .filter((e) => !e.isHidden)
      .map((e) => (
        <div className={styles.CV_EducationItem}>
          <h4>{e.company}</h4>
          <p>{e.title}</p>
          <p>
            ({e.entryYear} - {e.quitYear})
          </p>
        </div>
      ))}
  </div>
);

export default CV_Education;
