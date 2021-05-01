import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import React from 'react';

const Member = ({ member }) => {
  const { member_name, member_school, member_course } = member;
  return (
    <Box my="3">
      <Heading size="md">{member_name}</Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>
        {member_school}
      </Text>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>
        {member_course}
      </Text>
    </Box>
  );
};

const DepartmentAccordion = ({ department }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Heading
            flex="1"
            textAlign="left"
            size="md"
            fontWeight="normal"
            my="2"
          >
            {department.department_name}
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Heading
            size="md"
            textAlign="center"
            fontWeight="normal"
            my="5"
            color={useColorModeValue('gray.600', 'gray.300')}
          >
            {department.description}
          </Heading>
          <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={8} textAlign="center">
            {department.team_member.map(member => {
              return <Member member={member} key={member.member_name} />;
            })}
          </SimpleGrid>
        </AccordionPanel>
      </h2>
    </AccordionItem>
  );
};

const CommitteeList = ({ departments }) => {
  return (
    <Accordion allowMultiple my="8">
      {departments.map(department => {
        return (
          <DepartmentAccordion
            key={department.department_name}
            department={department}
          />
        );
      })}
    </Accordion>
  );
};

export default CommitteeList;
