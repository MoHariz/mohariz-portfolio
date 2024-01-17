import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};
