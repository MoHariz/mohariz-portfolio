import React from 'react';
import RootWrapper from './src/components/RootWrapper';
// Self-hosted Poppins (only the weights the site uses). Gatsby inlines this CSS into the page,
// so text no longer waits on a render-blocking request to Google Fonts.
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/400-italic.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};
