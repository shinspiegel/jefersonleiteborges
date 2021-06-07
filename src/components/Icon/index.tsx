import React from 'react';
import styles from './index.module.scss';
import {
  FiGithub,
  FiMail,
  FiGitlab,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';

export interface IconProps {
  icon: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  if (icon === 'Email') return <FiMail />;
  if (icon === 'Github') return <FiGithub />;
  if (icon === 'Gitlab') return <FiGitlab />;
  if (icon === 'Linkedin') return <FiLinkedin />;
  if (icon === 'Twitter') return <FiTwitter />;
  if (icon === 'Behance') return <SiBehance />;
  if (icon === 'Instagram') return <FiInstagram />;

  return null;
};

export default Icon;
