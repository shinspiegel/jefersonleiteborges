import React from 'react';
import styles from './index.module.scss';
import { SocialMedia } from '../../context/initialState';
import Icon from '../Icon';

export interface AboutMeProps {
  image: string;
  title: string;
  text: string;
  description: string;
  socialMedia: SocialMedia[];
}

const AboutMe: React.FC<AboutMeProps> = ({
  image,
  text,
  title,
  description,
  socialMedia = [],
}) => (
  <div className={styles.container}>
    <img className={styles.image} src={image} alt={text} />
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{text}</p>
    <p className={styles.description}>{description}</p>
    <div className={styles.mediaHolder}>
      {socialMedia
        .filter((s) => !s.isHidden)
        .map((social) => (
          <a
            key={social.link}
            href={social.link}
            target='_blank'
            rel='noreferrer'
            referrerPolicy='no-referrer'
          >
            <Icon icon={social.icon} />
          </a>
        ))}
    </div>
  </div>
);

export default AboutMe;
