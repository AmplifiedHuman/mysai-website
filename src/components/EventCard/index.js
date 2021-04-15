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
import { Link } from 'gatsby';
import moment from 'moment-timezone';
import { google } from 'calendar-link';
import RemoteImage from '../RemoteImage';

const openLink = link => {
  window.open(link, '_blank').focus();
};

export default function EventCard({
  title,
  eventStart,
  eventEnd,
  image,
  link,
  location,
  eventLink,
}) {
  const event = {
    title: title,
    start: moment.tz(eventStart, 'Do MMM YYYY h:mma', 'Europe/London').toDate(),
    end: moment.tz(eventEnd, 'Do MMM YYYY h:mma', 'Europe/London').toDate(),
    location: location,
    description: `<a>${eventLink}</a>`,
  };
  return (
    <Box
      maxW={['600px', '600px', '600px', '350px', '350px']}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      as={Link}
      to={link}
      display="flex"
      flexDir='column'
    >
      <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <RemoteImage
          url={image}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          alt={title}
        />
      </Box>
      <Stack>
        <Text
          color="red.300"
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text"
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
        {moment(eventEnd, 'Do MMM YYYY h:mma').isBefore(
          moment().tz('Europe/London'),
          'day'
        ) ? (
          ''
        ) : (
          <Button
            onClick={() => {
              openLink(google(event));
            }}
          >
            Add To Calendar
          </Button>
        )}
      </Stack>
    </Box>
  );
}
