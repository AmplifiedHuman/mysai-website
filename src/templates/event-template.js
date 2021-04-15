import {
  Box,
  Divider,
  Heading,
  HStack,
  Stack,
  VStack,
} from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import Seo from '../components/SEO';
import '@fontsource/merriweather';
import moment from 'moment';
import { ImLocation } from '@react-icons/all-files/im/ImLocation';
import { BiLink } from '@react-icons/all-files/bi/BiLink';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';
import RemoteImage from '../components/RemoteImage';

const randomColor = id => {
  const colors = [
    'twitter.500',
    'red.500',
    'green.500',
    'cyan.500',
    'purple.500',
    'teal.500',
    'pink.500',
    'gray.500',
  ];
  const max = colors.length;
  let hash = 0;
  for (let i = 0; i < id.length; ++i) {
    hash = (Math.imul(31, hash) + id.charCodeAt(i)) | 0;
  }
  return colors[Math.abs(hash) % max];
};

const EventPage = ({ data }) => {
  const markdownRemark = data.markdownRemark;
  const { frontmatter } = markdownRemark;
  const featuredImage = frontmatter.featured_image;
  const eventStartDate = moment(frontmatter.event_start);
  const eventEndDate = moment(frontmatter.event_end);
  const isSameDay = moment(frontmatter.event_start).isSame(
    frontmatter.event_end,
    'day'
  );
  let shortenedDuration = '';
  if (isSameDay) {
    shortenedDuration = eventStartDate.format('Do MMM YYYY | h:mma - ');
    shortenedDuration += eventEndDate.format('h:mma');
  }
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <Stack
        alignItems="center"
        direction={['column', 'column', 'column', 'row', 'row']}
        spacing={['5', '5', '5', '10', '10']}
        border={['0', '0', '0', '2px', '2px']}
        borderColor={[
          '0',
          '0',
          '0',
          randomColor(markdownRemark.id),
          randomColor(markdownRemark.id),
        ]}
        mb="4"
      >
        <Box w="full" maxW="650px">
          <RemoteImage url={featuredImage} alt={frontmatter.title} />
        </Box>
        <VStack justifyContent="start">
          <VStack
            spacing="5"
            alignItems={['start', 'center', 'center', 'start', 'start']}
            color={useColorModeValue('gray.700', 'white')}
          >
            <Heading
              fontFamily="merriweather"
              size="lg"
              textAlign={['center', 'center', 'left', 'left', 'left']}
            >
              {frontmatter.title}
            </Heading>
            {isSameDay ? (
              <Heading size="sm" fontWeight="500">
                {shortenedDuration}
              </Heading>
            ) : (
              <VStack
                spacing="3"
                alignItems={['start', 'center', 'center', 'start', 'start']}
              >
                <Heading size="sm" as="h3" textAlign="center">
                  FROM
                </Heading>
                <Heading size="sm" textAlign="left" as="h3" fontWeight="500">
                  {eventStartDate.format('Do MMM YYYY h:mma')}
                </Heading>
                <Heading size="sm" textAlign="left" as="h3">
                  TO
                </Heading>
                <Heading size="sm" textAlign="left" as="h3" fontWeight="500">
                  {eventEndDate.format('Do MMM YYYY h:mma')}
                </Heading>
              </VStack>
            )}
            <HStack alignItems="center" spacing="3">
              <Icon
                boxSize={6}
                as={ImLocation}
                aria-hidden="true"
                fill="red.500"
              />
              <Heading size="sm" as="h3">
                {frontmatter.location}
              </Heading>
            </HStack>
            {frontmatter.event_link === '' ? (
              ''
            ) : (
              <Button
                leftIcon={<BiLink />}
                colorScheme="blue"
                variant="outline"
                as="a"
                href={frontmatter.event_link}
                target="_blank"
              >
                Link
              </Button>
            )}
          </VStack>
        </VStack>
      </Stack>
      <Divider />
      <MarkdownContent html={markdownRemark.htmlAst} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query EventByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      htmlAst
      frontmatter {
        title
        description
        event_start
        event_end
        location
        event_link
        featured_image
      }
    }
  }
`;

EventPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default EventPage;
