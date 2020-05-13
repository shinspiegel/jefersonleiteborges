import React from 'react';
import './index.css';

import Image from '../Image';
import getIconComponent from '../../utils/getIconComponent';

/**
 *
 * @param {object} props
 * @param {object} props.imageSource
 * @param {string} props.name
 * @param {string} props.about
 * @param {object[]} props.socialMedia
 * @param {string} props.socialMedia.icon
 * @param {string} props.socialMedia.link
 */
const PersonalInfo = ({ imageSource, name, about, socialMedia }) => {
  return (
    <div className='personalInfo'>
      <Image imageSource={imageSource} alt={name} />

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

const CustomLink = ({ link, Icon }) => (
  <a href={link} target='_blank' rel='noreferrer noopener'>
    <Icon />
  </a>
);

export default PersonalInfo;
