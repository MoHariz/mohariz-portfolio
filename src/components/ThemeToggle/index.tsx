import React, { useEffect } from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorMode]);

  return (
    <div className='flex items-center gap-2'>
      <Switch
        colorScheme='teal'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        aria-label="Toggle dark mode"
      />
      <FontAwesomeIcon icon={colorMode === 'dark' ? faMoon : faSun} />
    </div>
  );
};
