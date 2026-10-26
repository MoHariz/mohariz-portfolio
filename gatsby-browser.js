import React from 'react';
import RootWrapper from './src/components/RootWrapper';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};
