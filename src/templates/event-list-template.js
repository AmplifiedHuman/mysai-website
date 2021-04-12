import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/layout';
import { getImage } from 'gatsby-plugin-image';
import EventCard from '../components/EventCard';
import { Image } from '@chakra-ui/image';
import Icon from '@chakra-ui/icon';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';

const Banner = () => {
  return (
    <Container maxW="7xl">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 18, md: 20 }}
        pb={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '25%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bgGradient: 'linear(to-r, red.400,pink.400)',
                zIndex: -1,
              }}
            >
              Connect Through
            </Text>
            <br />
            <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              Awesome Events!
            </Text>
          </Heading>
          <Text
            textColor={useColorModeValue('gray.500', 'gray.300')}
            fontSize="lg"
          >
            Looking for something to do in Ireland? Browse through some upcoming
            events and some of the best events we have organised in the past.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('pink.100', 'pink.300')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            {/* TODO: temporary image */}
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

const Blob = props => {
  return (
    <Icon
      width={'90%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

const EventsPage = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/events' : `/events/${currentPage - 1}`;
  const nextPage = `/events/${currentPage + 1}`;
  const events = data.events.edges;

  return (
    <Layout>
      <Seo title="Events" />
      <Banner />
      <SimpleGrid
        minChildWidth="300px"
        spacing="30px"
        gap="50px"
        justifyItems="center"
      >
        {events.map(
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
                image={getImage(frontmatter.featured_image)}
                link={slug}
                location={frontmatter.location}
                eventLink={frontmatter.event_link}
                key={frontmatter.title}
              />
            );
          }
        )}
      </SimpleGrid>
      <HStack justifyContent="center" mt="10">
        {!isFirst && (
          <>
            <Button as={Link} to={prevPage} rel="prev">
              ←
            </Button>
            <Button as={Link} to={prevPage}>
              {currentPage - 1}
            </Button>
          </>
        )}
        <Button
          as={Link}
          to={`/events/${currentPage === 1 ? '' : currentPage}`}
          bgGradient="linear(to-r, red.400,pink.400)"
          color="white"
        >
          {currentPage}
        </Button>
        {!isLast && (
          <>
            <Button as={Link} to={nextPage}>
              {currentPage + 1}
            </Button>
            <Button as={Link} to={nextPage} rel="next">
              →
            </Button>
          </>
        )}
      </HStack>
    </Layout>
  );
};

export const data = graphql`
  query EventsQuery($skip: Int!, $limit: Int!) {
    events: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "event-template" } } }
      sort: { fields: [frontmatter___event_start], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            event_start(formatString: "Do MMM YYYY h:mma")
            event_end(formatString: "Do MMM YYYY h:mma")
            location
            event_link
            featured_image {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default EventsPage;
