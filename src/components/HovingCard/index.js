import React from 'react';
import './index.css';

import getScroll from '../../functions/getScrollY';

/**
 * This is hoving card that will have a special visibel/invisivel based on the scroll position
 * @param {object} props This is the react props
 */
const HovingCard = ({ children }) => {
  const scroll = getScroll();

  return <div className={`hovingCard ${scroll > 50 ? 'visible' : 'invisible'}`}>{children}</div>;
};

export default HovingCard;
