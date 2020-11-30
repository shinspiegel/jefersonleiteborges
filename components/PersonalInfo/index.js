import Image from 'next/image';
import styles from './index.module.css';


import getIconComponent from '../../functions/getIconComponent';

/**
 * This is the personal info component
 * @param {object} props
 * @param {string} props.source
 * @param {string} props.name
 * @param {string} props.about
 * @param {object[]} props.socialMedia
 * @param {string} props.socialMedia.icon
 * @param {string} props.socialMedia.link
 */
const PersonalInfo = ({ source, name, about, socialMedia }) => {
  return (
    <div className={styles.personalInfo}>
      <img src={source} alt={name} />

      <h2>About me</h2>
      <p>{about}</p>
      <div>
        {socialMedia.map((media, index) => (
          <CustomLink
            key={media.icon + index}
            link={media.link}
            Icon={getIconComponent(media.icon)}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * This is a simple link that wraps a icon
 * @param {object} props This is react props
 * @param {object} props.link
 * @param {import('react').ReactElement} props.Icon This is a react-icon icon component
 */
const CustomLink = ({ link, Icon }) => (
  <a href={link} target='_blank' rel='noreferrer noopener'>
    <Icon />
  </a>
);

export default PersonalInfo;
