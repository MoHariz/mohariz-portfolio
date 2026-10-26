import * as React from 'react';
import cs from 'classnames';
import Typography from '@components/Typography';

type SectionHeadingProps = {
  children: React.ReactNode;
  variant?: 'h1' | 'h3';
  className?: string;
};

/** Uppercase section title with the yellow accent bar used across the site. */
const SectionHeading: React.FC<SectionHeadingProps> = ({ children, variant = 'h3', className }) => (
  <div className={cs('mb-8', className)}>
    <Typography
      variant={variant}
      as={variant === 'h1' ? 'h1' : 'h2'}
      bold
      className='uppercase tracking-tight'
    >
      {children}
    </Typography>
    <span
      aria-hidden
      className='block w-12 h-1.5 mt-2 bg-yellow-300 border border-black dark:border-transparent'
    />
  </div>
);

export default SectionHeading;
