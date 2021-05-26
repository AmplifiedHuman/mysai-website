import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  Alert,
  AlertIcon,
  Link,
} from '@chakra-ui/react';

const avatars = [
  {
    name: 'U S',
  },
];

export default function JoinCard({
  associateApplication,
  ambassadorApplication,
  memberApplication,
}) {
  let message = 'Applications are currently closed for';
  if (!associateApplication.is_open && !ambassadorApplication.is_open) {
    message += ' associates and student ambassadors';
  } else if (!associateApplication.is_open) {
    message += ' associates';
  } else if (!ambassadorApplication.is_open) {
    message += ' student ambassadors';
  }
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
        alignItems="center"
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            zIndex={2}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Members, Associates{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-bl, #3370ff,#5C8DFF)"
              bgClip="text"
            >
              &
            </Text>{' '}
            Ambassadors{' '}
          </Heading>
          <Stack
            direction={'row'}
            spacing={4}
            align={'center'}
            justify={['center', 'center', 'left', 'left', 'left']}
          >
            <AvatarGroup>
              {avatars.map(avatar => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size="lg"
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-l, #3370ff,#5C8DFF)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              fontWeight="bold"
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              width="60px"
              height="60px"
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'white'}
          rounded={'xl'}
          p={{ base: 6, sm: 6, md: 8 }}
          spacing={{ base: 5 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4} justifyContent="center">
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Join our team
              <Text
                as={'span'}
                bgGradient="linear(to-bl, #3370ff, #5C8DFF)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text
              color={'gray.500'}
              fontSize={{ base: 'sm', sm: 'md' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              We’re looking for amazing members, associates and student
              ambassadors! Become a part of our association and build meaningful
              connections with other fellow Malaysians! Please click on the
              links below to apply.
            </Text>
          </Stack>
          <Button
            fontFamily={'heading'}
            colorScheme="stripe"
            color="white"
            as={Link}
            href={memberApplication}
            isExternal
          >
            Members
          </Button>
          {associateApplication.is_open ? (
            <Button
              href={associateApplication.application_url}
              textDecoration="none"
              as={Link}
              isExternal
              fontFamily={'heading'}
              colorScheme="stripe"
              color="white"
              w={ambassadorApplication.is_open ? '50%' : 'full'}
            >
              Associates
            </Button>
          ) : (
            ''
          )}
          {ambassadorApplication.is_open ? (
            <Button
              fontFamily={'heading'}
              colorScheme="stripe"
              color="white"
              href={ambassadorApplication.application_url}
              as={Link}
              isExternal
              w={associateApplication.is_open ? '50%' : 'full'}
            >
              Ambassadors
            </Button>
          ) : (
            ''
          )}
          {associateApplication.is_open && ambassadorApplication.is_open ? (
            ''
          ) : (
            <Alert status="warning" variant="subtle" color={'gray.800'}>
              <AlertIcon />
              {message}
            </Alert>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
