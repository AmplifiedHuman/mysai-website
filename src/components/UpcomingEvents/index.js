import React from 'react';
import { Stack, Heading, Center } from '@chakra-ui/react';
import EventCard from '../EventCard';
import { getImage } from 'gatsby-plugin-image';

const UpcomingEvents = ({ upcomingEvents }) => {
  return (
    <Stack>
      <Heading mb={10}>Upcoming Events</Heading>
      <Center>
        {upcomingEvents.length !== 0 ? (
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
                    eventEnd={frontmatter.event_end}
                    eventLink={frontmatter.event_link}
                    location={frontmatter.location}
                    image={getImage(frontmatter.featured_image)}
                    link={slug}
                    key={frontmatter.title}
                  />
                );
              }
            )}
          </Stack>
        ) : (
          <Heading size="md" fontWeight="normal" py="4" color="gray.500">
            Looks like there are no upcoming events at the moment, but stay
            tuned for more events!
          </Heading>
        )}
      </Center>
    </Stack>
  );
};

export default UpcomingEvents;
