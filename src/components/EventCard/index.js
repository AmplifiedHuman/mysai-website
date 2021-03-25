import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export default function EventCard() {
  return (
    <Box
      maxW={['600px', '600px', '600px', '350px', '350px']}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
    >
      <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <StaticImage
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          style={{ height: '100%', width: '100%' }}
          transformOptions={{ fit: 'contain' }}
        />
      </Box>
      <Stack>
        <Text
          color="blue.300"
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}
        >
          Event
        </Text>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          MYSAI Bonding Event
        </Heading>
        <Text color="gray.500">08 Feb 2021 - 8:00pm GMT</Text>
      </Stack>
      <Stack mt={6} direction={'column'} spacing={4} align={'start'}>
        <Button>Add To Calendar</Button>
      </Stack>
    </Box>
  );
}
