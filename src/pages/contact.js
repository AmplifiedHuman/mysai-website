import { Button, IconButton } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import { Image } from '@chakra-ui/image';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';

const ContactCard = () => {
  const { handleSubmit, register, formState } = useForm();
  const [formStatus, setFormStatus] = useState('NEW');
  const onSubmit = async values => {
    try {
      const res = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status !== 200) {
        setFormStatus('ERROR');
      } else {
        setFormStatus('SUCCESS');
      }
    } catch (err) {
      setFormStatus('ERROR');
    }
  };

  return (
    <Flex justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={14} flexGrow="1">
        <Stack align={'center'}>
          <Heading size="xl" textAlign="center">
            Feel free to reach out
          </Heading>
          <Text
            fontSize={'lg'}
            color={useColorModeValue('gray.600', 'gray.300')}
            textAlign="center"
          >
            We are happy to answer any queries{' '}
            <span role="img" aria-label="smiley face">
              😊
            </span>
          </Text>
        </Stack>
        <Box rounded={'lg'} px="8" py="6">
          {formStatus === 'NEW' ? (
            <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  {...register('name', {
                    required: true,
                  })}
                  name="name"
                  placeholder="Name"
                />
              </FormControl>
              <FormControl id="from" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  {...register('from', {
                    required: true,
                  })}
                  placeholder="Email"
                  name="from"
                />
              </FormControl>
              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  {...register('subject')}
                />
              </FormControl>
              <FormControl id="content" isRequired>
                <FormLabel>Content</FormLabel>
                <Textarea
                  type="text"
                  name="content"
                  placeholder="Leave us a message"
                  height="130px"
                  variant="flushed"
                  {...register('content', {
                    required: true,
                  })}
                />
              </FormControl>
              <Button
                mt={4}
                colorScheme="stripe"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Submit
              </Button>
            </Stack>
          ) : (
            ''
          )}
          {formStatus === 'ERROR' ? (
            <Flex direction="column" alignItems="center">
              <Image
                src="https://res.cloudinary.com/mysai/image/upload/v1617416625/Sad_face_Outline_hw6gst.svg"
                alt="Sad Face"
              />
              <Heading size="lg" textAlign="center">
                Ahh! something went wrong
              </Heading>
              <Text color="gray.500" mt="4" textAlign="center">
                Try to refresh the page or try again later. If issue persists,
                please send an email to{' '}
                <Link color="blue.500" href="mailto:websitemysai@gmail.com">
                  websitemysai@gmail.com
                </Link>
                .
              </Text>
            </Flex>
          ) : (
            ''
          )}
          {formStatus === 'SUCCESS' ? (
            <Flex direction="column" alignItems="center">
              <Box color="green.500" mb={4}>
                <FaCheckCircle size={70} />
              </Box>
              <Heading size="lg" textAlign="center">
                Success
              </Heading>
              <Text color="gray.500" mt="4" textAlign="center">
                Your response has been recorded and we will try to respond as
                soon as possible. Meanwhile, feel free to checkout our events
                and blogs.
              </Text>
            </Flex>
          ) : (
            ''
          )}
        </Box>
      </Stack>
    </Flex>
  );
};

const AdditionalContacts = () => {
  return (
    <VStack
      mx={'auto'}
      alignItems="center"
      justifyContent="center"
      spacing="10"
    >
      <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={8} textAlign="center">
        <Box>
          <Heading size="md">General Enquiries</Heading>
          <Link
            color={useColorModeValue('gray.600', 'gray.300')}
            href="mailto:general@mysaireland.com"
          >
            general@mysaireland.com
          </Link>
        </Box>
        <Box>
          <Heading size="md">Human Resources</Heading>
          <Link
            color={useColorModeValue('gray.600', 'gray.300')}
            href="mailto:hr@mysaireland.com"
          >
            hr@mysaireland.com
          </Link>
        </Box>
        <Box>
          <Heading size="md">Corporate Relations</Heading>
          <Link
            color={useColorModeValue('gray.600', 'gray.300')}
            href="mailto:corporate-relations@mysaireland.com"
          >
            corporate-relations@mysaireland.com
          </Link>
        </Box>
        <Box>
          <Heading size="md">Public Relations</Heading>
          <Link
            color={useColorModeValue('gray.600', 'gray.300')}
            href="mailto:pr@mysaireland.com"
          >
            pr@mysaireland.com
          </Link>
        </Box>
        <Box>
          <Heading size="md">Project and Events</Heading>
          <Link
            color={useColorModeValue('gray.600', 'gray.300')}
            href="mailto:events@mysaireland.com"
          >
            events@mysaireland.com
          </Link>
        </Box>
        <Box>
          <Heading size="md">Website</Heading>
          <Link
            color={useColorModeValue('gray.600', 'gray.300')}
            href="mailto:website@mysaireland.com"
          >
            website@mysaireland.com
          </Link>
        </Box>
      </SimpleGrid>
      <HStack flexWrap="wrap" spacing={['4', '10']} justifyContent="center">
        <IconButton
          colorScheme="facebook"
          icon={<FaFacebook />}
          variant="ghost"
          aria-label="Facebook"
          size="lg"
          fontSize="40px"
        />
        <IconButton
          colorScheme="twitter"
          icon={<FaTwitter />}
          variant="ghost"
          aria-label="Twitter"
          size="lg"
          fontSize="40px"
        />
        <IconButton
          colorScheme="pink"
          icon={<FaInstagram />}
          variant="ghost"
          aria-label="Instagram"
          size="lg"
          fontSize="40px"
        />
        <IconButton
          colorScheme="linkedin"
          icon={<FaLinkedinIn />}
          variant="ghost"
          aria-label="LinkedIn"
          size="lg"
          fontSize="40px"
        />
      </HStack>
    </VStack>
  );
};

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <ContactCard />
    <AdditionalContacts />
  </Layout>
);

export default Contact;
