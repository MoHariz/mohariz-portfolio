import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MotionConfig } from 'framer-motion';
import theme from '@src/theme';

/** Shared providers for gatsby-browser and gatsby-ssr. */
const RootWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider theme={theme}>
    {/* Skip scroll/hover animations for visitors who prefer reduced motion. */}
    <MotionConfig reducedMotion='user'>{children}</MotionConfig>
  </ChakraProvider>
);

export default RootWrapper;
