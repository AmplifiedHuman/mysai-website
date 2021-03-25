import React from 'react';
import { Stack, Heading, Center } from '@chakra-ui/react';
import EventCard from '../EventCard';

const UpcomingEvents = () => {
  return (
    <Stack>
      <Heading mb={10}>Upcoming Events</Heading>
      <Center>
        <Stack
          direction={['column', 'column', 'column', 'row', 'row']}
          spacing="30"
        >
          <EventCard />
          <EventCard />
          <EventCard />
        </Stack>
      </Center>
    </Stack>
  );
};

export default UpcomingEvents;
