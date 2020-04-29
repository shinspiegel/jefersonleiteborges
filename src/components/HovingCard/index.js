import React from 'react';
import './index.css';

import getScroll from '../../utils/getScrollY';

const HovingCard = ({ children }) => {
  const scroll = getScroll();

  return <div className={`hovingCard ${scroll !== 0 ? 'visible' : 'invisible'}`}>{children}</div>;
};

export default HovingCard;
