import React from 'react';
import styles from './index.module.scss';

export interface HeroProps {
  image: string;
  title: string;
  subTitle: string;
}

const Hero: React.FC<HeroProps> = ({ image, subTitle, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cover} />
      <img className={styles.image} src={image} alt="Cover" />
      <p className={styles.subType}>{subTitle}</p>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Hero;
