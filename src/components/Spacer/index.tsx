import React from 'react';
import styles from './index.module.scss';

export interface SpacerProps {
  image: string;
}

const Spacer: React.FC<SpacerProps> = ({ image = '' }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt=' ' />
    </div>
  );
};

export default Spacer;
