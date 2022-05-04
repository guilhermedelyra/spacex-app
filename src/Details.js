/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import '@fontsource/orbitron';
import React, {useEffect, useState} from 'react';
import {
  ChakraProvider,
  Box,
  Link,
  Grid,
  Center,
  Text,
  AspectRatio,
  Flex,
  Spacer,
  IconButton,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import ImageSlider from './components/organisms/ImageSlider';
import Card from './components/organisms/Card';
import {useLocation, Link as ReactLink} from 'react-router-dom';
import theme from './theme';
import {FaArrowLeft} from 'react-icons/fa';

function Details() {
  const location = useLocation();

  const item = location.state;
  console.log(item);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={30}>
        <Flex alignItems="center" justifyContent="center">
          <Link as={ReactLink} to={'/'}>
            <IconButton
              aria-label="left-arrow"
              icon={<FaArrowLeft />}
              size="3xl"
              variant="ghost"
            />
          </Link>
          <Spacer />
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="7xl"
            fontWeight="extrabold"
            fontFamily={'title'}
            justifySelf="center"
          >
            {item.title}
          </Text>
          <Spacer />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <AspectRatio maxW="60%" ratio={16 / 9} mx="20%" my="2.5%">
          <iframe
            title={item.title}
            src={`https://www.youtube.com/embed/${item.youtube_id}`}
            allowFullScreen
          />
        </AspectRatio>

        <Text
          textAlign={'left'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          fontSize={item.details ? 'md' : 'sm'}
          as={item.details ? null : 'i'}
          mx={150}
        >
          {item.details ? item.details : '- No description was provided. -'}
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default Details;
