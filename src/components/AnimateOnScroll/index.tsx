import * as React from 'react';
import { motion } from 'framer-motion';

type WithAnimateOnScrollProps = {
  children: React.ReactNode;
  /** How much of the element must be visible before it animates in (0-1). */
  amount?: number;
};

/** Fades and slides children up the first time they scroll into view. */
export function WithAnimateOnScroll({ children, amount = 0.5 }: WithAnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: amount }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
