import { useState, useEffect } from 'react';

/** True once the page has been scrolled away from the very top. */
export const useNotAtPageTop = () => {
  const [isNotAtPageTop, setIsNotAtPageTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNotAtPageTop((window.pageYOffset || document.documentElement.scrollTop) > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isNotAtPageTop;
};
