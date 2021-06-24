import React from 'react';
import { Skill } from '../../context/initialState';
import styles from './index.module.scss';

export interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  if (!skill) return null;

  return (
    <li className={styles.listItem}>
      <h5 className={styles.title}>{skill.title}</h5>
      <ul className={styles.innerList}>
        {skill.listNames.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </li>
  );
};

export default SkillItem;
