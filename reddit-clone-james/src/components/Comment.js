import React from 'react';
import {
  ChakraProvider,
  Text,
  VStack,
  theme,
  HStack,
  Flex,
  Image,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import TimeAgo from 'react-timeago';

const Comment = ({ comment }) => {
  return (
    <ChakraProvider theme={theme}>
      <HStack justifyContent="space-between" w="100%" py="10px">
        <VStack alignItems="left" w="80%">
          <Text color="gray.500">{comment.author}</Text>
          <Text>{comment.content}</Text>
        </VStack>
        <VStack alignItems="right" textAlign="right">
          <Text color="gray.500" lineHeight="25px">
            +{comment.upvotes}
            <br />-{comment.downvotes}
          </Text>
        </VStack>
      </HStack>
    </ChakraProvider>
  );
};

export default Comment;
