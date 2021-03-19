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

export default function Intro() {
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
        <Feature title="Uniting Malaysians" icon={<FaHeart />}>
          The Malaysian Student Association of Ireland (MYSAI) a national
          student organization based in Ireland set up to provide welfare for
          the Malaysian student community. We are a diverse yet united team of
          passionate and driven Malaysian students coming from 14 different
          institutions/universities all over Ireland with various academic
          backgrounds.
        </Feature>

        <Feature title="Developing Talent" icon={<FaMagic />}>
          Within our association, we also made it our goal to develop leadership
          skills and technical intellect which could improve career prospects.
          Consisting of up to 40 committee members, MYSAI holds frequent welfare
          related events aiming to enhance Malaysian students’ experience of
          studying in Ireland both intellectually and ethically.
        </Feature>

        <Feature title="Community Development" icon={<BsPeopleFill />}>
          We believe that building up a community is the key to the empowerment
          of our students therefore it is our aim to unite Malaysian students
          under our umbrella organization, establishing a safe space which
          students can provide mutual support and seek help in times of need.
        </Feature>
      </SimpleGrid>
    </Flex>
  );
}
