import React from 'react';
import './index.css';

import getScroll from '../../utils/getScrollY';

/**
 *
 * @param {object} props
 */
const HovingCard = ({ children }) => {
  const scroll = getScroll();

  return <div className={`hovingCard ${scroll > 50 ? 'visible' : 'invisible'}`}>{children}</div>;
};

export default HovingCard;
