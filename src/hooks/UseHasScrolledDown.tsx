import { useRef, useState, useEffect } from 'react';
/**
 * A hook that determines if the user has scrolled down on the page.
 * 
 * It listens to the scroll event and updates the state based on the scroll direction.
 * The state is `true` if the user has scrolled down from the initial position, 
 * and `false` if scrolled up or remains at the initial position.
 * 
 * @returns {boolean} hasScrolledDown - The state indicating if a scroll down has occurred.
 */
const useHasScrolledDown = () => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop.current) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return hasScrolledDown;
};

export default useHasScrolledDown;

