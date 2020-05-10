import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';

const getIconComponent = (icon) => {
  if (!icon || typeof icon !== 'string') icon = '';
  icon = icon.toLowerCase();

  switch (icon) {
    case 'facebook':
      return FaFacebookF;
    case 'instagram':
      return FaInstagram;
    case 'twitter':
      return FaTwitter;
    case 'linkedin':
      return FaLinkedin;
    case 'behance':
      return FaBehance;
    default:
      return () => <div />;
  }
};

export default getIconComponent;
