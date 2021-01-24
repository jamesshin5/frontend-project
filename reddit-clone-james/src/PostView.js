import React from 'react';
import {
  ChakraProvider,
  Text,
  VStack,
  theme,
  HStack,
  Flex,
  Image,
  Box,
} from '@chakra-ui/react';

import { Link, useLocation } from 'react-router-dom';

import berkeleyskyline from './given-img/berkeley-skyline.png';
import berkeleylogo from './given-img/berkeley-logo.png';

import Comment from './components/Comment';

import TimeAgo from 'react-timeago';

const PostView = () => {
  let passedProps = useLocation();
  let data = passedProps.state;
  console.log(passedProps);
  console.log(data);
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Link to="/">
          <Flex bgSize="cover" direction="column" alignItems="center">
            <Image src={berkeleyskyline} alt="berkeley-skyline" />
          </Flex>
        </Link>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          mt="0px"
          px={{ base: '30px', md: '50px' }}
          py="10px"
          bgColor="white"
        >
          <HStack>
            <Link to="/">
              <Image src={berkeleylogo} alt="berkeley-logo" w="200px" />
            </Link>
            <Text fontFamily="Calistoga" fontSize="2xl" color="blue.800">
              R/BERKELEY
            </Text>
          </HStack>
          <Text
            fontFamily="Calistoga"
            fontSize="xl"
            color="blue.800"
            textAlign="right"
            w="250px"
            display={{ base: 'none', md: 'block' }}
          >
            #1 PUBLIC UNIVERSITY IN THE WORLD
          </Text>
        </HStack>
        <VStack
          bgColor="#004584"
          px={{ base: '0px', md: '50px' }}
          py="50px"
          w="100%"
          spacing="10px"
          minHeight="100vh"
        >
          <VStack
            alignItems="left"
            w="90%"
            borderRadius={8}
            bgColor="white"
            p="30px"
          >
            <Text color="gray.500">
              Posted by {data.author} <TimeAgo date={data.published} />
            </Text>
            <Text fontSize="3xl" lineHeight="30px">
              <b>{data.title}</b>
            </Text>
            <VStack alignItems="left" textAlign="left">
              <Text color="gray.300" lineHeight="25px">
                upvotes: {data.upvotes}
                <br />
                downvotes: {data.downvotes}
                <br />
                total: {+data.upvotes + +data.downvotes}
              </Text>
            </VStack>
            <Text fontSize="lg" pb="15px">
              <b>{data.content}</b>
            </Text>
            <Box w="100%" h="3px" bgColor="blue.500" my="5px"></Box>
            {data.comments.map(comment => {
              return <Comment comment={comment} />;
            })}
          </VStack>
        </VStack>
      </VStack>
    </ChakraProvider>
  );
};

export default PostView;
