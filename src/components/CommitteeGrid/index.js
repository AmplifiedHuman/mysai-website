import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CommitteeCard = ({ course, committeeName, photo, position, school }) => {
  return (
    <Box py={6}>
      <Box
        maxW={'350px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Container w="180px" overflow="hidden" mx="auto" mb="4">
          <GatsbyImage
            image={photo}
            alt={committeeName}
            style={{ borderRadius: '100%' }}
          />
        </Container>
        <Heading fontSize={'2xl'} fontFamily={'body'} my="2">
          {committeeName}
        </Heading>
        <Text
          fontWeight={600}
          mb={6}
          textAlign="center"
          color={useColorModeValue('facebook.400', 'twitter.200')}
        >
          {position}
        </Text>
        <Spacer />
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          lineHeight="1.8"
          whiteSpace="normal"
          px={3}
        >
          {committeeName} is a {course} studying in{' '}
          <Text fontWeight="bold" whiteSpace="normal" as="span">
            {school}
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

const CommitteeGrid = ({ committees }) => {
  return (
    <>
      <Heading textAlign="center">Meet Our Committee</Heading>
      <SimpleGrid
        minChildWidth="300px"
        columnGap="50px"
        justifyItems="center"
        justifyContent="center"
      >
        {committees.map(
          ({
            team_member: {
              member_course: course,
              member_name: committeeName,
              member_photo: photo,
              member_position: position,
              member_school: school,
            },
          }) => {
            return (
              <CommitteeCard
                key={committeeName}
                course={course}
                committeeName={committeeName}
                photo={getImage(photo)}
                position={position}
                school={school}
              />
            );
          }
        )}
      </SimpleGrid>
    </>
  );
};

export default CommitteeGrid;
