import React, { Fragment } from 'react';
import ReactMardown from 'react-markdown';
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
 * @param {string} props.experience.markdownText
 */
const CV_Experience = ({ title, experience }) => (
  <div className={styles.CV_Experience}>
    <h3>{title}</h3>
    {experience
      .filter((e) => !e.isHidden)
      .map((e) => (
        <div className={styles.CV_ExperienceItem}>
          <h4>{e.company}</h4>
          <p>
            {e.title} ({e.entryYear} - {e.quitYear})
          </p>
          <ReactMardown className={styles.CV_Markdown}>{e.markdownText}</ReactMardown>
        </div>
      ))}
  </div>
);

export default CV_Experience;
