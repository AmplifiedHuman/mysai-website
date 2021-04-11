import React from 'react';
import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED64A6' /%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%23F56565' /%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%2338B2AC' /%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED8936' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

const CommitteeCard = ({
  course,
  committeeName,
  photo,
  position,
  school,
  index,
}) => {
  return (
    <Box py={6}>
      <Flex
        boxShadow={'lg'}
        maxW={'350px'}
        direction="column"
        width={'full'}
        rounded={'xl'}
        p={10}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          backgroundImage: backgrounds[index % 4],
        }}
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
      </Flex>
    </Box>
  );
};

const CommitteeGrid = ({ committees }) => {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
    >
      <Heading
        my={10}
        size="2xl"
        color={useColorModeValue('gray.700', 'gray.50')}
        wordBreak="normal"
        textAlign='center'
      >
        Meet Our Committee
      </Heading>
      <SimpleGrid
        minChildWidth="300px"
        spacing={'10'}
        justifyItems="center"
        justifyContent="center"
      >
        {committees.map(
          (
            {
              team_member: {
                member_course: course,
                member_name: committeeName,
                member_photo: photo,
                member_position: position,
                member_school: school,
              },
            },
            index
          ) => {
            return (
              <CommitteeCard
                key={committeeName}
                course={course}
                committeeName={committeeName}
                photo={getImage(photo)}
                position={position}
                school={school}
                index={index}
              />
            );
          }
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default CommitteeGrid;
