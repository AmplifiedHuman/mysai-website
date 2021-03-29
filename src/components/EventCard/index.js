import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function EventCard({ title, eventStart, image, link }) {
  return (
      <Stack
        maxW={['600px', '600px', '600px', '350px', '350px']}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        flexGrow={'3'}
        as={Link}
        to={link}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <GatsbyImage
            image={image}
            style={{ height: '100%', width: '100%' }}
            alt={title}
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
            {title}
          </Heading>
        </Stack>
        <Spacer />
        <Stack mt={6} direction={'column'} spacing={4} align={'start'}>
          <Text color="gray.500">{eventStart}</Text>
          <Button>Add To Calendar</Button>
        </Stack>
      </Stack>
  );
}
