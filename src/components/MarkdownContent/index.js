import {
  Box,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import React from 'react';
import RehypeReact from 'rehype-react';
import '@fontsource/merriweather';
import { Divider } from '@chakra-ui/layout';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: ({ children }) => (
      <Heading as="h1" size="2xl">
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size="xl">
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size="lg">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" size="md">
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading as="h5" size="sm">
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading as="h6" size="xs">
        {children}
      </Heading>
    ),
    p: ({ children }) => (
      <Text fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} my="35px">
        {children}
      </Text>
    ),
    hr: () => {
      return <Divider />;
    },
    ul: ({ children }) => {
      return <UnorderedList spacing="2">{children}</UnorderedList>;
    },
    ol: ({ children }) => {
      return <OrderedList spacing="2">{children}</OrderedList>;
    },
    li: ({ children }) => {
      return (
        <ListItem>
          <Text fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}>{children}</Text>
        </ListItem>
      );
    },
    blockquote: ({ children }) => {
      return (
        <Box pl="5" as="blockquote" fontWeight="bold" borderLeft="2px">
          <Text as="div">{children}</Text>
        </Box>
      );
    },
    a: props => {
      return (
        <Link href={props.href} color="facebook.400" isExternal>
          {props.children}
        </Link>
      );
    },
  },
}).Compiler;

const MarkdownContent = ({ html }) => {
  return (
    <Box
      fontFamily="merriweather"
      px={['0', '0', '0', '100px', '200px']}
      lineHeight="35px"
    >
      {renderAst(html)}
    </Box>
  );
};

export default MarkdownContent;
