import React from 'react';
import RootWrapper from './src/components/RootWrapper';
// Self-hosted Poppins: Latin subset, only the weights the site uses. Gatsby inlines this CSS
// into each page, so text doesn't wait on a separate font stylesheet.
import '@fontsource/poppins/latin-400.css';
import '@fontsource/poppins/latin-400-italic.css';
import '@fontsource/poppins/latin-500.css';
import '@fontsource/poppins/latin-600.css';
import '@fontsource/poppins/latin-700.css';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};
