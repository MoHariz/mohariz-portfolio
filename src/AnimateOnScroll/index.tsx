import React, { useEffect, useRef, useState } from 'react';
import "./index.css";

type AnimationName = 'fade-in' | 'fade-up';

type AnimateOnScrollProps = {
  children: React.ReactNode;
  oneDirectional?: boolean;
  animationName?: AnimationName;
  animationDuration?: string; // e.g. '1s', '500ms'
  animationTimingFunction?: string; // e.g. 'ease-out', 'linear'
  animationDelay?: string; // e.g. '1s', '500ms'
}

/**
 * Animate elements on scroll based on intersection with the viewport.
 *
 * @param {Object} AnimateOnScrollProps - The props for the AnimateOnScroll component
 * @param {ReactNode} children - The child elements to be animated
 * @param {boolean} oneDirectional - Whether the animation should only occur in one direction
 * @param {string} animationName - The name of the animation to be applied
 * @param {string} animationDuration - The duration of the animation
 * @param {string} animationTimingFunction - The timing function for the animation
 * @param {string} animationDelay - The delay before the animation starts
 * @return {ReactElement} The animated element
 */
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  oneDirectional = false,
  animationName = 'fade-in',
  animationDuration = '1s',
  animationTimingFunction = 'ease-out',
  animationDelay = '0s'
}) => {
  // Assume the element is visible if oneDirectional is false, otherwise assume it's not visible.
  const [isVisible, setIsVisible] = useState(!oneDirectional);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!oneDirectional || entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
        }
      });
    });
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [oneDirectional]);

  return (
    <div
      ref={domRef}
      style={{
        animationDuration,
        animationTimingFunction,
        animationDelay,
      }}
      className={`transition-opacity ${isVisible ? `aos-${animationName}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;

