import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FiMoon } from '@react-icons/all-files/fi/FiMoon';
import { FiSun } from '@react-icons/all-files/fi/FiSun';

const Toggle = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    icon: { size, scheme, variant },
  } = props;
  return (
    <IconButton
      aria-label="Dark Mode Toggle"
      onClick={() => toggleColorMode()}
      colorScheme={scheme}
      variant={variant}
      icon={
        colorMode === 'light' ? <FiMoon size={size} /> : <FiSun size={size} />
      }
    />
  );
};

Toggle.propTypes = {
  icon: PropTypes.shape({
    size: PropTypes.string,
    scheme: PropTypes.string,
    variant: PropTypes.string,
  }),
};

export default Toggle;
