import React from 'react';
import { Flex, ButtonGroup, Spacer, Box, Button } from '@chakra-ui/react';

import Logo from '../ui/Logo';
import Toggle from './Toggle';
import NavigationDrawer from './Drawer';

const NavBar = () => {
  const colorOptions = { variant: 'ghost', colorScheme: 'gray' };
  const iconOptions = { size: '30px', colorScheme: 'blue', variant: 'ghost' };
  const routes = ['Home', 'About Us', 'Events']
  let buttons = (
    <>
      {routes.map(route => {
        return (
          <Button
            variant={colorOptions.variant}
            colorScheme={colorOptions.colorScheme}
            size='md'
          >
            {route}
          </Button>
        );
      })}
      <Toggle icon={iconOptions} />
    </>
  );

  return (
    <Flex alignItems="center" boxShadow="md">
      <Logo />
      <Spacer />
      <ButtonGroup
        spacing="5"
        mr="4"
        display={['none', 'none', 'block', 'block']}
      >
        {buttons}
      </ButtonGroup>
      <Box display={['block', 'block', 'none', 'none']} mr="4">
        <NavigationDrawer color={colorOptions} icon={iconOptions}>
          {buttons}
        </NavigationDrawer>
      </Box>
    </Flex>
  );
};

export default NavBar;
