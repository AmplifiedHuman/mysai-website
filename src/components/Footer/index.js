import React from 'react';

import {
  Box,
  Container,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import moment from 'moment';

const SocialButton = ({ children, label, href }) => {
  return (
    <IconButton
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      size="md"
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.400', 'whiteAlpha.300'),
      }}
      icon={children}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </IconButton>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontSize="md">
          © {moment().year()} MYSAI. All rights reserved
        </Text>
        <Stack direction={'row'} spacing={5}>
          <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/mysaireland/'}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/company/mysai/about/'}
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton
            label={'Github'}
            href={'https://github.com/AmplifiedHuman/mysai-website'}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
