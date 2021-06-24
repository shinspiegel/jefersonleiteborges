import React from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Markdown from 'react-markdown';
import { Entry } from '../../context/initialState';
import styles from './index.module.scss';

export interface EntryItemProps {
  tabIndex: number;
  entry: Entry;
  isSelected: boolean;
  onClick: (company: string) => void;
}

const EntryItem: React.FC<EntryItemProps> = ({
  tabIndex = 0,
  entry = {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  isSelected = false,
}) => {
  const clickHandler = (): void => {
    onClick(entry.company);
  };

  return (
    <li className={`${styles.listItem} ${isSelected ? styles.selected : ''}`}>
      <div
        onClick={clickHandler}
        onKeyDown={clickHandler}
        onFocus={clickHandler}
        role='button'
        tabIndex={tabIndex}
      >
        <div className={styles.title}>
          <p>
            <HiOutlineChevronRight className={styles.chevron} /> {entry.title}
          </p>
        </div>

        <div className={styles.content}>
          <p className={styles.company} data-testid='company-name'>
            {entry.company} ({entry.entryYear}-{entry.quitYear})
          </p>

          <p className={styles.description}>{entry.description}</p>
        </div>

        {isSelected ? (
          <div className={styles.markdown}>
            <Markdown>{entry.markdownText}</Markdown>
          </div>
        ) : null}
      </div>
    </li>
  );
};

export default EntryItem;
