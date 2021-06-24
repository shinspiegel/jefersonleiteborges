import React from 'react';
import { Skill } from '../../context/initialState';
import SkillItem from '../SkillItem';
import styles from './index.module.scss';

export interface SkillGroupProps {
  list: Skill[];
  title?: string;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ list = [], title }) => {
  return (
    <div>
      {title ? <h4 className={styles.entryTitle}>{title}</h4> : null}
      <ul className={styles.listGroup}>
        {list.map((skill) => (
          <SkillItem key={skill.title} skill={skill} />
        ))}
      </ul>
    </div>
  );
};

export default SkillGroup;
