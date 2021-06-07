import React from 'react';
import useOnScreen from '../../functions/useOnScreen';
import styles from './index.module.scss';

const HoverCard: React.FC = ({ children }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
  const animationPlayState = isVisible ? 'running' : 'paused';

  return (
    <div ref={ref} className={styles.container} style={{ animationPlayState }}>
      {children}
    </div>
  );
};

export default HoverCard;
