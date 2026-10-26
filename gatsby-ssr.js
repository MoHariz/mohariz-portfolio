import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import RootWrapper from './src/components/RootWrapper';
import theme from './src/theme';

// Render with the same providers on the server so Chakra styles are in the initial HTML.
export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};

// Apply the saved color mode before React loads, so dark mode doesn't flash light on refresh.
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript key='chakra-color-mode' initialColorMode={theme.config.initialColorMode} />
  ]);
};
