import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Divider,
  Stack,
} from '@chakra-ui/react';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';

const NavigationDrawer = props => {
  const {
    color: { variant },
    icon,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <IconButton
        aria-label="Menu Toggle"
        ref={btnRef}
        onClick={onOpen}
        variant={variant}
        colorScheme={icon.scheme}
        icon={<FiMenu size={icon.size} />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              bg="blue.500"
              display="flex"
              justifyContent="center"
            >
              MYSAI
            </DrawerHeader>

            <DrawerBody>
              <Stack
                direction="column"
                spacing={4}
                align="center"
                mx="8"
                variant={variant}
              >
                {props.children}
                <Divider />
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              {/* TODO:Add social links */}
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

NavigationDrawer.propTypes = {
  color: PropTypes.shape({
    scheme: PropTypes.string,
    variant: PropTypes.string,
  }),
  icon: PropTypes.shape({
    size: PropTypes.string,
    scheme: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default NavigationDrawer;
