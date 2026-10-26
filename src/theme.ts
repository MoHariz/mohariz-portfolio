import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

// Poppins is loaded by gatsby-plugin-google-fonts. Chakra's base styles set the body font,
// so the font has to be set here for it to apply.
const fontStack = 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const theme = extendTheme({
  config,
  fonts: {
    heading: fontStack,
    body: fontStack
  }
});

export default theme;
