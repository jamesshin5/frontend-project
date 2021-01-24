import React from 'react';
import { Link } from 'react-router-dom';
import { Text, VStack, HStack, Flex, Image } from '@chakra-ui/react';

import berkeleyskyline from './given-img/berkeley-skyline.png';
import berkeleylogo from './given-img/berkeley-logo.png';

import data from './components/data/Data.json';
import PostPreview from './components/PostPreview';

const HomeScreen = () => {
  return (
    <VStack>
      <Flex bgSize="cover" direction="column" alignItems="center">
        <Image src={berkeleyskyline} alt="berkeley-skyline" />
      </Flex>
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
          <Image src={berkeleylogo} alt="berkeley-logo" w="200px" />
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
      >
        {data['posts'].map(post => {
          return <PostPreview post={post} />;
        })}
      </VStack>
    </VStack>
  );
};

export default HomeScreen;
