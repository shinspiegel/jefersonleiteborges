import { useRef, useState, useEffect, MutableRefObject } from 'react';

type iUseOnScreen = (options?: IntersectionObserverInit) => [MutableRefObject<any>, boolean];

const useOnScreen: iUseOnScreen = ({ root = null, rootMargin = '0px', threshold = 1 } = {}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callBackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, { root, rootMargin, threshold });
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, root, rootMargin, threshold]);

  return [containerRef, isVisible];
};

export default useOnScreen;
