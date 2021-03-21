import React from 'react';
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { FaMagic } from '@react-icons/all-files/fa/FaMagic';
import { BsPeopleFill } from '@react-icons/all-files/bs/BsPeopleFill';

const Intro = props => {
  const { info } = props;
  const Feature = props => {
    return (
      <Box>
        <Icon
          boxSize={12}
          mb={4}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          color={useColorModeValue('gray.900')}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <Flex w="auto" justifyContent="center" alignItems="center">
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 3 }}
        spacing={20}
        py={20}
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Feature title={info[0].info_item.info_title} icon={<FaHeart />}>
          {info[0].info_item.info_item_description}
        </Feature>

        <Feature title={info[1].info_item.info_title} icon={<FaMagic />}>
          {info[1].info_item.info_item_description}
        </Feature>

        <Feature title={info[2].info_item.info_title} icon={<BsPeopleFill />}>
          {info[2].info_item.info_item_description}
        </Feature>
      </SimpleGrid>
    </Flex>
  );
};

export default Intro;
