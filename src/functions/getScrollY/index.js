import React, { useEffect, useState } from 'react';

const getScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  });

  const handler = (e) => {
    setScroll(window.scrollY);
  };

  return scroll;
};

export default getScroll;
