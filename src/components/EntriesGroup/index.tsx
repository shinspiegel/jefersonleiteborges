import React, { useState } from 'react';
import { Entry } from '../../context/initialState';
import EntryItem from '../EntryItem';
import styles from './index.module.scss';

export interface EntriesGroupProps {
  list: Entry[];
  title?: string;
  groupIndex?: number;
}

const EntriesGroup: React.FC<EntriesGroupProps> = ({
  list = [],
  title,
  groupIndex = 0,
}) => {
  const [selected, setSelected] = useState('');

  const clickHandler = (id): void => {
    if (id === selected) return setSelected('');
    setSelected(id);
  };

  return (
    <div>
      {title ? <h4 className={styles.entryTitle}>{title}</h4> : null}
      <ul className={styles.listGroup}>
        {list
          .filter((i) => !i.isHidden)
          .map((entry) => (
            <EntryItem
              key={entry.company}
              entry={entry}
              tabIndex={groupIndex}
              isSelected={selected === entry.company}
              onClick={clickHandler}
            />
          ))}
      </ul>
    </div>
  );
};

export default EntriesGroup;
