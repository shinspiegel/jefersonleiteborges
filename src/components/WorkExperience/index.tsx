import React, { useState } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Markdown from 'react-markdown';
import { Entry } from '../../context/initialState';
import styles from './index.module.scss';

export interface WorkExperienceProps {
  list: Entry[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ list = [] }) => {
  const [selected, setSelected] = useState('');

  const isSelected = (id) => {
    return id === selected ? styles.selected : '';
  };

  const clickHandler = (id) => {
    if (id === selected) return setSelected('');
    setSelected(id);
  };

  return (
    <ul className={styles.listGroup}>
      {list
        .filter((i) => !i.isHidden)
        .map((work) => (
          <li
            key={work.company}
            className={`${styles.listItem} ${isSelected(work.company)}`}
            onClick={() => clickHandler(work.company)}
          >
            <div className={styles.title}>
              <p>
                <HiOutlineChevronRight className={styles.chevron} />{' '}
                {work.title}
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.company}>
                {work.company} ({work.entryYear}-{work.quitYear})
              </p>

              <p className={styles.description}>{work.description}</p>
            </div>

            {work.company === selected ? (
              <div className={styles.markdown}>
                <Markdown>{work.markdownText}</Markdown>
              </div>
            ) : null}
          </li>
        ))}
    </ul>
  );
};

export default WorkExperience;
