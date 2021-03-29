import React from 'react';
import { Stack, Heading, Center } from '@chakra-ui/react';
import EventCard from '../EventCard';
import { getImage } from 'gatsby-plugin-image';

const UpcomingEvents = ({ upcomingEvents }) => {
  return (
    <Stack>
      <Heading mb={10}>Upcoming Events</Heading>
      <Center>
        <Stack
          direction={['column', 'column', 'column', 'row', 'row']}
          spacing="30"
        >
          {upcomingEvents.map(
            ({
              node: {
                frontmatter,
                fields: { slug },
              },
            }) => {
              return (
                <EventCard
                  title={frontmatter.title}
                  eventStart={frontmatter.event_start}
                  image={getImage(frontmatter.featured_image)}
                  link={slug}
                  key={frontmatter.title}
                />
              );
            }
          )}
        </Stack>
      </Center>
    </Stack>
  );
};

export default UpcomingEvents;
