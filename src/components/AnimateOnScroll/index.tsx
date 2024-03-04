import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import "./index.scss";

type AnimationName = 'fade-in' | 'fade-up';

type AnimateOnScrollProps = {
  children: React.ReactNode;
  oneDirectional?: boolean;
  animationName?: AnimationName;
  animationDuration?: string; // e.g. '1s', '500ms'
  animationTimingFunction?: string; // e.g. 'ease-out', 'linear'
  animationDelay?: string; // e.g. '1s', '500ms'
  threshold?: number;
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
 * @param {number} threshold - The threshold for the intersection
 * @return {ReactElement} The animated element
 */
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  oneDirectional = false,
  animationName = 'fade-in',
  animationDuration = '1s',
  animationTimingFunction = 'ease-out',
  animationDelay = '0s',
  threshold = 0.1 // Setting a default threshold of 10%
}) => {
  const [isVisible, setIsVisible] = useState(!oneDirectional);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!oneDirectional || entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
        }
      });
    }, { threshold }); // Using threshold in the options object

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [oneDirectional, threshold]); // Adding threshold as a dependency


  return (
    <div
      ref={domRef}
      style={{
        animationDuration,
        animationTimingFunction,
        animationDelay,
      }}
      className={`${!isVisible ? 'aos-hidden' : ''} ${isVisible ? `aos-${animationName}` : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;


type WithAnimateOnScrollProps = {
    children: React.ReactNode;
    amount?: number;
}

/**
 * Animate the children component on scroll with a specified amount.
 *
 * @param {WithAnimateOnScrollProps} children - The component to be animated
 * @param {number} amount - The amount of scroll to trigger animation (default is 0.5)
 * @return {ReactNode} The animated component
 */
export function WithAnimateOnScroll({ children, amount=0.5 }: WithAnimateOnScrollProps) {
    return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: amount }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
    )
}