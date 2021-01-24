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

import TimeAgo from 'react-timeago';

import { Link } from 'react-router-dom';

const PostPreview = ({ post }) => {
  return (
    <ChakraProvider theme={theme}>
      <HStack
        justifyContent="space-between"
        bgColor="white"
        w="90%"
        borderRadius={8}
        p="20px"
      >
        <VStack alignItems="left" w="80%">
          <Text color="gray.500">
            Posted by {post.author} <TimeAgo date={post.published} />
          </Text>
          <Text fontSize="3xl" lineHeight="30px">
            <Link
              to={{
                pathname: '/postview',
                state: post, // your data array of objects
              }}
            >
              <b>{post.title}</b>
            </Link>
          </Text>
          <Text color="gray.500" noOfLines={3}>
            {post.content}
          </Text>
        </VStack>
        <VStack alignItems="right" textAlign="right">
          <Text color="gray.500" lineHeight="25px">
            upvotes: {post.upvotes}
            <br />
            downvotes: {post.downvotes}
            <br />
            total: {+post.upvotes + +post.downvotes}
          </Text>
        </VStack>
      </HStack>
    </ChakraProvider>
  );
};

export default PostPreview;
